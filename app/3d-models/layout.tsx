import { getAllCategories } from "../lib/categories";
import type { ModelsLayoutProps } from "../types";

export default function ModelsLayout({ children }: ModelsLayoutProps) {
  const categories = getAllCategories();
  console.log("categories", categories);
  return (
    <div>
      <h1>ModelsLayout Navbar</h1>
      {children}
    </div>
  );
}
