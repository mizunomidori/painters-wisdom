import type { PageData, PostItem } from "@/types";
import Pagination from "./Pagination";
import PostCard from "./PostCard";

const PostList = async ({ posts, pageData }: { posts: PostItem[], pageData: PageData }) => {
  return (
    <div className="site-shell w-full">
      <header className="site-header">
        <div className="site-header-inner">
          <span className="brand-mark">Painters&apos; wisdom</span>
          <span className="header-note">An archive of materials &amp; practice</span>
        </div>
      </header>
      <main className="container mx-auto max-w-6xl px-6 pb-12">
        <div className="page-intro">
          <span className="eyebrow">Field notes / 01</span>
          <h1>For the work<br />in front of you.</h1>
          <p>Practical knowledge about pigments, surfaces, and the patient craft of painting.</p>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          {posts.slice(pageData.start, pageData.end).map((post) => (
            <PostCard key={post.slug.join('/')} post={post} />
          ))}
        </div>
        {
          pageData.totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <Pagination
                type="page"
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
