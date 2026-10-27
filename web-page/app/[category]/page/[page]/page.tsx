import type { Metadata } from "next";
import { CATEGORIES, POSTS_PER_PAGE } from "@/constants";
import { getCategoryData } from "@/lib/posts";
import PostListPage from "@/features/posts/components/server/PostListPage";

type Props = {
  params: Promise<{ category: string; page: string }>;
};

export async function generateStaticParams() {
  const routes: { category: string; page: string }[] = [];

  for (const { id } of CATEGORIES) {
    const posts = await getCategoryData(id);
    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
    for (let page = 1; page <= Math.max(totalPages, 1); page++) {
      routes.push({ category: id, page: String(page) });
    }
  }

  return routes;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categoryId, page } = await params;
  const category = CATEGORIES.find(({ id }) => id === categoryId);

  return {
    title: `${category?.label ?? categoryId} · Page ${page} | Painters' wisdom`,
    description: category?.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category, page } = await params;
  return <PostListPage categoryId={category} currentPage={Number(page)} />;
}
