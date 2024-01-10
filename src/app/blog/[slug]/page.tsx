"use client";

import { useEffect, useState, useCallback } from "react";
import { BiComment } from "react-icons/Bi";
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
  const url = `${process.env.NEXT_PUBLIC_API_URL}/posts/read/${params.slug}`;
  const [showComments, setShowComments] = useState(false);
  const [data, setData] = useState<PostData>(initialPostData);
  const getData = useCallback(async () => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [url]);
  useEffect(() => {
    getData();
  }, [getData]);
  const formattedDate = new Date(data.createdAt).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
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
              <span className="pl-2 text-gray-700">{formattedDate}</span>
            </div>
            <span className="text-justify mt-2">{data.content}</span>
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
            <div>
              {showComments ? (
                <>
                  <div className={`w-full flex flex-col justify-center`}>
                    {data.comments &&
                      data.comments.map((comment) => (
                        <div key={comment._id}>{comment.content}</div>
                      ))}
                  </div>
                </>
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
