"use client";
import { links } from "@/data/NavLink";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = () => {
  const pathname = usePathname();
  return (
    <ul className="md:flex gap-4 hidden ">
      {links.map((nav, index) => (
        <li
          key={index}
          className={`text-lg font-semibold text-text hover-link ${
            pathname === nav.href ? "text-white" : "text-text"
          }`}
        >
          <Link href={nav.href}>
            <span className="text-primary">#</span>
            {nav.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default Navlink;
