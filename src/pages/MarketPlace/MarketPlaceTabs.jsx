export default function MarketPlaceTabs({handleSwitch}) {
  return (
    <div className="flex w-full bg-secondary justify-around text-white py-5 rounded-xl">
      <div>
        <button onClick={() => handleSwitch("nfts")}>NFTs</button>
      </div>
      <div>
        <button onClick={() => handleSwitch("collections")}>Collections</button>
      </div>
    </div>
  );
}
