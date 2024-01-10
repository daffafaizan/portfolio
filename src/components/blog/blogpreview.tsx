import AnimatedDiv from "../animations/animateddiv";

interface BlogPreviewProps {
  title: string;
  summary: string;
  createdAt: string;
  postAuthor: any;
  tags: any;
}

export default function BlogPreview({
  title,
  summary,
  createdAt,
  postAuthor,
  tags,
}: BlogPreviewProps) {
  const formattedDate = new Date(createdAt).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <AnimatedDiv className="flex flex-col w-auto border bg-white hover:drop-shadow-lg duration-150 transition rounded-3xl p-5 gap-2">
      <span>
        {formattedDate} by {postAuthor.name}
      </span>
      <span>{title}</span>
      <span>{summary}</span>
      <div className="w-full flex flex-row">
        {tags.map((tag: any) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </AnimatedDiv>
  );
}
