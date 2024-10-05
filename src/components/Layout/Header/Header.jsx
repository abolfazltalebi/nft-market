import { Link } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";
import Navbar from "./Navbar";
import HeaderButton from "./HeaderButton";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <HeaderLogo />
      <div className="flex items-center justify-between">
        <Navbar />
        <HeaderButton />
      </div>
    </header>
  );
}
