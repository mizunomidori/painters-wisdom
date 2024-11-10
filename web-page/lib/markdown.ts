import fs from 'fs';
import path from 'path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeRaw from 'rehype-raw';
import rehypeKatex from 'rehype-katex';
import rehypePrism from 'rehype-prism-plus';
import rehypeExternalLinks from 'rehype-external-links';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import matter from 'gray-matter';
import { PostItem } from '@/types';

const contentsDirectory = path.join(process.cwd(), 'contents');

export async function createPostItem(slug: string[]): Promise<PostItem> {
  const filePath = path.join(process.cwd(), "posts", `${slug.join('/')}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm)     // GitHub Flavored Markdownのサポート
    .use(remarkMath)    // 数式のサポート
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeKatex)
    .use(rehypePrism)
    .use(rehypeExternalLinks, { target: "_blank", rel: ["nofollow"] })
    .use(rehypeStringify)
    .process(content);

  return {
    slug: slug,
    title: data.title,
    date: data.date,
    tags: data.tags,
    contentHtml: processedContent.value.toString(),
  };
}

export function getAllPostSlugs() {
  const getFiles = (dir: string) => {
    return fs.readdirSync(path.join(contentsDirectory, dir)).map(file => `${dir}/${file}`);
  };

  const columnFiles = getFiles('columns');
  const paintFiles = getFiles('paints');

  return [...columnFiles, ...paintFiles].map((filePath) => {
    return {
      params: {
        slug: filePath.replace(/\.md$/, '').split('/'),
      },
    };
  });
}
