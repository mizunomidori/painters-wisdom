import type { PageData, PostItem } from "@/types";
import Pagination from "./Pagination";
import PostCard from "./PostCard";

const TagSummary = async ({ slug, posts, pageData }: {
  slug: string,
  posts: PostItem[],
  pageData: PageData
}) => {
  return (
    <div className="w-full flex justify-center">
      <div className="my-8 container prose dark:prose-invert md:max-w-2xl flex-1">
        <h1 className="text-lg font-bold">Tag: {slug}</h1>
        <div className="grid grid-cols-1 gap-3">
          {posts.slice(pageData.start, pageData.end).map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </div>
        <div className='mb-3'>
          <Pagination
            type={`tags/${slug}`}
            pages={pageData.pages}
            currentPage={pageData.currentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default TagSummary;
