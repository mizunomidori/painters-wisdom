
import { PostItem } from "@/types";
import { Metadata } from "next";
import type { PageData } from "@/types";
import {
  createPageData,
  getPostData,
  getTagsData,
} from "@/lib/posts";
import TagSummary from "@/components/TagSummary";

type Props = {
  params: Promise<{
    slug: string;
    page: number
  }>;
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { slug, page } = await params;
  const tag = decodeURIComponent(slug);
  const title = `${tag} - ${page}ページ目 | Nemutai`;
  return {
    title: title,
    description: `${tag}`,
  };
}

// 静的ルートの作成
export async function generateStaticParams() {
  const tagMaps: Record<string, number> = {};
  const posts = await getPostData();
  posts.forEach((post: PostItem) => {
    if (post.tags) {
      post.tags.forEach((tag: string) => {
        tag = encodeURIComponent(tag);
        if (tagMaps[tag]) {
          tagMaps[tag]++;
        } else {
          tagMaps[tag] = 1;
        }
      });
    }
  });

  const params: { path: string; slug: string; page: string }[] = [];

  // ページ数で按分
  for (const key in tagMaps) {
    if (tagMaps.hasOwnProperty(key)) {
      const totalPages = Math.ceil(tagMaps[key] / 1);
      for (let i = 1; i <= totalPages; i++) {
        const routes = {
          path: `/tags/${key}/${i}`,
          slug: `${key}`,
          page: `${i}`,
        };
        params.push(routes);
      }
    }
  }

  return params;
}

export default async function TagPage({ params }: Props) {
  const { slug, page } = await params;
  const posts = await getTagsData(slug);

  const pageData: PageData = createPageData(page, posts.length);

  return (
    <TagSummary slug={slug} posts={posts} pageData={pageData} />
  );
}
