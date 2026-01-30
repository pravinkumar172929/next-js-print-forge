import type { ModelsLayoutProps } from "../types";
import CategoryNavbar from "../components/CategoryNavbar";

export default function ModelsLayout({ children }: ModelsLayoutProps) {
  return (
    <div className="relative flex flex-col min-h-screen md:flex-row">
      <CategoryNavbar />
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  );
}
