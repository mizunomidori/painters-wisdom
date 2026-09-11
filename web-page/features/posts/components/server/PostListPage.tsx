import type { PageData } from "@/types";
import { createPageData, getPostData } from "@/lib/posts";
import PostList from "@/components/PostList";

type PostListPageProps = {
  currentPage?: number;
};

export default async function PostListPage({
  currentPage = 1,
}: PostListPageProps) {
  const posts = await getPostData();
  const pageData: PageData = createPageData(currentPage, posts.length);

  return <PostList posts={posts} pageData={pageData} />;
}
