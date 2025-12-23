import type { ModelDetailsProps } from "@/app/types";

export default async function Modeldetails({ params }: ModelDetailsProps) {
  console.log(params);
  const { id } = await params;
  console.log("id=> ", id);
  return <h1>Model-details</h1>;
}
