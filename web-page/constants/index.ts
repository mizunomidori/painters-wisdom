export const POSTS_PER_PAGE = 16;

export const CATEGORIES = [
  {
    id: "art",
    label: "Art",
    directory: "art_contents",
    description: "Pigments, materials, surfaces, and the practice of painting.",
  },
  {
    id: "tech",
    label: "Tech",
    directory: "tech_contents",
    description: "Tools, software, and technology for creative work.",
  },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

export function getCategoryForDirectory(directory: string) {
  const category = CATEGORIES.find(({ directory: categoryDirectory }) => directory === categoryDirectory);
  if (!category) {
    throw new Error(
      `Article directory "${directory}" must match one of: ${CATEGORIES.map(({ directory: categoryDirectory }) => categoryDirectory).join(", ")}`,
    );
  }
  return category;
}
