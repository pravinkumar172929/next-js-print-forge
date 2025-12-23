import Link from "next/link";
import { getAllCategories } from "../lib/categories";
import type { Category, ModelsLayoutProps } from "../types";

export default function ModelsLayout({ children }: ModelsLayoutProps) {
  const categories = getAllCategories();
  console.log("categories", categories);
  return (
    <div>
      <nav>
        <Link href="/3d-models">All</Link>
        {categories.map((category: Category) => (
          <Link
            key={category.slug}
            href={`/3d-models/categories/${category.slug}`}
          >
            {category.displayName}
          </Link>
        ))}
      </nav>
      {children}
    </div>
  );
}
