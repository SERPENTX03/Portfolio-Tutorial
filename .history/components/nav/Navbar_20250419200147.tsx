import Navlink from "./Navlink";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-6">
      <h1 className="text-lg font-semibold ">SerpentX</h1>
      <Navlink />
    </div>
  );
};
export default Navbar;
