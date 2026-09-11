import Link from "next/link";
import React from "react";
import type { PostItem } from "@/types";
import { Metadata } from "next";

// https://github.com/orgs/mdx-js/discussions/2345
import 'katex/dist/katex.min.css';
import { createPostItem } from "@/lib/markdown";
import { getPostData } from "@/lib/posts";
import MermaidRenderer from "@/components/MermaidRenderer";

type Props = {
  params: Promise<{ slug: string[] }>
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const slug = (await params).slug;
  const post = await createPostItem(slug);
  return {
    title: `${post.title} | Artists' wisdom`,
  };
}

// 静的ルートの作成
export async function generateStaticParams() {
  // const postsDirectory = path.join(process.cwd(), "posts");
  // const filenames = fs.readdirSync(postsDirectory);
  const posts = await getPostData();
  return posts.map((post: PostItem) => {
    return {
      path: `/posts/${post.slug.join('/')}`,
      slug: post.slug,
    };
  });
}

export default async function Post({ params }: Props) {
  const slug = (await params).slug;
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
