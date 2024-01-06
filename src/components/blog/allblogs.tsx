import { useEffect, useState } from "react";
import AnimatedDiv from "../animations/animateddiv";
import Blog from "./blog";

export default function AllBlogs() {
  const url = "http://localhost:8080/api/posts";
  const [posts, setPosts] = useState<any[]>([]);
  async function getPosts() {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        console.log(data);
      });
  }
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <AnimatedDiv className="min-h-screen w-full sm:w-5/6 flex flex-col justify-center items-center px-2 py-4">
      {posts.map((post) => (
        <Blog
          key={post.id}
          title={post.title}
          content={post.content}
          time={post.time}
        />
      ))}
    </AnimatedDiv>
  );
}
