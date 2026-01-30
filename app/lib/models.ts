import modelsData from "../data/models.json";
import type { Model } from "../types";

export async function getAllModels(): Promise<Model[]> {
  return modelsData;
}

export async function getModelById(id: string | number): Promise<Model> {
  const foundModel = modelsData.find(
    (model) => model.id.toString() === id.toString()
  );
  if (!foundModel) {
    throw new Error("model not found");
  }
  return foundModel;
}

export async function getModelsByCategory(category: string): Promise<Model[]> {
  const allModelsCopy = [...modelsData];

  if (category) {
    const filteredModels = allModelsCopy.filter(
      (model) => model.category === category
    );
    return filteredModels;
  } else {
    return modelsData;
  }
}
