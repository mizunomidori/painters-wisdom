import Link from "next/link";
import React from "react";
import type { PostItem } from "@/types";
import { Metadata } from "next";

// https://github.com/orgs/mdx-js/discussions/2345
import 'katex/dist/katex.min.css';
import { createPostItem } from "@/lib/markdown";
import { getPostData } from "@/lib/posts";

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
    <div className="w-full flex justify-center">
      <div className="max-w-none mx-4 my-8">
        {/* <h1 className="h2">{postData?.title}</h1>
        <time>{postData?.date}</time> */}
        <div className="row">
          <article
            className={"markdown-content prose dark:prose-invert col-md-12"}
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          ></article>
        </div>

        <div className="space-x-2 my-8 border-t">
          <div className="my-4">
            <span>Tags: </span>
              {postData?.tags &&
                postData.tags?.map((category) => (
                  <span key={category} className="badge bg-secondary">
                    <Link href={`/tags/${category}`}>{category}</Link>
                  </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
