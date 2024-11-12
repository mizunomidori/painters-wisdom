import { Metadata } from "next";
import { POSTS_PER_PAGE } from "@/constants";
import type { PageData } from "@/types";
import { createPageData, getPostData } from "@/lib/posts";
import PostList from "@/components/PostList";

type Props = {
  params: Promise<{ page: number }>;
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const page = (await params).page;
  const title = `pp. ${page}`;
  return {
    title: `${title} | Artists' wisdom`,
    description: `${title}`,
  };
}

// 静的ルートの作成
export async function generateStaticParams() {
  const posts = await getPostData();

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const pages = Array.from({ length: totalPages }, (_, i) => {
    return {
      path: `/page/${i + 1}`,
      page: `${i + 1}`,
    };
  });

  return pages;
}

export default async function Page({ params }: Props) {
  const posts = await getPostData();

  const page = (await params).page;
  const pageData: PageData = createPageData(page, posts.length);

  return (
    <PostList posts={posts} pageData={pageData} />
  );
}
