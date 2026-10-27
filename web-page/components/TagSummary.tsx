import type { PageData, PostItem } from "@/types";
import Pagination from "./Pagination";
import PostCard from "./PostCard";
import SiteHeader from "./SiteHeader";

const TagSummary = async ({ slug, posts, pageData }: {
  slug: string,
  posts: PostItem[],
  pageData: PageData
}) => {
  return (
    <div className="site-shell w-full">
      <SiteHeader />
      <main className="container mx-auto max-w-4xl px-6 py-16">
        <div className="page-intro !py-0">
          <span className="eyebrow">Collection</span>
          <h1 className="!text-5xl">{decodeURIComponent(slug)}</h1>
          <p>Notes gathered under this subject.</p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {posts.slice(pageData.start, pageData.end).map((post) => (
            <PostCard key={post.slug.join("/")} post={post} />
          ))}
        </div>
        <div className="mt-12">
          <Pagination
            basePath={`/tags/${slug}`}
            pages={pageData.pages}
            currentPage={pageData.currentPage}
          />
        </div>
      </main>
    </div>
  );
}

export default TagSummary;
