import Link from "next/link";
import AnimatedDiv from "../animations/animateddiv";

interface BlogPreviewProps {
  slug: string;
  title: string;
  summary: string;
  createdAt: string;
  postAuthor: any;
  tags: any;
}

export default function BlogPreview({
  slug,
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
    <AnimatedDiv className="flex flex-col w-auto border rounded-3xl p-5 gap-2">
      <span className="text-sm text-gray-700 font-light">
        {formattedDate} by {postAuthor.name}
      </span>
      <span className="text-md font-semibold">{title}</span>
      <span className="text-sm">{summary}</span>
      <div className="w-full flex flex-row gap-1">
        {tags.map((tag: any) => (
          <span key={tag} className="border rounded-xl px-2 py-1">
            {tag}
          </span>
        ))}
      </div>
      <Link href={`/blog/${slug}`}>Read more.</Link>
    </AnimatedDiv>
  );
}
