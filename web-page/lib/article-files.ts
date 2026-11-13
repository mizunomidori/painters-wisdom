import fs from "fs";
import path from "path";

const ARTICLE_EXTENSIONS = [".md", ".html"];

export function readArticleFiles(directoryPath: string): string[] {
  return fs.readdirSync(directoryPath, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directoryPath, entry.name);
    if (entry.isDirectory()) {
      return readArticleFiles(entryPath);
    }
    return entry.isFile() && ARTICLE_EXTENSIONS.some((extension) => entry.name.endsWith(extension))
      ? [entryPath]
      : [];
  });
}

export function getArticleSlug(filePath: string, categoryDirectory: string): string[] {
  const relativePath = path.relative(categoryDirectory, filePath);
  const extension = path.extname(relativePath);
  return relativePath.slice(0, -extension.length).split(path.sep);
}

export function resolveArticleFile(categoryDirectory: string, articleSlug: string[]): string {
  const articlePath = path.join(categoryDirectory, ...articleSlug);
  const filePath = ARTICLE_EXTENSIONS
    .map((extension) => `${articlePath}${extension}`)
    .find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile());

  if (!filePath) {
    throw new Error(`Article not found: "${articleSlug.join("/")}"`);
  }
  return filePath;
}
