import { Link } from "react-router-dom";
import { NavbarItem } from "../../../constants/NavbarItem";
function Navbar() {
  return (
      <nav>
        <ul className="flex space-x-4">
          {NavbarItem.map((navItem) => {
            return (
              <li key={navItem.id}>
                <Link to={navItem.link} className="hover:text-gray-300">
                  {navItem.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
  )
}

export default Navbar
