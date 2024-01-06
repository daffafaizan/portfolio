import AnimatedDiv from "../animations/animateddiv";

interface BlogProps {
  title: string;
  content: string;
  time: string;
  postAuthor: any;
  comments: any;
}

export default function Blog({ title, content, time, postAuthor }: BlogProps) {
  return (
    <AnimatedDiv className="flex flex-col h-80 aspect-square w-auto border border-black rounded-3xl p-5 gap-2">
      <span className="text-md font-semibold">{title}</span>
      <span className="text-sm">
        {time} by <span className="font-semibold">{postAuthor.name}</span>
      </span>
      <span className="flex-grow text-sm">{content}</span>
    </AnimatedDiv>
  );
}
