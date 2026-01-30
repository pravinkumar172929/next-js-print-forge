import Link from "next/link";
import type { NavLinkProps } from "../types";

export default function NavLink({
  href,
  children,
  isActive,
  variant = "default",
}: NavLinkProps) {
  const baseStyles =
    "px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-accent";

  const activeStyles =
    variant === "sidebar"
      ? "text-orange-accent border-l-2 border-orange-accent"
      : "text-orange-accent underline";

  const inactiveStyles =
    variant === "sidebar"
      ? "text-gray-700 border-l-2 border-transparent"
      : "text-gray-700";

  return (
    <li className="text-sm uppercase">
      <Link
        className={`${baseStyles} ${isActive ? activeStyles : inactiveStyles}`}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
}
