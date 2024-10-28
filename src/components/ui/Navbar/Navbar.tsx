import { auth } from "@/lib/auth";
import Links from "./Component/Links";
import Logo from "./Component/Logo";
import Link from "next/link";
import { LockOpen } from "lucide-react";
import Button from "../Button/Button";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className=" border-b flex p-4 gap-20 items-center justify-between">
      <Logo />
      <Links />
      {session?.user.image && (
        <div className="flex items-center gap-2  justify-around">
          <img
            src={session.user.image}
            alt={session.user.name as string}
            className="h-8 rounded-full cursor-pointer "
            referrerPolicy="no-referrer"
          />
          {session?.user.role === "admin" && (
            <Link
              href={"/admin"}
              className=" whitespace-nowrap bg-neutral-100 rounded-lg px-2 py-2"
            >
              <LockOpen size={18} />
            </Link>
          )}
        </div>
      )}

      <Button />
    </nav>
  );
}
