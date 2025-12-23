import ModelsGrid from "@/app/components/ModelsGrid";
import { getModelsByCategory } from "@/app/lib/models";
import type { CategoryPagePros } from "@/app/types";

export default async function CategoryPage({ params }: CategoryPagePros) {
  const { categoryName } = await params;
  const models = await getModelsByCategory(categoryName);

  return <ModelsGrid models={models} title={categoryName} />;
}
