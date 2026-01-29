import heroImageSquare from "@/public/hero-image-square.png";
import printForgeLogo from "@/public/printforge-logo-icon.svg";

export default function AboutPage() {
  return (
    <main>
      <section className="px-6 py-12 mx-auto max-w-7xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative w-full">
            <img
              src={heroImageSquare.src}
              alt="PrintForge community"
              className="w-full max-w-md"
            />
          </div>

          <div className="max-w-md">
            <p className="mb-3 text-xs tracking-wide text-gray-500 uppercase">
              About PrintForge
            </p>

            <h2 className="mb-4 text-3xl font-semibold leading-tight">
              Empowering makers worldwide
            </h2>

            <p className="mb-4 text-gray-700">
              Founded in 2023, PrintForge has quickly become the go-to platform
              for 3D printing enthusiasts, makers, and professional designers.
            </p>

            <p className="text-gray-700">
              Our mission is to foster a vibrant community where creativity
              meets technology.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-gray-200" aria-hidden="true" />

      <section className="py-12" aria-labelledby="key-features">
        <div className="px-6 mx-auto max-w-7xl">
          <h2 id="key-features" className="sr-only">
            Key Features
          </h2>
          <div className="grid gap-6 md:gap-0 md:grid-cols-3">
            <article className="p-6 bg-white">
              <h3 className="mb-3 text-xl font-semibold">100K+ Models</h3>
              <p className="text-gray-600">
                Access our vast library of community-created 3D models, from
                practical tools to artistic creations.
              </p>
            </article>
            <article className="p-6 bg-white border-gray-400 md:border-x">
              <h3 className="mb-3 text-xl font-semibold">Active Community</h3>
              <p className="text-gray-600">
                Join thousands of makers who share tips, provide feedback, and
                collaborate on projects.
              </p>
            </article>
            <article className="p-6 bg-white">
              <h3 className="mb-3 text-xl font-semibold">Free to Use</h3>
              <p className="text-gray-600">
                Most models are free to download, with optional premium features
                for power users.
              </p>
            </article>
          </div>
        </div>
      </section>

      <hr className="border-gray-200" aria-hidden="true" />

      <section className="container max-w-3xl px-4 py-8 mx-auto">
        <div className="prose max-w-none">
          <h2 className="mb-4 text-2xl font-semibold">Our Vision</h2>
          <p className="mb-4 text-gray-700">
            At PrintForge, we believe that 3D printing is revolutionizing the
            way we create, prototype, and manufacture. Our platform serves as a
            bridge between designers and makers, enabling the sharing of
            knowledge and creativity that pushes the boundaries of what's
            possible with 3D printing.
          </p>
          <p className="text-gray-700">
            Whether you're a hobbyist looking for your next weekend project, an
            educator seeking teaching materials, or a professional designer
            wanting to share your creations, PrintForge provides the tools and
            community to support your journey in 3D printing.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="flex justify-center opacity-40">
          <img
            src={printForgeLogo.src}
            alt="PrintForge Community - A group of makers collaborating on 3D printing projects"
            aria-hidden="true"
            className="w-16 h-auto"
          />
        </div>
      </section>
    </main>
  );
}
