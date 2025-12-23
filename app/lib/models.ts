import modelsData from "../data/models.json";
import type { Model } from "../types";

export async function getAllModels(): Promise<Model[]> {
  return modelsData;
}

export async function getModelById(id: string | number): Promise<Model> {
  const foundModel = modelsData.find((model) => model.id === id);
  if (!foundModel) {
    throw new Error("model not found");
  }
  return foundModel;
}
