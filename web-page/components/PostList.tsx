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
          <span className="eyebrow">{category ? `${category.label} / Article index` : "All categories / Article index"}</span>
          <h1>{category?.brand ?? "Wisdom Archive"}</h1>
          <p>{category?.description ?? "A growing archive of ideas and practical knowledge across art and technology."}</p>
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
