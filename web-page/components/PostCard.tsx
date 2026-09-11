import Link from "next/link";
import type { PostItem } from "@/types";

const PostCard = ({ post }: { post: PostItem }) => {
  return (
    <Link
      href={`/posts/${post.slug.join('/')}`}
      className="group"
    >
      <div className="post-card flex flex-col justify-between">
        <span className="eyebrow">Read note <span aria-hidden="true">↗</span></span>
        <div>
          <h2 className="post-card-title font-bold">{post.title}</h2>
          <span className="post-card-date">{post.date}</span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
