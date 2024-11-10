import PostCard from "../components/PostCard";
import Pagination from "../components/Pagination";
import type { PageData } from "@/types";
import { createPageData, getPostData } from "@/lib/posts";

export default async function Home() {
  const posts = await getPostData();
  const pageData: PageData = createPageData(1, posts.length);

  return (
    <div className="container w-full h-full overflow-hidden flex justify-center">
      <div className="prose dark:prose-invert md:max-w-3xl w-2/3 m-2">
        <div>
          <h1>Artists&apos; wisdom</h1>
        </div>
        <div className="w-full grid grid-cols-2 gap-2">
          {posts.slice(pageData.start, pageData.end).map((post) => (
            <PostCard key={post.slug.join('/')} post={post} />
          ))}
        </div>
        {
          pageData.totalPages > 1 && (
            <div className="mb-3 flex justify-center">
              <Pagination
                type="page"
                pages={pageData.pages}
                currentPage={pageData.currentPage}
              />
            </div>
          )
        }
      </div>
    </div>
  );
}
