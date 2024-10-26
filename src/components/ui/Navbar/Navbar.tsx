import Button from "../Button/Button";
import Links from "./Component/Links";
import Logo from "./Component/Logo";
import Sidebar from "./Component/Sidebar";

export default function Navbar() {
  return (
    <nav className=" border-b flex p-4 gap-20 items-center justify-between">
      <Logo />
      <Links />
    </nav>
  );
}
