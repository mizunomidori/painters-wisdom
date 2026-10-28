import type { Metadata } from "next";
import { CATEGORIES } from "@/constants";
import PostListPage from "@/features/posts/components/server/PostListPage";

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return CATEGORIES.map(({ id }) => ({ category: id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categoryId } = await params;
  const category = CATEGORIES.find(({ id }) => id === categoryId);

  return {
    title: `${category?.brand ?? categoryId} | Wisdom Archive`,
    description: category?.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  return <PostListPage categoryId={category} />;
}
