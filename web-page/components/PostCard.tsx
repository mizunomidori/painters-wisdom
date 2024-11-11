import Link from "next/link";
import { PostItem } from "@/types";

const PostCard = ({ post }: { post: PostItem }) => {
  return (
    <Link
      href={`/painters-wisdom/posts/${post.slug.join('/')}`}
      className="align-self-baseline col-lg-4 d-flex flex-column justify-content-between scale-95 hover:scale-100 ease-in duration-100"
    >
      <div className="bg-gray-200 dark:bg-gray-800">
        <div className="px-2 py-3 mt-auto">
          <h1 className="font-bold text-lg">{post.title}</h1>
          <span className="badge bg-secondary text-white">{post.date}</span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
