import type { PageData } from "@/types";
import { createPageData, getTagsData } from "@/lib/posts";
import TagSummary from "@/components/TagSummary";

type TagListPageProps = {
  slug: string;
  currentPage?: number;
};

export default async function TagListPage({
  slug,
  currentPage = 1,
}: TagListPageProps) {
  const posts = await getTagsData(slug);
  const pageData: PageData = createPageData(currentPage, posts.length);

  return <TagSummary slug={slug} posts={posts} pageData={pageData} />;
}
