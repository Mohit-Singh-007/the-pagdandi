"use client";

import { useState } from "react";
import { links } from "./Links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlignJustify } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  return (
    <div className="flex items-center justify-between md:hidden gap-x-2">
      <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
        <AlignJustify size={18} />
      </button>
      {open && (
        <div className="absolute top-16 left-0 h-screen w-full bg-[#FAFAD2] flex flex-col items-center justify-center gap-20 text-lg">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className={`text-sm transition duration-150 ease-in ${
                pathName === link.href
                  ? "text-black border-b border-b-black"
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
