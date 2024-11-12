import { PostItem } from "@/types";
import { Metadata } from "next";
import type { PageData } from "@/types";
import { createPageData, getPostData, getTagsData } from "@/lib/posts";
import TagSummary from "@/components/TagSummary";

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
  const slug = (await params).slug;
  const tag = decodeURIComponent(slug);
  return {
    title: `${tag} | Artists' wisdom`,
    description: `${tag}`,
  }
}

// 静的ルートの作成
export async function generateStaticParams() {
  const allTags = new Set<string>();

  const posts = await getPostData();
  posts.forEach((post: PostItem) => {
    if (post.tags) {
      post.tags.forEach((tag: string) => {
        return allTags.add(encodeURIComponent(tag));
      });
    }
  });

  const params = Array.from(allTags).map((tag) => {
    return {
      path: `/tags/${tag}`,
      slug: tag,
    };
  });

  return params;
}

export default async function TagPage({ params }: Props) {
  const slug = (await params).slug;
  const posts = await getTagsData(slug);
  const pageData: PageData = createPageData(
    1,
    posts.length
  );

  return (
    <TagSummary slug={slug} posts={posts} pageData={pageData} />
  );
}
