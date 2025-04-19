"use client";
import { RiMenuFoldLine } from "react-icons/ri";
import { links } from "@/data/NavLink";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaDiscord, FaFacebookSquare, FaInstagram } from "react-icons/fa";

const MenuHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="cursor-pointer block md:hidden z-10"
            onClick={handleOpen}
          >
            <IoClose size={30} />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer block md:hidden z-10"
            onClick={handleOpen}
          >
            <RiMenuFoldLine size={30} />
          </motion.div>
        )}
      </AnimatePresence>
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
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
        <Link target="_blank" href="https://www.facebook.com/serpentx.dev">
          <FaFacebookSquare size={30} />
        </Link>
        <Link target="_blank" href="https://discord.gg/serpentx">
          <FaDiscord size={24} />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/serpentx.dev">
          <FaInstagram size={24} />
        </Link>
      </div>
    </>
  );
};
export default MenuHamburger;
