import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-6">
      <h1>SerpentX</h1>
      <ul className="flex gap-4">
        <li className="text-2xl">
          <Link href="/">Home</Link>
        </li>
        <li className="text-2xl">
          <Link href="/">Projects</Link>
        </li>
        <li className="text-2xl">
          <Link href="/">About</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
