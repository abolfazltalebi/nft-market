import { Icon } from "@iconify/react/dist/iconify.js";
import { creator } from "../../constants/Creators";
export default function TopCreators() {
  return (
    <section className="my-12 space-y-8">
      <div className="flex items-center justify-between md:flex-nowrap flex-wrap gap-4">
        <div className=" space-y-4 text-white">
          <h2 className="text-4xl font-bold">Top creators</h2>
          <p className="text-base">
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>
        <div>
          <button className="px-8 py-4 rounded-xl flex items-center justify-center gap-2 border-2 border-action text-white transition-all hover:bg-action">
            <Icon icon="ph:rocket-launch" width="22" height="22" />
            view Rankings
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
        {creator.map((creatorsItem) => {
          return (
            <div
              className=" bg-secondary rounded-xl p-4 flex md:flex-col items-center justify-evenly md:justify-center transition-all duration-300 hover:scale-105 hover:-translate-y-3 cursor-pointer"
              key={creatorsItem.id}
            >
              <div className="">
                <div>
                  <img
                    src={creatorsItem.src}
                    alt={creatorsItem.name}
                    className="size-16 md:size-28"
                  />
                </div>
              </div>
              <div className="space-y-2 ">
                <h2 className="text-white text-xl font-bold text-center">
                  {creatorsItem.name}
                </h2>
                <p className="text-gray-400">
                  Total Sales:{" "}
                  <span className="text-white">{creatorsItem.price}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    
    </section>
  );
}
