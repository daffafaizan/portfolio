import { useEffect, useState, useCallback } from "react";
import AnimatedDiv from "../animations/animateddiv";
import Blog from "./blog";

export default function AllBlogs() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/posts`;
  const [posts, setPosts] = useState<any[]>([]);
  const getPosts = useCallback(async () => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        console.log(data);
      });
  }, [url]);
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
    <AnimatedDiv className="min-h-screen w-full sm:w-5/6 flex flex-col items-center mt-16 px-2 pb-4">
      <AnimatedDiv className="w-full text-left mb-4 sm:mb-6">
        <span className="text-3xl sm:text-5xl lg:text-7xl font-semibold">
          Blog
        </span>
      </AnimatedDiv>
      <div className="w-full flex flex-row flex-wrap items-center gap-4">
        {posts.map((post) => (
          <Blog
            key={post._id}
            title={post.title}
            content={post.content}
            date={post.date}
            time={post.time}
            postAuthor={post.postAuthor}
            comments={post.comments}
          />
        ))}
      </div>
    </AnimatedDiv>
  );
}
