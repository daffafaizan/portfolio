import Link from "next/link";

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
    <div className="flex flex-col w-auto gap-2">
      <span className="text-sm text-gray-600 font-light">
        {formattedDate} by {postAuthor}
      </span>
      <span className="text-lg text-white font-semibold">{title}</span>
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
      <hr className="my-2" />
    </div>
  );
}
