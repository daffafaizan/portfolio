import { useEffect, useState, useCallback } from "react";
import AnimatedDiv from "../animations/animateddiv";
import BlogPreview from "./blogpreview";
import { LoadingSpinner } from "../ui/spinner";

export default function AllBlogs() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/posts`;
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const getPosts = useCallback(async () => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setPosts(data);
      });
  }, [url]);
  useEffect(() => {
    setIsLoading(true);
    getPosts();
  }, [getPosts]);
  return (
    <AnimatedDiv className="min-h-screen w-full sm:w-5/6 flex flex-col items-center mt-16 px-2 pb-4">
      <AnimatedDiv className="w-full flex flex-row items-center text-left mb-4 sm:mb-8 font-semibold text-white">
        <span className="text-3xl sm:text-5xl lg:text-7xl">Blogs</span>
        <button
          type="submit"
          className="ml-auto border border-white text-white hover:bg-[#45b8ac] hover:text-white hover:border-[#101820] duration-150 rounded-full px-3 py-2 text-base"
        >
          Create a post.
        </button>
      </AnimatedDiv>
      {isLoading ? (
        <div className="absolute w-full h-screen flex flex-col justify-center items-center -mt-16">
          <LoadingSpinner size={48} />
        </div>
      ) : (
        <AnimatedDiv className="w-full grid grid-cols-1 flex-wrap items-center gap-6 sm:gap-4">
          {posts.map((post) => (
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
        </AnimatedDiv>
      )}
    </AnimatedDiv>
  );
}
