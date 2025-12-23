import { getModelById } from "@/app/lib/models";
import type { ModelDetailsProps } from "@/app/types";
import placeholderImg from "@/public/hero-image-square.png";
import { FaRegHeart } from "react-icons/fa6";
import Pill from "@/app/components/Pill";

export default async function Modeldetails({ params }: ModelDetailsProps) {
  const { id } = await params;

  //   console.log(typeof id);
  const foundModel = await getModelById(id);

  return (
    <div className="container max-w-6xl px-4 py-8 mx-auto">
      <article className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Image Section */}
        <figure className="relative overflow-hidden rounded-lg shadow-lg aspect-square">
          <img
            src={placeholderImg.src}
            alt={`3D model of ${foundModel.name}`}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </figure>

        {/* Content Section */}
        <section className="flex flex-col justify-center h-full">
          <div
            className="flex items-center mb-2 text-2xl text-gray-600"
            role="status"
            aria-label="Likes count"
          >
            <FaRegHeart className="w-5 h-5 mr-2" aria-hidden="true" />
            <span
              className="font-light"
              aria-label={`${foundModel.likes} likes`}
            >
              {foundModel.likes}
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-bold">{foundModel.name}</h1>

          <Pill aria-label="Category">{foundModel.category}</Pill>

          <div className="mb-6 prose prose-lg max-w-none">
            <p className="leading-relaxed text-gray-700">
              {foundModel.description}
            </p>
          </div>

          <footer className="text-sm text-gray-500">
            <time dateTime={foundModel.dateAdded}>
              Added on {new Date(foundModel.dateAdded).toLocaleDateString()}
            </time>
          </footer>
        </section>
      </article>
    </div>
  );
}
