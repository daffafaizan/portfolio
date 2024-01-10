"use client";

import { useEffect, useState, useCallback } from "react";
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
  _id: string;
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
  _id: "",
};

export default function Blog({ params }: { params: { slug: string } }) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/posts/read/${params.slug}`;
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
  return (
    <AnimatedPage>
      <main className="flex flex-col items-center p-4">
        <div className="min-h-screen w-full sm:w-5/6 flex flex-col items-center mt-16 px-2 pb-4">
          <AnimatedDiv className="w-full text-left">
            <span className="text-3xl sm:text-5xl lg:text-7xl font-semibold">
              {data.title}
            </span>
          </AnimatedDiv>
        </div>
      </main>
    </AnimatedPage>
  );
}
