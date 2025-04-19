"use client";
import { RiMenuFoldLine } from "react-icons/ri";
import { links } from "@/data/NavLink";
import { useState } from "react";

const MenuHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ul className="block md:hidden">
        <RiMenuFoldLine size={30} className="cursor-pointer" />
      </ul>
    </>
  );
};
export default MenuHamburger;
