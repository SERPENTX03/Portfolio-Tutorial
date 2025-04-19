"use client";
import { RiMenuFoldLine } from "react-icons/ri";
import { links } from "@/data/NavLink";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen ? (
        <IoClose
          size={30}
          className="cursor-pointer block md:hidden z-10"
          onClick={handleOpen}
        />
      ) : (
        <RiMenuFoldLine
          onClick={handleOpen}
          size={30}
          className="cursor-pointer block md:hidden"
        />
      )}
      {isOpen && (
        <ul className="fixed top-0 left-0 w-full h-screen bg-background ">
          <h1 className="text-2xl font-bold m-3">SerpentX</h1>
          {links.map((nav, index) => (
            <li
              key={index}
              className={`text-2xl m-3 font-semibold text-text ${
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
      )}
    </>
  );
};
export default MenuHamburger;
