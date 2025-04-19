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
        <FaFacebookSquare size={24} />
        <FaDiscord size={24} />
        <FaInstagram size={24} />
      </div>
    </div>
  );
};
export default SideContact;
