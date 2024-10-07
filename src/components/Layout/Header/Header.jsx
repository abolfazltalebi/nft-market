import HeaderLogo from "./HeaderLogo";
import Navbar from "./Navbar";
import HeaderButton from "./HeaderButton";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Header() {
  return (
    <header className="flex items-center justify-between mx-12 py-8">
      <HeaderLogo />
      <div className="hidden md:flex items-center justify-between gap-12 ">
        <Navbar />
        <HeaderButton />
      </div>
      <div className="md:hidden text-white cursor-pointer">
        <Icon icon="gg:menu" width="22" height="22" />
      </div>
    </header>
  );
}
