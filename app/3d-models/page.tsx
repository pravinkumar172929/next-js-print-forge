import ModelsGrid from "../components/ModelsGrid";
import { getAllModels } from "../lib/models";

export default async function ModelsList() {
  const models = await getAllModels();

  return <ModelsGrid models={models} title="All Models" />;
}
