import type { PageData, PostItem } from "@/types";
import Pagination from "./Pagination";
import PostCard from "./PostCard";

const PostList = async ({ posts, pageData }: { posts: PostItem[], pageData: PageData }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="container prose dark:prose-invert md:max-w-3xl m-2 flex-1">
        <div>
          <h1>Painters&apos; wisdom</h1>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-2">
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

export default PostList;
