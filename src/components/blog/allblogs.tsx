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
      </AnimatedDiv>
      {isLoading ? (
        <div className="absolute w-full h-screen flex flex-col justify-center items-center -mt-16">
          <LoadingSpinner size={48} />
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-4 justify-center items-center mt-4 lg:mt-6">
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
        </div>
      )}
    </AnimatedDiv>
  );
}
