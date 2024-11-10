import PostCard from "../../../components/PostCard";
import Pagination from "../../../components/Pagination";
import { Metadata } from "next";
import { POSTS_PER_PAGE } from "@/constants";
import type { PageData } from "@/types";
import { createPageData, getPostData } from "@/lib/posts";

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
    <div className="container w-full h-full overflow-hidden flex justify-center">
      <div className="prose dark:prose-invert md:max-w-3xl w-2/3 m-2">
        <div>
          <h1>Artists&apos; wisdom</h1>
        </div>
        <div className="w-full grid grid-cols-2 gap-2">
          {posts.slice(pageData.start, pageData.end).map((post) => (
            <PostCard key={post.slug.join('/')} post={post} />
          ))}
        </div>
        <div className="mb-3 flex justify-center">
          <Pagination
            type="page"
            pages={pageData.pages}
            currentPage={pageData.currentPage}
          />
        </div>
      </div>
    </div>
  );
}
