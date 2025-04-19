import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <h1>SerpentX</h1>
      <div>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </div>
    </div>
  );
};
export default Navbar;
