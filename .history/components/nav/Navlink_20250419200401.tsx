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
      {links.map((nav, index) => (
        <li key={index} className="text-lg font-semibold text-text">
          <Link href={nav.href}>{nav.label}</Link>
        </li>
      ))}
    </ul>
  );
};
export default Navlink;
