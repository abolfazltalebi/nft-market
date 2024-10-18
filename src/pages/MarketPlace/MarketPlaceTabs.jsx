export default function MarketPlaceTabs({ handleSwitch, activeTab }) {
  return (
    <div className="flex w-full bg-secondary justify-around text-white py-2 rounded-xl ">
      <div
        className={`transition-all hover:-translate-y-1 hover:shadow px-5 py-2 rounded-xl ${
          activeTab === "nfts" ? "bg-action shadow" : ""
        }`}
      >
        <button onClick={() => handleSwitch("nfts")}>NFTs</button>
      </div>
      <div
        className={`transition-all hover:-translate-y-1 hover:shadow px-5 py-2 rounded-xl ${
          activeTab === "collections" ? "bg-action shadow" : ""
        }`}
      >
        <button onClick={() => handleSwitch("collections")}>Collections</button>
      </div>
    </div>
  );
}
