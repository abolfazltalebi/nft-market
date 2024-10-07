import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

export default function CreateAccountItem() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl text-white font-bold">Create Account</h2>
        <p className="text-white/80">
          Welcome! enter your details and start creating, collecting and selling
          NFTs.
        </p>
      </div>
      <form action="" className="flex flex-col">
        <div className="">
          <input
            type="text"
            className="bg-white/80 rounded-full px-10 py-3 w-full"
            placeholder="Username"
          />
          <Icon
            icon="ph:user"
            width="22"
            height="22"
            className=" relative -top-9 left-2"
          />
        </div>
        <div className=" ">
          <input
            type="email"
            className="bg-white/80 rounded-full px-10 py-3 w-full"
            placeholder="Email"
          />
          <Icon
            icon="carbon:email"
            width="22"
            height="22"
            className=" relative -top-9 left-2"
          />
        </div>
        <div className=" ">
          <input
            type="password"
            className="bg-white/80 rounded-full px-10 py-3 w-full"
            placeholder="Password"
          />
          <Icon
            icon="solar:lock-password-broken"
            width="22"
            height="22"
            className=" relative -top-9 left-2"
          />
        </div>
        <div className=" ">
          <input
            type="password"
            className="bg-white/80 rounded-full px-10 py-3 w-full"
            placeholder="Confirm Password"
          />
          <Icon
            icon="solar:lock-password-broken"
            width="22"
            height="22"
            className=" relative -top-9 left-2"
          />
        </div>
        <div>
          <Link to="/CreateAccount">
            <button className="button">
              Create Account
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
