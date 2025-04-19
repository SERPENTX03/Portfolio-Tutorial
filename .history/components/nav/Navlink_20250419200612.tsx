"use client";
import { links } from "@/data/NavLink";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = () => {
  const pathname = usePathname();
  return (
    <ul className="flex gap-4">
      {links.map((nav, index) => (
        <li key={index} className="text-lg font-semibold text-text">
          <Link href={nav.href}>{nav.label}</Link>
        </li>
      ))}
    </ul>
  );
};
export default Navlink;
