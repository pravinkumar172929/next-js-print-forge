import categories from "../data/categories.json";
import type { Category } from "../types";

export function getAllCategories(): Category[] {
  return categories;
}
