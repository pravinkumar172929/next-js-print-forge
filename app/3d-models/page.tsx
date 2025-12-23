import { getAllModels } from "../lib/models";
export default async function ModelsList() {
  const models = await getAllModels();
  console.log(models);
  return <h1>models List</h1>;
}
