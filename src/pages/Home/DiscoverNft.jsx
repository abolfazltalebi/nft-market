import { Icon } from "@iconify/react/dist/iconify.js";
import { nftItems } from "../../constants/DiscoverNftItem";
import { Link } from "react-router-dom";
import CardNft from "../../components/CardNft";
export default function DiscoverNft() {
  return (
    <section className="my-12 space-y-6">
      <div className="flex items-center justify-between md:flex-nowrap flex-wrap gap-4">
        <div className=" space-y-4 text-white">
          <h2 className="text-4xl font-bold">Discover More NFTs</h2>
          <p className="text-base">Explore new trending NFTs </p>
        </div>
        <Link to="/">
          <button className="px-8 py-4 rounded-xl flex items-center justify-center gap-2 border-2 border-action text-white transition-all hover:bg-action">
            <Icon icon="lets-icons:eye-light" width="22" height="22" />
            See All
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
