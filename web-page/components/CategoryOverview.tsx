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
          <span className="eyebrow">Art &amp; technology</span>
          <h1>Wisdom Archive</h1>
          <p>A growing collection of practical knowledge, creative ideas, and thoughtful guides.</p>
        </div>
        <div className="category-overview-grid">
          {CATEGORIES.map((category) => {
            const categoryPosts = posts.filter((post) => post.category === category.id);
            return (
              <section className="category-overview" key={category.id}>
                <div className="category-overview-heading">
                  <div>
                    <span className="eyebrow">{category.label} collection</span>
                    <h2>{category.brand}</h2>
                  </div>
                  <span className="category-count">{categoryPosts.length.toString().padStart(2, "0")} notes</span>
                </div>
                <p>{category.description}</p>
                {categoryPosts.length > 0 ? (
                  <div className="article-shelf" aria-label={`Recent ${category.label} articles`}>
                    {categoryPosts.slice(0, 8).map((post) => (
                      <div className="article-shelf-item" key={post.slug.join("/")}>
                        <PostCard post={post} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="category-empty">
                    <span className="eyebrow">Coming into focus</span>
                    <p>New {category.label.toLowerCase()} notes will appear here.</p>
                  </div>
                )}
                <Link href={`/${category.id}`} className="category-visit-link">
                  View all {category.label} articles <span aria-hidden="true">→</span>
                </Link>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}
