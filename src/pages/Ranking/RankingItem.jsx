import {  AnimatePresence } from "framer-motion";
import { MonthItem, TodayItems, WeekItems } from "../../constants/RankingItems";
import { RankingSection } from "./RankingSection";

export default function RankingItems({ view, searchTerm }) {
  return (
    <div className="space-y-4">
      <div className="border-2 border-secondary flex items-center justify-between p-3 px-9 gap-4 rounded-[1.4rem] transition-all duration-300 hover:-translate-y-3 cursor-pointer container">
        <div className="flex items-center gap-8">
          <span>#</span>
          <h2 className="text-white/50">Artist</h2>
        </div>
        <div className="flex items-center gap-8">
          <h2 className="text-white/50 hidden md:inline">Change</h2>
          <h2 className="text-white/50">Volume</h2>
        </div>
      </div>
      <AnimatePresence>
        {view === "Today" && (
          <RankingSection items={TodayItems} key="nfts" searchTerm={searchTerm} />
        )}
        {view === "ThisWeek" && (
          <RankingSection items={WeekItems} key="ThisWeek" searchTerm={searchTerm} />
        )}
        {view === "ThisMonth" && (
          <RankingSection items={MonthItem} key="MonthItem" searchTerm={searchTerm} />
        )}
        {view === "AllItem" && (
          <RankingSection items={TodayItems} key="AllItems" searchTerm={searchTerm}  />
        )}
      </AnimatePresence>
    </div>
  );
}


