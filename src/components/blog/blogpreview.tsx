import AnimatedDiv from "../animations/animateddiv";

interface BlogPreviewProps {
  title: string;
  summary: string;
  content: string;
  date: string;
  time: string;
  postAuthor: any;
  comments: any;
}

export default function BlogPreview({
  title,
  summary,
  content,
  date,
  postAuthor,
}: BlogPreviewProps) {
  return (
    <AnimatedDiv className="flex flex-col h-80 aspect-square w-auto border border-black rounded-3xl p-5 gap-2">
      <span className="text-md font-semibold">{title}</span>
      <span className="text-sm">
        {date} by <span className="font-semibold">{postAuthor.name}</span>
      </span>
      <span className="flex-grow text-sm">{summary}</span>
    </AnimatedDiv>
  );
}
