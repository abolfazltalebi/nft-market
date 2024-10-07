import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
export default function HeaderButton() {
  return (
    <Link to="/CreateAccount">
      <button className="button">
        <Icon icon="lucide:user" width="22" height="22" /> Sign In
      </button>
    </Link>
  );
}
