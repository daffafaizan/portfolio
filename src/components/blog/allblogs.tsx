import { useEffect, useState } from "react";
import AnimatedDiv from "../animations/animateddiv";

export default function AllBlogs() {
  const url = "http://localhost:8080/api/posts";
  const [posts, setPosts] = useState([]);
  const getPosts = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <AnimatedDiv className="min-h-screen w-full sm:w-5/6 flex flex-col justify-center items-center px-2 py-4">
      test
    </AnimatedDiv>
  );
}
