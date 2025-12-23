import Link from "next/link";
import type { NavLinkProps } from "../types";

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <li className="text-sm uppercase">
      <Link
        className="px-4 py-2 text-gray-700 transition-colors rounded-md cursor-pointer hover:text-orange-accent"
        href={href}
      >
        {children}
      </Link>
    </li>
  );
}
