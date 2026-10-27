import type { PageData, PostItem } from "@/types";
import type { CATEGORIES } from "@/constants";
import Pagination from "./Pagination";
import PostCard from "./PostCard";
import SiteHeader from "./SiteHeader";

const PostList = async ({
  posts,
  pageData,
  category,
  currentPagePath,
}: {
  posts: PostItem[];
  pageData: PageData;
  category?: (typeof CATEGORIES)[number];
  currentPagePath: string;
}) => {
  return (
    <div className="site-shell w-full">
      <SiteHeader activeCategory={category?.id} />
      <main className="container mx-auto max-w-6xl px-6 pb-12">
        <div className="page-intro">
          <span className="eyebrow">{category ? `${category.label} / Field notes` : "All categories / Field notes"}</span>
          <h1>{category ? `${category.label}, thoughtfully.` : "For the work in front of you."}</h1>
          <p>{category?.description ?? "Practical knowledge across art, materials, and technology for creative work."}</p>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          {posts.slice(pageData.start, pageData.end).map((post) => (
            <PostCard key={post.slug.join('/')} post={post} />
          ))}
        </div>
        {posts.length === 0 && (
          <div className="category-empty">
            <span className="eyebrow">A new collection</span>
            <p>No {category?.label.toLowerCase()} articles have been published yet. Check back soon.</p>
          </div>
        )}
        {
          pageData.totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <Pagination
                basePath={currentPagePath}
                pages={pageData.pages}
                currentPage={pageData.currentPage}
              />
            </div>
          )
        }
      </main>
    </div>
  );
}

export default PostList;
