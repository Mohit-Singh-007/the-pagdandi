import Button from "../Button/Button";
import Links from "./Links";
import Logo from "./Logo";
import Sidebar from "./Sidebar";

export default function Navbar() {
  return (
    <nav className=" border-b flex p-4 gap-20 items-center justify-between">
      <Logo />
      <Links />
    </nav>
  );
}
