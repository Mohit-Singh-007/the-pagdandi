"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

export const links = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "BLOGS", href: "/blogs" },
  { label: "POETS", href: "/poets" },
  { label: "CONTACT", href: "/contact" },
];

export default function Links() {
  const pathName = usePathname();

  return (
    <>
      {/* Desktop Links */}
      <div className="hidden md:flex items-center justify-center gap-5 w-full">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.label}
            className={`text-white text-sm transition duration-150 ease-in hover:text-[#E9C46A] ${
              pathName === link.href ? "border-b-2 border-[#E9C46A]" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
