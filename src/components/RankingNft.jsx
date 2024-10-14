export default function RankingNft({ id, image, name, charge, volume }) {
  return (
    <div
      className="bg-secondary flex items-center justify-between p-3 px-9 gap-4 rounded-[1.4rem] transition-all duration-300 hover:-translate-y-3 cursor-pointer container"
      key={id}
    >
      <div className="flex items-center gap-4">
        <span className="text-white">{id}</span>
        <div className="flex items-center gap-4">
          <img src={image} className="size-12" alt="" />
          <h2 className="text-white text-base md:text-2xl font-bold">{name}</h2>
        </div>
      </div>
      <div className="flex items-center justify-between gap-8">
        <h2 className="text-green-600 hidden md:inline">{charge}</h2>
        <h2 className="text-white font-bold">{volume}</h2>
      </div>
    </div>
  );
}
