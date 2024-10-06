import { Icon } from "@iconify/react/dist/iconify.js";
import { nftItems } from "../../constants/DiscoverNftItem";
import { Link } from "react-router-dom";
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
            <div
              className="bg-secondary rounded-[1.4rem] transition-all duration-300 hover:-translate-y-3"
              key={nftItem.id}
            >
              <div>
                <img src={nftItem.image} alt="" />
              </div>
              <div className="my-4 space-y-4 px-4">
                <div className="title space-y-1">
                  <h2 className="text-2xl font-bold text-white">
                    {nftItem.title}
                  </h2>
                  <div className="flex items-center text-white gap-2">
                    <img src={nftItem.avatar} className="size-8" alt="" />
                    {nftItem.creator}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/50">Price:</p>
                    <p className="text-white font-semibold">{nftItem.price}</p>
                  </div>
                  <div>
                    <p className="text-white/50">Highest Bid</p>
                    <p className="text-white font-semibold">{nftItem.height}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
