import BestCategory from "./BestCategory";
import DiscoverNft from "./DiscoverNft";
import HeroSection from "./HeroSection";
import TopCreators from "./TopCreators";
import TrendingCollection from "./TrendingCollection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrendingCollection />
      <TopCreators />
      <BestCategory />
      <DiscoverNft />
    </>
  );
}
