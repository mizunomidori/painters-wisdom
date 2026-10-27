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
import type { PostItem } from '@/types';
import { CATEGORIES, getCategoryForDirectory } from '@/constants';

const contentsDirectory = path.join(process.cwd(), '..');

export async function createPostItem(slug: string[]): Promise<PostItem> {
  const filePath = path.join(contentsDirectory, `${slug.join('/')}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const category = getCategoryForDirectory(slug[0]);

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
    category: category.id,
    contentHtml: processedContent.value.toString(),
  };
}

export function getAllPostSlugs() {
  const collectMarkdownFiles = (directory: string): string[] =>
    fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        return collectMarkdownFiles(entryPath);
      }
      return entry.isFile() && entry.name.endsWith(".md") ? [entryPath] : [];
    });

  return CATEGORIES.flatMap(({ directory }) =>
    collectMarkdownFiles(path.join(contentsDirectory, directory)).map((filePath) => ({
      params: {
        slug: path.relative(contentsDirectory, filePath).replace(/\.md$/, "").split(path.sep),
      },
    })),
  );
}
