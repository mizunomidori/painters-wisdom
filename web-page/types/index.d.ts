import type { CategoryId } from "@/constants";

// 記事データ
export type PostItem = {
    slug: string[];
    title: string;
    date: string;
    tags: string[] | null;
    category: CategoryId;
    contentHtml: string;
};

// ページング情報
export type PageData = {
    currentPage: number;
    totalPages: number;
    start: number;
    end: number;
    pages: number[];
};
