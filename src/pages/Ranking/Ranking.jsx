import { Collection, Nfts } from "../../constants/Marketplaceitem";
import { useState } from "react";
import RankingItems from "./RankingItem";
import RankingTitle from "./RankingTitle";
import RankingTabs from "./RankingTabs";

export default function MarketPlace() {
  const [view, setView] = useState("Today");
  const [searchTerm, setSearchTerm] = useState("");
  const handleSwitch = (type) => {
    setView(type);
  };

  return (
    <section className="my-5 space-y-8 ">
      <RankingTitle />
      <RankingTabs handleSwitch={handleSwitch} />
      <RankingItems
        view={view}
        searchTerm={searchTerm}
      />
    </section>
  );
}
