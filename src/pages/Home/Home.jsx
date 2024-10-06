import BestCategory from "./BestCategory";
import HeroSection from "./HeroSection";
import TopCreators from "./TopCreators";
import TrendingCollection from "./TrendingCollection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrendingCollection />
      <TopCreators />
      <BestCategory/>
    </>
  );
}
