import heroImage from "@/public/home-page-hero-image.png";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-12 md:flex-row">
        <div className="flex w-full flex-col space-y-6 md:w-1/2">
          <p className="hidden text-sm uppercase text-gray-600 md:block">
            Your go-to platform for 3D printing files
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Discover what's possible with 3D Printing
          </h1>

          <p className="text-lg text-gray-600">
            Join our community of creators and explore a vast library of
            user-submitted models.
          </p>

          <Link
            href="/3d-models"
            className="w-fit border-2 border-black px-6 py-3 transition hover:bg-black hover:text-white"
          >
            Browse Models
          </Link>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src={heroImage.src}
            alt="3D printing showcase"
            className="w-full"
          />
        </div>
      </section>
    </main>
  );
}
