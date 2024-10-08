"use client";

import { useCallback, useEffect, useState } from "react";
import AnimatedDiv from "../animations/animateddiv";
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { BiComment } from "react-icons/bi";
import { RxPerson } from "react-icons/rx";

interface PostData {
  title: string;
  slug: string;
  summary: string;
  content: string;
  aiContent: string;
  createdAt: string;
  postAuthor: string;
  tags: string[];
  comments: any[] | null;
}

const initialPostData: PostData = {
  title: "",
  slug: "",
  summary: "",
  content: "",
  aiContent: "",
  createdAt: "",
  postAuthor: "",
  tags: [],
  comments: null,
};

export default function BlogSlug({ params }: { params: { slug: string } }) {
  const getUrl = `${process.env.NEXT_PUBLIC_API_URL}/posts/${params.slug}`;
  const postUrl = `${process.env.NEXT_PUBLIC_API_URL}/posts/${params.slug}/comments`;
  const [showComments, setShowComments] = useState(false);
  const [data, setData] = useState<PostData>(initialPostData);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [showAI, setShowAI] = useState(false);
  const handleSubmit = async () => {
    event?.preventDefault();
    let commentAuthor;
    if (name == "") {
      commentAuthor = "Anonymous";
    } else {
      commentAuthor = name;
    }
    const response = await fetch(postUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        commentAuthor: commentAuthor,
        content: content,
      }),
    });

    getData();
    setName("");
    setContent("");
  };
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };
  const formatDateWithoutDay = (date: string) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };
  const getData = useCallback(async () => {
    await fetch(getUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        if (data.aiContent) {
          setShowAI(true);
        }
      });
  }, [getUrl]);
  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <main className="flex flex-col items-center p-4">
      <div className="min-h-screen w-full sm:w-5/6 md:w-[640px] flex flex-col items-center text-white mt-16 sm:mt-32 px-2 pb-4">
        <AnimatedDiv className="w-full flex flex-col text-left gap-2">
          <span className="text-2xl sm:text-4xl font-semibold">
            {data.title}
          </span>
          <div className="w-full flex flex-row items-center text-sm">
            <span className="border-r border-r-white pr-2">
              {data.postAuthor}
            </span>
            <span className="pl-2 text-gray-600">
              {formatDate(data.createdAt)}
            </span>
            <span className="text-sm ml-auto">AI Version</span>
            {showAI ? (
              <LiaToggleOnSolid
                className="ml-2 h-8 w-8 cursor-pointer"
                onClick={() => setShowAI(!showAI)}
              />
            ) : (
              <LiaToggleOffSolid
                className="ml-2 h-8 w-8 cursor-pointer"
                onClick={() => setShowAI(!showAI)}
              />
            )}
          </div>
          <Markdown
            className="text-justify text-sm mt-2"
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              code(props) {
                const { children, className, node, ...rest } = props as any;
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    language={match[1]}
                    style={dark}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code {...rest}>{children}</code>
                );
              },
            }}
          >
            {showAI
              ? data.aiContent == ""
                ? "AI version unavailable."
                : data.aiContent
              : data.content}
          </Markdown>
          <hr className="my-2" />
          <div className="w-full flex flex-row p-1">
            <BiComment
              className={`h-6 w-6 ${
                showComments
                  ? "text-[#45b8ac] hover:text-[#3ea69b]"
                  : "text-white hover:text-[#45b8ac]"
              } hover:text-[#45b8ac]`}
              onClick={() => setShowComments(!showComments)}
            />
          </div>
          <div className="flex items-center justify-center text-sm">
            {showComments ? (
              data.comments && data.comments.length > 0 ? (
                <div className={`w-5/6 flex flex-col justify-center gap-4`}>
                  {data.comments &&
                    data.comments.map((comment) => (
                      <div
                        key={comment._id}
                        className="w-full flex flex-col items-center gap-2"
                      >
                        <div className="w-full flex flex-row items-center gap-2">
                          <div className="h-7 w-7 aspect-square flex items-center justify-center border border-white rounded-full">
                            <RxPerson />
                          </div>
                          <div className="w-full flex flex-col">
                            <span>{comment.commentAuthor}</span>
                            <span className="text-xs text-gray-400">
                              {formatDateWithoutDay(comment.createdAt)}
                            </span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-100 bg-opacity-65 rounded-sm p-2">
                          <span>{comment.content}</span>
                        </div>
                      </div>
                    ))}
                  <form
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col items-center gap-2"
                  >
                    <div className="w-full border-2 border-gray-100 rounded-sm p-2">
                      <input
                        className="w-full border-2 border-gray-100 rounded-sm p-2"
                        placeholder="Name"
                        value={name}
                        name={name}
                        onChange={(e) => setName(e.currentTarget.value)}
                      />
                      <textarea
                        className="w-full h-40 border-2 border-gray-100 rounded-sm mt-2 p-2"
                        placeholder="Create a comment"
                        value={content}
                        name={content}
                        onChange={(e) => setContent(e.currentTarget.value)}
                      />
                      <button
                        type="submit"
                        className="w-full text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-sm mt-1 py-2"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="w-5/6 flex flex-col justify-center gap-4">
                  <div className="w-full flex flex-col items-center gap-2">
                    <div className="w-full bg-gray-100 bg-opacity-65 rounded-sm p-2">
                      <span>No comments found.</span>
                    </div>
                  </div>
                  <form
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col items-center gap-2"
                  >
                    <div className="w-full border-2 border-gray-100 rounded-sm p-2">
                      <input
                        className="w-full border-2 border-gray-100 rounded-sm p-2"
                        placeholder="Name"
                        name={name}
                        onChange={(e) => setName(e.currentTarget.value)}
                      />
                      <textarea
                        className="w-full h-40 border-2 border-gray-100 rounded-sm mt-2 p-2"
                        placeholder="Create a comment"
                        name={content}
                        onChange={(e) => setContent(e.currentTarget.value)}
                      />
                      <button
                        type="submit"
                        className="w-full bg-gray-100 hover:bg-gray-200 rounded-sm mt-1 py-2"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              )
            ) : (
              <></>
            )}
          </div>
        </AnimatedDiv>
      </div>
    </main>
  );
}
