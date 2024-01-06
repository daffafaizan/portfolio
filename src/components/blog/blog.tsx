import AnimatedDiv from "../animations/animateddiv";

interface BlogProps {
  title: string;
  content: string;
}

export default function Blog({ title, content }: BlogProps) {
  return (
    <AnimatedDiv className="flex flex-col h-80 aspect-square w-auto border border-black rounded-2xl p-2">
      <span className="font-semibold">{title}</span>
      <span>{content}</span>
    </AnimatedDiv>
  );
}
