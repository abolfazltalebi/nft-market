import { Link } from "react-router-dom";
import CardNft from "../../components/CardNft";
import { motion, AnimatePresence } from "framer-motion";

export default function MarketPlaceItem({
  view,
  searchTerm,
  filteredNfts,
  filteredCollections,
}) {
  return (
    <div className="">
      <AnimatePresence>
        {view === "nfts" ? (
          <motion.div
            key="nfts"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 "
          >
            {filteredNfts.map((nftItem) => {
              return (
                <Link to={`/nft/${nftItem.id}`} key={nftItem.id}>
                  <CardNft
                    id={nftItem.id}
                    image={nftItem.image}
                    title={nftItem.title}
                    avatar={nftItem.avatar}
                    creator={nftItem.creator}
                    price={nftItem.price}
                    highestBid={nftItem.highestBid}
                    className={searchTerm ? "border-2 border-purple-500" : ""}
                  />
                </Link>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            key="collections"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 "
          >
            {filteredCollections.map((nftItem) => {
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
                  className={searchTerm ? "border-2 border-purple-500" : ""}
                />
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
