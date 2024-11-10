import fs from "fs";
import path from "path";
import Link from "next/link";
import React from "react";
import { PostItem } from "@/types";
import { Metadata, ResolvingMetadata } from "next";

// https://github.com/orgs/mdx-js/discussions/2345
import 'katex/dist/katex.min.css';
import { createPostItem } from "@/lib/markdown";
import { getPostData } from "@/lib/posts";

type Props = {
  params: { slug: string[] }
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const post = await createPostItem(slug);
  return {
    title: `${post.title} | Artists' wisdom`,
  };
}

// 静的ルートの作成
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);
  const posts = await getPostData();
  return posts.map((post: PostItem) => {
    return {
      path: `/posts/${post.slug.join('/')}`,
      slug: post.slug,
    };
  });
}

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const postData = await createPostItem(slug);

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-none mx-4 my-8">
        <h1 className="h2">{postData?.title}</h1>
        <time>{postData?.date}</time>
        <div className="space-x-2">
          {postData?.tags &&
            postData.tags?.map((category) => (
              <span key={category} className="badge bg-secondary">
                <Link href={`/tags/${category}`}>{category}</Link>
              </span>
            ))}
        </div>
        <div className="row">
          <article
            className={"markdown-content prose dark:prose-invert col-md-12"}
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          ></article>
        </div>
      </div>
    </div>
  );
}