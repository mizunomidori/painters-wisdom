import Link from "next/link";
import MermaidRenderer from "@/components/MermaidRenderer";
import { createPostItem } from "@/lib/markdown";

export default async function PostArticlePage({ slug }: { slug: string[] }) {
  const postData = await createPostItem(slug);

  return (
    <div className="site-shell min-h-screen">
      <header className="site-header">
        <div className="site-header-inner">
          <Link href="/" className="brand-mark">Painters&apos; wisdom</Link>
          <span className="header-note">Field note</span>
        </div>
      </header>
      <main className="article-frame">
        <div className="mb-10">
          <span className="eyebrow">{postData.date}</span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--foreground)]">{postData.title}</h1>
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
