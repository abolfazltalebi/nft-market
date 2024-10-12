import { useParams } from "react-router-dom";
import { Nfts } from "../../constants/Marketplaceitem";

export default function NftPages() {
  const { id } = useParams(); 
  const nftItem = Nfts.find((nft) => nft.id === parseInt(id));

  if (!nftItem) return <p>Item not found!</p>;

  return (
    <section className="my-5 space-y-4">
      <div>
        <img
          src={nftItem.image}
          className="w-full h-auto bg-auto rounded-3xl"
          alt={nftItem.title}
        />
      </div>
      <div className="space-y-6">
        <h1 className="text-4xl text-white font-bold">{nftItem.title}</h1>
        <p className="text-white/50">{nftItem.description}</p>
        <p className="text-white">Price: {nftItem.price}</p>
        <p className="text-white">Highest Bid: {nftItem.highestBid}</p>
        <p className="text-white">Creator: {nftItem.creator}</p>
      </div>
    </section>
  );
}