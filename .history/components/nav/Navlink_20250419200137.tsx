import Link from "next/link";

const Navlink = () => {
  return (
    <ul className="flex gap-4">
      <li className="text-lg font-semibold text-text">
        <Link href="/">Home</Link>
      </li>
      <li className="text-lg font-semibold text-text">
        <Link href="/">Projects</Link>
      </li>
      <li className="text-lg font-semibold text-text">
        <Link href="/">About</Link>
      </li>
    </ul>
  );
};
export default Navlink;
