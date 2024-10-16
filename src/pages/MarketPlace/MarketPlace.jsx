import { useState } from "react";
import MarketPlaceTitle from "./MarketPlaceTitle";
import MarketPlaceSearch from "./MarketPlaceSearch";
import MarketPlaceTabs from "./MarketPlaceTabs";
import MarketPlaceItem from "./MarketPlaceItem";
import { Helmet } from "react-helmet";
import { Collection, Nfts } from "../../constants/marketItem";

export default function MarketPlace() {
  const [view, setView] = useState("nfts");
  const [searchTerm, setSearchTerm] = useState("");
  const handleSwitch = (type) => {
    setView(type);
  };
  const filteredNfts = Nfts.filter((nft) =>
    nft.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredCollections = Collection.filter((collection) =>
    collection.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <section className="my-5 space-y-8 ">
       <Helmet>
        <title>Market Place</title>
      </Helmet>
      <MarketPlaceTitle />
      <MarketPlaceSearch searchTerm={setSearchTerm} />
      <MarketPlaceTabs handleSwitch={handleSwitch} />
      <MarketPlaceItem
        view={view}
        searchTerm={searchTerm}
        filteredNfts={filteredNfts}
        filteredCollections={filteredCollections}
      />
    </section>
  );
}
