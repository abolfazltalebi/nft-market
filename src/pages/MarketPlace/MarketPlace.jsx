import CardNft from "../../components/CardNft";
import { nftItems } from "../../constants/DiscoverNftItem";

export default function MarketPlace() {
  return (
    <section className="my-5 space-y-8">
      <div className="text-white">
        <h2 className="text-2xl font-bold md:text-2xl">Browse Marketplace</h2>
        <p className="text-white text-">
          Browse through more than 50k NFTs on the NFT Marketplace.
        </p>
      </div>
      <div>
        <input
          type="text"
          className="w-full bg-secondary p-3 rounded-xl text-white"
          placeholder="Search your favourite NFTs"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {nftItems.map((nftItem) => {
          return (
            <CardNft
              key={nftItem.id}
              id={nftItem.id}
              image={nftItem.image}
              title={nftItem.title}
              avatar={nftItem.avatar}
              creator={nftItem.creator}
              price={nftItem.price}
              highestBid={nftItem.highestBid}
            />
          );
        })}
      </div>
    </section>
  );
}
