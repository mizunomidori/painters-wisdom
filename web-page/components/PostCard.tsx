import Link from "next/link";
import { CATEGORIES } from "@/constants";
import type { PostItem } from "@/types";

const PostCard = ({ post }: { post: PostItem }) => {
  const category = CATEGORIES.find(({ id }) => id === post.category);

  return (
    <Link
      href={`/posts/${post.slug.join('/')}`}
      className="group"
    >
      <div className="post-card flex flex-col justify-between">
        <div className="post-card-meta">
          <span className={`category-pill category-${post.category}`}>{category?.label ?? post.category}</span>
          <span className="eyebrow">Read note <span aria-hidden="true">↗</span></span>
        </div>
        <div>
          <h2 className="post-card-title font-bold">{post.title}</h2>
          {post.summary && <p className="post-card-summary">{post.summary}</p>}
          <span className="post-card-date">{post.date}</span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
