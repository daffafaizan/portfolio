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
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <AnimatedDiv className="relative h-60 w-full">
      <div className="absolute flex z-20 flex-col justify-center h-full w-full rounded-md gap-2 p-4 border border-gray-700 bg-[#101820]">
        <span className="text-sm text-gray-600 font-light">
          {formattedDate} by {postAuthor}
        </span>
        <span className="text-lg text-white font-bold decoration-white -my-2">
          {title}
        </span>
        <span className="text-sm text-white my-2">{summary}</span>
        <div className="w-full flex flex-row flex-wrap text-sm gap-1">
          {tags?.map((tag: any) => (
            <span
              key={tag}
              className="border border-white hover:bg-[#45b8ac] hover:text-white hover:border-[#101820] text-white duration-150 rounded-xl px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/blog/${slug}`}>
          <span className="hover:text-[#45b8ac] text-white duration-150">
            Read more.
          </span>
        </Link>
      </div>
    </AnimatedDiv>
  );
}
