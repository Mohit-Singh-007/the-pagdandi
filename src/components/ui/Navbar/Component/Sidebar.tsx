"use-client";

import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { links } from "./Links";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  return (
    <div className=" flex items-center justify-center gap-4 md:hidden ">
      <button className="">
        <AiOutlineMenu
          onClick={() => setOpen(!open)}
          className=" md:hidden"
          size={18}
        />
      </button>
      {open && (
        <div className=" flex flex-col absolute top-16 left-0 h-screen bg-[#FAFAD2] w-full items-center justify-center gap-20 text-lg">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className={`text-sm hover:text-sm hover:text-[#E9C46A]  transition duration-150 ease-in ${
                pathName === link.href &&
                "border-b border-b-black hover:text-black"
              } `}
              onClick={() => setOpen(!open)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
      <Link
        href={"/login"}
        className=" px-3 py-2 bg-[#fadd76] text-gray-800 text-sm font-medium rounded-md"
      >
        Sign In
      </Link>
    </div>
  );
}
