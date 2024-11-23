import Link from "next/link";
import type { PostItem } from "@/types";

const PostCard = ({ post }: { post: PostItem }) => {
  return (
    <Link
      href={`/posts/${post.slug.join('/')}`}
      className="align-baseline flex flex-col justify-between ease-in duration-100"
    >
      <div className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700">
        <div className="px-2 py-3 mt-auto">
          <h1 className="font-bold text-lg">{post.title}</h1>
          <span className="badge bg-secondary text-gray-800 dark:text-gray-300">{post.date}</span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
