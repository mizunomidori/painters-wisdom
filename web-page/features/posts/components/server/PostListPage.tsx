import type { PageData } from "@/types";
import { CATEGORIES } from "@/constants";
import { createPageData, getCategoryData, getPostData } from "@/lib/posts";
import PostList from "@/components/PostList";

type PostListPageProps = {
  currentPage?: number;
  categoryId?: string;
};

export default async function PostListPage({
  currentPage = 1,
  categoryId,
}: PostListPageProps) {
  const category = CATEGORIES.find(({ id }) => id === categoryId);
  const posts = category
    ? await getCategoryData(category.id)
    : await getPostData();
  const pageData: PageData = createPageData(currentPage, posts.length);

  return (
    <PostList
      posts={posts}
      pageData={pageData}
      category={category}
      currentPagePath={category ? `/${category.id}/page` : "/page"}
    />
  );
}
