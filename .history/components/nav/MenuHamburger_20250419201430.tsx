import { RiMenuFoldLine } from "react-icons/ri";
import { links } from "@/data/NavLink";

const MenuHamburger = () => {
  return (
    <ul className="block md:hidden">
      <RiMenuFoldLine size={30} />
    </ul>
  );
};
export default MenuHamburger;
