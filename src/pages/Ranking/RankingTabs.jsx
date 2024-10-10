export default function RankingTabs({ handleSwitch }) {
  return (
    <div className="flex w-full bg-secondary justify-around text-white py-5 rounded-xl">
      <div>
        <button onClick={() => handleSwitch("Today")}>Today</button>
      </div>
      <div>
        <button onClick={() => handleSwitch("ThisWeek")}>ThisWeek</button>
      </div>
      <div>
        <button onClick={() => handleSwitch("ThisMonth")}>This Month</button>
      </div>
      <div>
        <button onClick={() => handleSwitch("AllItem")}>All Item</button>
      </div>
    </div>
  );
}
