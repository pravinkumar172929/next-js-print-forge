import Link from "next/link";
import type { NavLinkProps } from "../types";

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
}
