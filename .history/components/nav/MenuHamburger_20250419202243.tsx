"use client";
import { RiMenuFoldLine } from "react-icons/ri";
import { links } from "@/data/NavLink";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const MenuHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen ? (
        <IoClose
          size={30}
          className="cursor-pointer block md:hidden z-50"
          onClick={handleOpen}
        />
      ) : (
        <RiMenuFoldLine
          onClick={handleOpen}
          size={30}
          className="cursor-pointer block md:hidden text-primary"
        />
      )}
      {isOpen && (
        <ul className="fixed top-0 left-0 w-full h-screen bg-background"></ul>
      )}
    </>
  );
};
export default MenuHamburger;
