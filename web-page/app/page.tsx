
import CategoryOverview from "@/components/CategoryOverview";
import { getPostData } from "@/lib/posts";

export default async function Home() {
  const posts = await getPostData();
  return <CategoryOverview posts={posts} />;
}
