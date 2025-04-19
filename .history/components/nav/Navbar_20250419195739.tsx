import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-6">
      <h1>SerpentX</h1>
      <div>
        <Link href="/">Home</Link>
        <Link href="/">Projects</Link>
        <Link href="/">About</Link>
      </div>
    </div>
  );
};
export default Navbar;
