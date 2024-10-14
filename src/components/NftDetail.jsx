import React from 'react';
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const NftDetail = ({ nft }) => {
  if (!nft) {
    return <div>Loading...</div>;
  }

  return (
    <section className="my-5 space-y-4 grid grid-cols-2 gap-8">
      <div>
        <img src={nft.image} className="w-full h-auto bg-auto rounded-3xl" alt={nft.title} />
      </div>
      <div className="space-y-6">
        <h1 className="text-4xl text-white font-bold">{nft.title}</h1>
        <p className="text-white/50">Minted on {nft.mintedDate}</p>
        <div className="space-y-4">
          <p className="text-white/50 font-bold">Created By</p>
          <div className="flex items-center gap-4">
            <div>
              <img src={nft.avatar} className="size-6" alt={nft.creator} />
            </div>
            <span className="text-white font-bold">{nft.creator}</span>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-white/50 font-bold">Description</p>
          <p className="text-white text-wrap">{nft.description}</p>
        </div>
        <div className="space-y-4 text-white">
          <p className="text-white/50 font-bold">Details</p>
          <div className="flex items-center gap-1">
            <Icon icon="ion:earth-outline" width="22" height="22" />
            <Link to={nft.etherscanLink}>View on Etherscan</Link>
          </div>
          <div className="flex items-center gap-1">
            <Icon icon="ion:earth-outline" width="22" height="22" />
            <Link to={nft.originalLink}>View Original</Link>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-white/50">Tags</p>
          <div className="flex items-center justify-start gap-8">
            {Array.isArray(nft.tags) && nft.tags.length > 0 ? (
              nft.tags.map((tag, index) => (
                <div key={index} className="bg-secondary px-4 py-2 rounded-xl curser-pointer">
                  <Link to="/">
                    <p className="text-white">{tag}</p>
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-white/50">No tags available</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NftDetail;
