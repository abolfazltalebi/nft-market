export default function MarketPlaceTabs({ handleSwitch, activeTab }) {
  return (
    <div className="flex w-full bg-secondary justify-around text-white py-2 rounded-xl ">
      <div
        className={`transition-all hover:-translate-y-1 px-5 py-2 ${
          activeTab === "nfts" ? " border-b-2 border-b-action" : ""
        }`}
      >
        <button onClick={() => handleSwitch("nfts")}>NFTs</button>
      </div>
      <div
        className={`transition-all hover:-translate-y-1 px-5 py-2  ${
          activeTab === "collections" ? " border-b-2 border-b-action" : ""
        }`}
      >
        <button onClick={() => handleSwitch("collections")}>Collections</button>
      </div>
    </div>
  );
}
