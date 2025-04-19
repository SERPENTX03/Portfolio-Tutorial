import Link from "next/link";

const Navlink = () => {
  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "About",
      href: "/about",
    },
  ];

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
