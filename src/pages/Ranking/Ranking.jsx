import { useState } from "react";
import RankingItems from "./RankingItem";
import RankingTitle from "./RankingTitle";
import RankingTabs from "./RankingTabs";
import { Helmet } from "react-helmet";

export default function MarketPlace() {
  const [view, setView] = useState("Today");
  const [searchTerm, setSearchTerm] = useState("");
  const handleSwitch = (type) => {
    setView(type);
  };

  return (
    <section className="my-5 space-y-8 ">
       <Helmet>
        <title>Market Place</title>
      </Helmet>
      <RankingTitle />
      <RankingTabs handleSwitch={handleSwitch} />
      <RankingItems
        view={view}
        searchTerm={searchTerm}
      />
    </section>
  );
}
