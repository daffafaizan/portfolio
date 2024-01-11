"use client";

import { useEffect, useState, useCallback } from "react";
import { BiComment } from "react-icons/Bi";
import { RxPerson } from "react-icons/rx";
import AnimatedDiv from "../../../components/animations/animateddiv";
import AnimatedPage from "../../../components/animations/animatedpage";

interface PostData {
  title: string;
  slug: string;
  summary: string;
  content: string;
  createdAt: string;
  postAuthor: {
    name: string;
    institution: string;
    occupation: string;
  };
  tags: string[];
  comments: any[] | null;
}

const initialPostData: PostData = {
  title: "",
  slug: "",
  summary: "",
  content: "",
  createdAt: "",
  postAuthor: {
    name: "",
    institution: "",
    occupation: "",
  },
  tags: [],
  comments: null,
};

export default function Blog({ params }: { params: { slug: string } }) {
  const getUrl = `${process.env.NEXT_PUBLIC_API_URL}/posts/${params.slug}`;
  const postUrl = `${process.env.NEXT_PUBLIC_API_URL}/posts/${params.slug}/comments`;
  const [showComments, setShowComments] = useState(false);
  const [data, setData] = useState<PostData>(initialPostData);
  const [name, setName] = useState("Anonymous");
  const [content, setContent] = useState("");
  const handleSubmit = async () => {
    event?.preventDefault();
    try {
      const response = await fetch(postUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          commentAuthor: name,
          content: content,
        }),
      });

      if (response.ok) {
        getData();
        setName("");
        setContent("");
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error during submission", error);
    }
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
      });
  }, [getUrl]);
  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <AnimatedPage>
      <main className="flex flex-col items-center p-4">
        <div className="min-h-screen w-full sm:w-5/6 md:w-[640px] flex flex-col items-center mt-16 sm:mt-32 px-2 pb-4">
          <AnimatedDiv className="w-full flex flex-col text-left gap-2">
            <span className="text-2xl sm:text-4xl font-semibold">
              {data.title}
            </span>
            <div className="w-full flex flex-row items-center text-sm">
              <span className="border-r border-r-black pr-2">
                {data.postAuthor.name}
              </span>
              <span className="pl-2 text-gray-700">
                {formatDate(data.createdAt)}
              </span>
            </div>
            <span
              className="text-justify mt-2"
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
            <hr className="my-2" />
            <div className="w-full flex flex-row p-1">
              <BiComment
                className={`h-6 w-6 ${
                  showComments
                    ? "text-[#45b8ac] hover:text-[#3ea69b]"
                    : "text-black hover:text-[#45b8ac]"
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
                            <div className="h-7 w-7 aspect-square flex items-center justify-center border border-black rounded-full">
                              <RxPerson />
                            </div>
                            <div className="w-full flex flex-col">
                              <span>{comment.commentAuthor}</span>
                              <span className="text-xs text-gray-700">
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
    </AnimatedPage>
  );
}
