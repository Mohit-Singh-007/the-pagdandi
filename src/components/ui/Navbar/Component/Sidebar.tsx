"use client";

import { useState } from "react";
import { links } from "./Links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlignJustify, X } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  return (
    <div className="relative md:hidden">
      {/* Hamburger Menu Icon */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
        className="text-white"
      >
        <AlignJustify size={24} />
      </button>

      {open && (
        <div className="fixed top-0 right-0 h-full w-3/4 bg-[#FAFAD2] z-50 flex flex-col items-center justify-center gap-10 text-lg shadow-lg">
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            aria-label="Close Menu"
            className="absolute top-4 right-4"
          >
            <X size={24} className="text-black" />
          </button>

          {/* Sidebar Links */}
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className={`text-sm transition duration-150 ease-in ${
                pathName === link.href
                  ? "text-black border-b border-black"
                  : "hover:text-[#E9C46A]"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
