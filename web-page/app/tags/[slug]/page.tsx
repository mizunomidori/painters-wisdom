import PostCard from "../../../components/PostCard";
import { PostItem } from "@/types";
import { Metadata, ResolvingMetadata } from "next";
import type { PageData } from "@/types";
import { createPageData, getPostData, getTagsData } from "@/lib/posts";
import Pagination from "../../../components/Pagination";

interface Props {
  params: { slug: string }
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
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

export default async function TagPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const posts = await getTagsData(slug);
  const pageData: PageData = createPageData(
    1,
    posts.length
  );

  return (
    <>
      <div className="prose dark:prose-invert m-8">
        <h1 className="mx-8 my-2 text-lg font-bold">Tag: {slug}</h1>
        <div className="grid grid-cols-1 gap-2">
          {posts.slice(pageData.start, pageData.end).map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </div>
        <div className='mb-3'>
          <Pagination type={`tags/${slug}`} pages={pageData.pages} currentPage={pageData.currentPage} />
        </div>
      </div>
    </>
  );
}
