import HeaderLogo from "./HeaderLogo";
import Navbar from "./Navbar";
import HeaderButton from "./HeaderButton";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="flex items-center justify-between mx-4 md:mx-12 py-8 z-10">
      <HeaderLogo />
      <div className="hidden md:flex items-center justify-between gap-12 ">
        <Navbar />
        <HeaderButton />
      </div>
      <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
        <Icon icon="gg:menu" width="22" height="22" />
      </div>
      {isMenuOpen && (
        <div className={`absolute top-0 left-0 w-full h-full transition-all duration-300 bg-black bg-opacity-95 flex flex-col justify-between p-12 z-10`}>
          <div className="flex items-center justify-between">
            <HeaderLogo />
            <button onClick={closeMenu} className="text-white">
              <Icon icon="carbon:close-outline" width="24" height="24" />
            </button>
          </div>
          <Navbar closeMenu={closeMenu} /> 
          <HeaderButton />
        </div>
      )}
    </header>
  );
}
