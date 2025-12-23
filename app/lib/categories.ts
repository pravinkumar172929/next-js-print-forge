import categories from "../data/categories.json";
import type { Category } from "../types";

export async function getAllCategories(): Promise<Category[]> {
  return categories;
}
