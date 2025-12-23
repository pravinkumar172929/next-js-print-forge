import ModelsGrid from "../components/ModelsGrid";
import { getAllModels } from "../lib/models";

export default async function ModelsList() {
  const models = await getAllModels();

  return (
    <>
      <form className="w-full px-5 md:px-0 md:max-w-xl">
        <input
          type="text"
          name="query"
          className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
        />
      </form>
      <ModelsGrid models={models} title="All Models" />
    </>
  );
}
