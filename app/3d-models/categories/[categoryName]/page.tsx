import { getModelsByCategory } from "@/app/lib/models";
import type { CategoryPagePros } from "@/app/types";

export default async function CategoryPage({ params }: CategoryPagePros) {
  const { categoryName } = await params;
  const models = await getModelsByCategory(categoryName);
  console.log("models => ", models);

  return (
    <>
      <h1>CategoryPage</h1>
      <p>{categoryName}</p>
    </>
  );
}
