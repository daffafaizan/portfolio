import { useEffect, useState, useCallback } from "react";
import AnimatedDiv from "../animations/animateddiv";
import BlogPreview from "./blogpreview";

export default function AllBlogs() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/posts`;
  const [posts, setPosts] = useState<any[]>([]);
  const getPosts = useCallback(async () => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, [url]);
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
    <AnimatedDiv className="min-h-screen w-full sm:w-5/6 flex flex-col items-center mt-16 px-2 pb-4">
      <AnimatedDiv className="w-full text-left mb-4 sm:mb-8">
        <span className="text-3xl sm:text-5xl lg:text-7xl font-semibold">
          Blogs
        </span>
      </AnimatedDiv>

      <AnimatedDiv className="w-full grid grid-cols-1 flex-wrap items-center gap-6 sm:gap-4">
        {posts.length > 0 &&
          posts.map((post) => (
            <BlogPreview
              key={post._id}
              slug={post.slug}
              title={post.title}
              summary={post.summary}
              createdAt={post.createdAt}
              postAuthor={post.postAuthor}
              tags={post.tags}
            />
          ))}
        {posts.length == 0 && (
          <AnimatedDiv className="flex flex-col w-auto bg-white gap-2">
            <span className="text-md font-semibold">No blog posts found.</span>
            <hr className="my-4" />
          </AnimatedDiv>
        )}
      </AnimatedDiv>
    </AnimatedDiv>
  );
}
