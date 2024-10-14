import { Helmet } from "react-helmet";
import BestCategory from "./BestCategory";
import DiscoverNft from "./DiscoverNft";
import HeroSection from "./HeroSection";
import HowToWork from "./HowToWork";
import SubscribeWidget from "./SubscribeWidget";
import TopCreators from "./TopCreators";
import TrendingCollection from "./TrendingCollection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HeroSection />
      <TrendingCollection />
      <TopCreators />
      <BestCategory />
      <DiscoverNft />
      <HowToWork />
      <SubscribeWidget />
    </>
  );
}
