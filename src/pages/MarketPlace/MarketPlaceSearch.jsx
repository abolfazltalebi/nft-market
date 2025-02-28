import { Icon } from "@iconify/react/dist/iconify.js";

export default function MarketPlaceSearch({ searchTerm }) {
  return (
    <div>
      <input
        type="text"
        className="w-full bg-secondary p-3 px-10 rounded-xl text-white border-2 border-transparent focus:border-purple-500"
        placeholder="Search your favourite NFTs"
        onChange={(e) => searchTerm(e.target.value)}
      />
      <Icon
        icon="line-md:search"
        width="24"
        height="24"
        className="relative left-2 -top-9 text-white"
      />
    </div>
  );
}
