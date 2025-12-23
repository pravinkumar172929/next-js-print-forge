import ModelsGrid from "../components/ModelsGrid";
import { getAllModels } from "../lib/models";
import type { Model, ModelsListProps } from "../types";
import Form from "next/form";

export default async function ModelsList({ searchParams }: ModelsListProps) {
  const models = await getAllModels();

  const query = searchParams.query ?? "";

  const filteredModels = models.filter((model: Model) =>
    model.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Form action="/3d-models" className="w-full px-5 md:px-0 md:max-w-xl">
        <input
          defaultValue={query}
          type="text"
          name="query"
          className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
        />
      </Form>
      <ModelsGrid models={filteredModels} title="All Models" />
    </>
  );
}
