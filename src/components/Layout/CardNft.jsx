export default function CardNft({
  id,
  image,
  title,
  avatar,
  creator,
  price,
  height,
}) {
  return (
    <div
      className="bg-secondary rounded-[1.4rem] transition-all duration-300 hover:-translate-y-3"
      key={id}
    >
      <div>
        <img src={image} alt="" />
      </div>
      <div className="my-4 space-y-4 px-4">
        <div className="title space-y-1">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <div className="flex items-center text-white gap-2">
            <img src={avatar} className="size-8" alt="" />
            {creator}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/50">Price:</p>
            <p className="text-white font-semibold">{price}</p>
          </div>
          <div>
            <p className="text-white/50">Highest Bid</p>
            <p className="text-white font-semibold">{height}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
