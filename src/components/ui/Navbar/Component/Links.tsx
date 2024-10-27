"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import Button from "../../Button/Button";

export const links = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "ABOUT",
    href: "/about",
  },
  {
    label: "BLOGS",
    href: "/blogs",
  },
  {
    label: "TEAM",
    href: "/team",
  },
  {
    label: "CONTACT",
    href: "/contact",
  },
];

export default function Links() {
  const pathName = usePathname();

  return (
    <>
      <div className=" md:flex items-center justify-between gap-5 hidden ">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.label}
            className={`text-sm hover:text-sm hover:text-[#E9C46A]  transition duration-150 ease-in ${
              pathName === link.href &&
              "border-b-2 border-b-[#E9C46A]  hover:text-black"
            } `}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Sidebar />
      <Button />
    </>
  );
}
