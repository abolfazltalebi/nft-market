import { NavLink } from "react-router-dom";

export default function ExploreItem() {
  return (
    <div className="item2 space-y-5">
      <h2 className="text-xl font-bold">Explore</h2>
      <div>
        <ul className="flex flex-col gap-4 text-white/50">
          <NavLink to="/">Marketplace</NavLink>
          <NavLink to="/">Rankings</NavLink>
          <NavLink to="/">Connect a wallet</NavLink>
        </ul>
      </div>
    </div>
  );
}
