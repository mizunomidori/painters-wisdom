export const POSTS_PER_PAGE = 16;

export const CATEGORIES = [
  {
    id: "art",
    label: "Art",
    brand: "Painters' Wisdom",
    directory: "art",
    description: "Pigments, materials, surfaces, and the practice of painting.",
  },
  {
    id: "tech",
    label: "Tech",
    brand: "Engineers' Wisdom",
    directory: "tech",
    description: "Tools, software, and technology for creative work.",
  },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

export function getCategoryForDirectory(directory: string, declaredCategory?: unknown) {
  const category = CATEGORIES.find(({ directory: categoryDirectory }) => directory === categoryDirectory);
  if (!category) {
    throw new Error(
      `Article directory "${directory}" must match one of: ${CATEGORIES.map(({ directory: categoryDirectory }) => categoryDirectory).join(", ")}`,
    );
  }
  if (declaredCategory !== undefined && declaredCategory !== category.id) {
    throw new Error(
      `Article category "${String(declaredCategory)}" does not match its "${category.directory}" directory`,
    );
  }
  return category;
}
