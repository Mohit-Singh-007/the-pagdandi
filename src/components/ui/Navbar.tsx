import { auth } from "@/lib/auth";
import Links from "./Component/Links";
import Logo from "./Component/Logo";
import Sidebar from "./Component/Sidebar";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="flex p-4 items-center justify-between bg-black">
      <Logo />

      {/* Links for Desktop */}
      <div className="hidden md:flex items-center justify-center gap-5 w-full">
        <Links />
      </div>

      <div className="flex items-center gap-5 md:hidden">
        {/* Profile Image for Small Screens */}
        {session?.user?.image && (
          <div className="flex items-center">
            <img
              src={session.user.image}
              alt={session.user.name || "User"}
              className="h-8 w-8 rounded-full object-cover cursor-pointer bg-black"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        <Sidebar />
      </div>

      {/* Profile Image for Large Screens */}
      {session?.user?.image && (
        <div className="hidden md:flex items-center">
          <img
            src={session.user.image}
            alt={session.user.name || "User"}
            className="h-10 w-10 rounded-full object-cover cursor-pointer bg-black"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </nav>
  );
}
