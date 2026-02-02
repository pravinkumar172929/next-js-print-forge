"use client";

import { useState } from "react";
import type { ModelsLayoutProps } from "../types";
import CategoryNavbar from "../components/CategoryNavbar";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ModelsLayout({ children }: ModelsLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <div className="relative flex min-h-screen">
      {/* Mobile: always show | Desktop: toggle */}
      <div className={isMenuOpen ? "block" : "hidden md:block"}>
        <CategoryNavbar />
      </div>

      <main
        className={`flex-1 p-4 transition-all ${
          isMenuOpen ? "md:ml-64" : "md:ml-0"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="hidden md:flex mb-4 w-8 h-8 items-center justify-center border rounded-full bg-white shadow hover:bg-gray-100"
        >
          {isMenuOpen ? (
            <FaChevronLeft className="w-4 h-4" />
          ) : (
            <FaChevronRight className="w-4 h-4" />
          )}
        </button>

        {children}
      </main>
    </div>
  );
}
