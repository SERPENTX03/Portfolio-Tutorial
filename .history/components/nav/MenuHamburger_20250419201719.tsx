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
      <RiMenuFoldLine size={30} className="cursor-pointer block md:hidden" />
      <ul className="block md:hidden"></ul>
    </>
  );
};
export default MenuHamburger;
