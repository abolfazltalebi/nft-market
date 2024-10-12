import BgNft from "/images/bg-nft.webp";
import avatars from "/images/avatars/Avatar-1.webp";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { Nfts } from "../constants/Marketplaceitem";
import CardNft from "../components/CardNft";
export default function Nft() {
  return (
    <section className="my-5 space-y-4">
      <div>
        <img src={BgNft} className="w-full h-auto bg-auto rounded-3xl" alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl text-white font-bold">The Orbitians</h1>
          <p className="text-white/50">Minted on Sep 30, 2222</p>
          <div className="space-y-4">
            <p className="text-white/50 font-bold">Created By</p>
            <div className="flex items-center gap-4">
              <div>
                <img src={avatars} className="size-6" alt="" />
              </div>
              <span className="text-white font-bold">Orbitian</span>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-white/50 font-bold">Description</p>
            <p className="text-white text-wrap">
              The Orbitians is a collection of 10,000 unique NFTs on the
              Ethereum blockchain,There are all sorts of beings in the NFT
              Universe. The most advanced and friendly of the bunch are
              Orbitians. They live in a metal space machines, high up in the sky
              and only have one foot on Earth. These Orbitians are a peaceful
              race, but they have been at war with a group of invaders for many
              generations. The invaders are called Upside-Downs, because of
              their inverted bodies that live on the ground, yet do not know any
              other way to be. Upside-Downs believe that they will be able to
              win this war if they could only get an eye into Orbitian
              territory, so they've taken to make human beings their target.
            </p>
          </div>
          <div className="space-y-4 text-white">
            <p className="text-white/50 font-bold">Details</p>
            <div className="flex items-center gap-1">
              <Icon icon="ion:earth-outline" width="22" height="22" />
              View on Etherscan
            </div>
            <div className="flex items-center gap-1">
              <Icon icon="ion:earth-outline" width="22" height="22" />
              View Original
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-white/50">Tags</p>
            <div className="flex items-center justify-start gap-8">
              <div className="bg-secondary px-4 py-2 rounded-xl curser-pointer">
                <Link to="/">
                  <p className="text-white">Animation</p>
                </Link>
              </div>
              <div className="bg-secondary px-4 py-2 rounded-xl curser-pointer">
                <Link to="/">
                  <p className="text-white">illustration</p>
                </Link>
              </div>
              <div className="bg-secondary px-4 py-2 rounded-xl curser-pointer">
                <Link to="/">
                  <p className="text-white">Moon</p>
                </Link>
              </div>
              <div className="bg-secondary px-4 py-2 rounded-xl curser-pointer">
                <Link to="/">
                  <p className="text-white">Moon</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6 mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-white text-2xl font-bold">
            More from this artist
          </h2>
          <button className="button">
            <Icon icon="mingcute:arow-to-right-line" width="22" height="22" />
            Go To Artist Page
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Nfts.map((nftItem) => {
            return (
              <Link key={nftItem.id} to={`/nft/${nftItem.id}`}>
                <CardNft
                  id={nftItem.id}
                  image={nftItem.image}
                  title={nftItem.title}
                  avatar={nftItem.avatar}
                  creator={nftItem.creator}
                  price={nftItem.price}
                  highestBid={nftItem.highestBid}
                  className="border-2 border-purple-500"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
