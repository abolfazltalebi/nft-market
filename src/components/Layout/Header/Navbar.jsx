import { Link } from "react-router-dom";
import { NavbarItem } from "../../../constants/NavbarItem";
function Navbar() {
  return (
    <nav>
      <ul className="md:flex md:space-x-4 space-y-6">
        {NavbarItem.map((navItem) => {
          return (
            <li key={navItem.id} className="transition-all duration-300 hover:translate-y-[-5px]">
              <Link
                to={navItem.link}
                className="text-white"
              >
                {navItem.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
