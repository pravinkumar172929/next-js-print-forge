import { getModelById } from "@/app/lib/models";
import type { ModelDetailsProps } from "@/app/types";

export default async function Modeldetails({ params }: ModelDetailsProps) {
  const { id } = await params;

  //   console.log(typeof id);
  const foundModel = await getModelById(id);

  return <h1>{foundModel.name}</h1>;
}
