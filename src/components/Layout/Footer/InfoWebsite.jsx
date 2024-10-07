import { Link } from "react-router-dom";
import logo from "/public/images/icons/Logo.svg";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function InfoWebsite() {
  return (
    <div className="item1 space-y-5">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="space-y-5">
        <p className="text-white/50">
          NFT marketplace UI created with Anima for Figma.
        </p>
        <div className="space-y-2">
          <p className="text-white">Join our community</p>
          <div className="flex item-center gap-3">
            <Link to="/">
              <Icon icon="ri:telegram-line" width="24" height="24" />
            </Link>
            <Link to="/">
              <Icon icon="iconoir:youtube" width="24" height="24" />
            </Link>
            <Link to="/">
              <Icon icon="iconoir:instagram" width="24" height="24" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
