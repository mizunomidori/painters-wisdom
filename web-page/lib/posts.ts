import fs from "fs";
import path from "path";
import { CATEGORIES, getCategoryForDirectory, POSTS_PER_PAGE } from "@/constants";
import type { PageData, PostItem } from "@/types";
import matter from "gray-matter";
import { getArticleSlug, readArticleFiles } from "@/lib/article-files";

// すべてのposts内データを取得
export const getPostData = async (): Promise<PostItem[]> => {
  const contentsDirectory = path.join(process.cwd(), "..", "contents");
  const posts = CATEGORIES.flatMap((category) => {
    const categoryDirectory = path.join(contentsDirectory, category.directory);
    return readArticleFiles(categoryDirectory).map((filePath) => {
      const fileContents = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContents);
      const slug = [category.id, ...getArticleSlug(filePath, categoryDirectory)];
      getCategoryForDirectory(category.directory, data.category);

      return {
        slug,
        title: data.title,
        date: data.date,
        summary: data.summary,
        tags: data.tags || [],
        category: category.id,
        contentHtml: "",
      };
    });
  }).sort((postA, postB) =>
    new Date(postA.date) > new Date(postB.date) ? -1 : 1
  );

  return posts;
};

export async function getCategoryData(categoryId: string): Promise<PostItem[]> {
  const posts = await getPostData();
  return posts.filter((post) => post.category === categoryId);
}

// タグ一覧ページ用記事データ
export async function getTagsData(slug: string): Promise<PostItem[]> {
  const posts = await getPostData();

  return posts
    .filter((post) => post.tags?.includes(decodeURIComponent(slug)))
    .sort((postA, postB) =>
      new Date(postA.date) > new Date(postB.date) ? -1 : 1
    );
}

export const createPageData = (
  currentPage: number,
  totalPostCount: number
): PageData => {
  const page = currentPage;
  const totalPages = Math.ceil(totalPostCount / POSTS_PER_PAGE);
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const pages = Array.from({ length: totalPages }, (_, i: number) => {
    return 1 + i;
  });

  return {
    currentPage: currentPage,
    totalPages: totalPages,
    start: start,
    end: end,
    pages: pages,
  };
};
