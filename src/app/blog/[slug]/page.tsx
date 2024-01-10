"use client";

import { useEffect, useState, useCallback } from "react";
import { TfiComment } from "react-icons/tfi";
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
        <div className="min-h-screen w-full sm:w-5/6 md:w-[640px] flex flex-col items-center mt-16 px-2 pb-4">
          <AnimatedDiv className="w-full flex flex-col text-left gap-2">
            <span className="text-2xl sm:text-4xl font-semibold">
              {data.title}
            </span>
            <span>{data.postAuthor.name}</span>
            <span>{formattedDate}</span>
            <span className="text-justify">{data.content}</span>
            <div className="w-full flex flex-row">
              <TfiComment
                className="hover:text-[#45b8ac]"
                onClick={() => setShowComments(!showComments)}
              />
            </div>
            {showComments ? (
              <div className="w-full flex flex-col">
                {data.comments &&
                  data.comments.map((comment) => (
                    <div key={comment._id}>{comment.content}</div>
                  ))}
              </div>
            ) : (
              <></>
            )}
          </AnimatedDiv>
        </div>
      </main>
    </AnimatedPage>
  );
}
