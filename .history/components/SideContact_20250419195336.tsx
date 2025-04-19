import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SideContact = () => {
  return (
    <div className="fixed top-0 left-0 w-16 flex flex-col ">
      {/* Line */}
      <div className="h-[35vh] relative">
        <div className="h-full border border-text absolute top-0 left-1/2 -translate-x-1/2"></div>
      </div>
      {/* Socials */}
      <div className="text-text mt-4 flex flex-col gap-2 items-center">
        <Link target="_blank" href="https://www.facebook.com/serpentx.dev">
          <FaFacebookSquare size={24} />
        </Link>
        <Link target="_blank" href="https://discord.gg/serpentx">
          <FaDiscord size={24} />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/serpentx.dev">
          <FaInstagram size={24} />
        </Link>
      </div>
    </div>
  );
};
export default SideContact;
