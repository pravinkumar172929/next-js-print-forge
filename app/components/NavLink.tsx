import Link from "next/link";
import type { NavLinkProps } from "../types";

export default function NavLink({
  href,
  children,
  isActive,
  variant = "default",
}: NavLinkProps) {
  const isSidebar = variant === "sidebar";

  return (
    <li
      className={`
        text-sm uppercase
        ${isSidebar ? "relative" : ""}
        ${
          isSidebar && isActive
            ? "border-l-2 border-orange-accent"
            : isSidebar
            ? "border-l-2 border-transparent"
            : ""
        }
      `}
    >
      <Link
        href={href}
        className={`
          block
          px-4 py-2
          transition-colors
          cursor-pointer
          hover:text-orange-accent
          ${
            isActive
              ? isSidebar
                ? "text-orange-accent"
                : "text-orange-accent underline"
              : "text-gray-700"
          }
        `}
      >
        {children}
      </Link>
    </li>
  );
}
