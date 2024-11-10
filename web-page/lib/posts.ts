import fs from "fs";
import path from "path";
import { POSTS_PER_PAGE } from "@/constants";
import type { PageData, PostItem } from "@/types";
import matter from "gray-matter";

const readSubDirSync = (directoryPath: string) => {
  const result: string[] = [];
  const readTopDirSync = ((dirPath: string) => {
    let items = fs.readdirSync(dirPath);
    items = items.map((itemName) => {
      return path.join(dirPath, itemName);
    });
    items.forEach((itemPath) => {
      if (fs.statSync(itemPath).isDirectory()) {
        //再帰処理
        readTopDirSync(itemPath);
      } else {
        result.push(itemPath);
      }
    });
  });

  readTopDirSync(directoryPath);
  return result;
};

// すべてのposts内データを取得
export const getPostData = async (): Promise<PostItem[]> => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filePaths = readSubDirSync(postsDirectory);
  const posts = filePaths
    .map((filePath) => {
      console.log(filePath);
      const fileContents = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContents);
      const filename = filePath.substring(filePath.lastIndexOf('posts/') + 6);

      return {
        slug: filename.replace(/\.md$/, "").split('/'),
        title: data.title,
        date: data.date,
        tags: data.tags || [],
        contentHtml: "",
      };
    })
    .sort((postA, postB) =>
      new Date(postA.date) > new Date(postB.date) ? -1 : 1
    );

  return posts;
};

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
