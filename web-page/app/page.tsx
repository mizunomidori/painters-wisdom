
import type { PageData } from "@/types";
import { createPageData, getPostData } from "@/lib/posts";
import PostList from "@/components/PostList";

export default async function Home() {
  const posts = await getPostData();
  const pageData: PageData = createPageData(1, posts.length);

  return (
    <PostList posts={posts} pageData={pageData} />
  );
}
