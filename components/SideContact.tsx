import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SideContact = () => {
  return (
    <div className="fixed top-0 left-0 w-16 lg:flex flex-col hidden ">
      {/* Line */}
      <div className="h-[35vh] relative">
        <div className="h-full border border-text absolute top-0 left-1/2 -translate-x-1/2"></div>
      </div>
      {/* Socials */}
      <div className="text-text mt-4 flex flex-col gap-2 items-center">
        <Link
          className="hover-link"
          target="_blank"
          href="https://www.facebook.com/serpentx.dev"
        >
          <FaFacebookSquare size={30} />
        </Link>
        <Link
          className="hover-link"
          target="_blank"
          href="https://discord.gg/serpentx"
        >
          <FaDiscord size={30} />
        </Link>
        <Link
          className="hover-link"
          target="_blank"
          href="https://www.instagram.com/serpentx.dev"
        >
          <FaInstagram size={30} />
        </Link>
      </div>
    </div>
  );
};
export default SideContact;
