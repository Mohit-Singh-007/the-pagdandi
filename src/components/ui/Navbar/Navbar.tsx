import { auth } from "@/lib/auth";
import Links from "./Component/Links";
import Logo from "./Component/Logo";
import Link from "next/link";
import { LockOpen } from "lucide-react";

export default async function Navbar() {
  const session = await auth();
  console.log(session);

  return (
    <nav className="border-b flex p-4 gap-20 items-center justify-between bg-[#000]">
      <Logo />
      <Links />

      <div className="flex items-center gap-2 justify-between md:pr-4">
        {session?.user.image && (
          <img
            src={session.user.image}
            alt={session.user.name as string}
            className="h-8 w-10 rounded-full object-cover cursor-pointer bg-black"
            referrerPolicy="no-referrer"
          />
        )}

        {session?.user.role === "admin" && (
          <Link
            href={"/admin"}
            className="whitespace-nowrap bg-neutral-100 rounded-lg px-2 py-2"
          >
            <LockOpen size={18} />
          </Link>
        )}
      </div>
    </nav>
  );
}
