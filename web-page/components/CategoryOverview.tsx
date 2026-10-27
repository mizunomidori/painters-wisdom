import Link from "next/link";
import { CATEGORIES } from "@/constants";
import type { PostItem } from "@/types";
import PostCard from "./PostCard";
import SiteHeader from "./SiteHeader";

export default function CategoryOverview({ posts }: { posts: PostItem[] }) {
  return (
    <div className="site-shell w-full">
      <SiteHeader />
      <main className="container mx-auto max-w-6xl px-6 pb-16">
        <div className="page-intro">
          <span className="eyebrow">A field guide for makers</span>
          <h1>Ideas for the<br />work in front of you.</h1>
          <p>Explore thoughtful notes on art and technology, gathered in one quiet archive.</p>
        </div>
        <div className="category-overview-grid">
          {CATEGORIES.map((category) => {
            const categoryPosts = posts.filter((post) => post.category === category.id);
            return (
              <section className="category-overview" key={category.id}>
                <div className="category-overview-heading">
                  <div>
                    <span className="eyebrow">Explore category</span>
                    <h2>{category.label}</h2>
                  </div>
                  <span className="category-count">{categoryPosts.length.toString().padStart(2, "0")} notes</span>
                </div>
                <p>{category.description}</p>
                {categoryPosts.length > 0 ? (
                  <PostCard post={categoryPosts[0]} />
                ) : (
                  <div className="category-empty">
                    <span className="eyebrow">Coming into focus</span>
                    <p>New {category.label.toLowerCase()} notes will appear here.</p>
                  </div>
                )}
                <Link href={`/${category.id}`} className="category-visit-link">
                  Browse {category.label} <span aria-hidden="true">→</span>
                </Link>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}
