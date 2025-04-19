import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-6">
      <h1>SerpentX</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Projects</Link>
        </li>
        <Link href="/">About</Link>
      </ul>
    </div>
  );
};
export default Navbar;
