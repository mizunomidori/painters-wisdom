import Link from "next/link";
import MermaidRenderer from "@/components/MermaidRenderer";
import { CATEGORIES } from "@/constants";
import { createPostItem } from "@/lib/markdown";
import SiteHeader from "@/components/SiteHeader";

export default async function PostArticlePage({ slug }: { slug: string[] }) {
  const postData = await createPostItem(slug);
  const category = CATEGORIES.find(({ id }) => id === postData.category);

  return (
    <div className="site-shell min-h-screen">
      <SiteHeader activeCategory={category?.id} />
      <main className="article-frame">
        <div className="article-header">
          <div className="article-meta">
            {category && <Link href={`/${category.id}`} className="category-pill">{category.label}</Link>}
            <span className="eyebrow">{postData.date}</span>
          </div>
          <h1 className="article-title">{postData.title}</h1>
        </div>
        <MermaidRenderer html={postData.contentHtml} />
        <div className="article-tags">
          <span className="eyebrow mr-2 self-center">Filed under</span>
          {postData.tags?.map((category) => (
            <Link key={category} href={`/tags/${encodeURIComponent(category)}`} className="article-tag">
              {category}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
