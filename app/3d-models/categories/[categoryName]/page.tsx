import type { CategoryPagePros } from "@/app/types";

export default async function CategoryPage({ params }: CategoryPagePros) {
  const { categoryName } = await params;
  return (
    <>
      <h1>CategoryPage</h1>
      <p>{categoryName}</p>
    </>
  );
}
