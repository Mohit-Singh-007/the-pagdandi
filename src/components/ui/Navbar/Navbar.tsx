import { auth } from "@/lib/auth";
import Links from "./Component/Links";
import Logo from "./Component/Logo";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="flex p-4 items-center justify-between bg-gradient-to-b from-black via-80% via-black to-transparent">
      <Logo />

      {/* Links and Sidebar */}
      <div className="flex items-center gap-5 w-full justify-center md:justify-start">
        <Links />
      </div>

      {/* Profile Image */}
      {session?.user?.image && (
        <div className="flex items-center">
          <img
            src={session.user.image}
            alt={session.user.name || "User"}
            className="h-8 md:h-10 w-10  rounded-full object-cover cursor-pointer bg-black"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </nav>
  );
}
