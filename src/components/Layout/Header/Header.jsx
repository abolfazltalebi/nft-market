import HeaderLogo from "./HeaderLogo";
import Navbar from "./Navbar";
import HeaderButton from "./HeaderButton";

export default function Header() {
  return (
    <header className="flex items-center justify-between mx-12 py-8">
      <HeaderLogo />
      <div className="flex items-center justify-between gap-12">
        <Navbar />
        <HeaderButton />
      </div>
    </header>
  );
}
