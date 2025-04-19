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
      <RiMenuFoldLine
        size={30}
        className="cursor-pointer block md:hidden"
        onClick={handleOpen}
      />
      <ul>
        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-full bg-black"></div>
        )}
      </ul>
    </>
  );
};
export default MenuHamburger;
