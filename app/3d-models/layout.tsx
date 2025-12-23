import { getAllCategories } from "../lib/categories";
import type { Category, ModelsLayoutProps } from "../types";

export default function ModelsLayout({ children }: ModelsLayoutProps) {
  const categories = getAllCategories();
  console.log("categories", categories);
  return (
    <div>
      <nav>
        {categories.map((category: Category) => (
          <p>{category.displayName}</p>
        ))}
      </nav>
      {children}
    </div>
  );
}
