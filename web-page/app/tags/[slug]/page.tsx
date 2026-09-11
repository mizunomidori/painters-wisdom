import { PostItem } from "@/types";
import { Metadata } from "next";
import { getPostData } from "@/lib/posts";
import TagListPage from "@/features/tags/components/server/TagListPage";

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
  return <TagListPage slug={slug} />;
}
