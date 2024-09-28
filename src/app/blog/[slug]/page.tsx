import BlogSlug from "@/components/blog/blogslug";
import AnimatedPage from "../../../components/animations/animatedpage";
import { Metadata } from "next";
import Head from "next/head";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/posts/${params.slug}`;
  const post = await fetch(url).then((res) => res.json());
  return {
    title: post["title"],
    description: post.summary,
  };
}

export default function Blog({ params }: { params: { slug: string } }) {
  return (
    <AnimatedPage>
      <Head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </Head>
      <BlogSlug params={params} />
    </AnimatedPage>
  );
}
