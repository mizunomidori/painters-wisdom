import type { PostItem } from "@/types";
import { Metadata } from "next";

// https://github.com/orgs/mdx-js/discussions/2345
import 'katex/dist/katex.min.css';
import { createPostItem } from "@/lib/markdown";
import { getPostData } from "@/lib/posts";
import PostArticlePage from "@/features/posts/components/server/PostArticlePage";

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
  return <PostArticlePage slug={slug} />;
}
