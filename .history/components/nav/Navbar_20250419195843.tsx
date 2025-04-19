import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-6">
      <h1>SerpentX</h1>
      <ul className="flex gap-4">
        <li className="text-lg font-semibold">
          <Link href="/">Home</Link>
        </li>
        <li className="text-lg font-semibold">
          <Link href="/">Projects</Link>
        </li>
        <li className="text-lg font-semibold">
          <Link href="/">About</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
