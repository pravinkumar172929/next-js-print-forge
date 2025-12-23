import { getAllModels } from "../lib/models";
import type { Model } from "../types";
export default async function ModelsList() {
  const models = await getAllModels();
  console.log(models);
  return (
    <div>
      {models.map((model: Model) => (
        <h1 key={model.id}>{model.name}</h1>
      ))}
    </div>
  );
}
