import { trendingItems } from "../../constants/Trending";

export default function TrendingCollection() {
  return (
    <section className="flex flex-col gap-8 my-12">
      <div className="title-section space-y-4 text-white">
        <h2 className="text-4xl font-bold">Trending Collection</h2>
        <p className="text-base">
          Checkout our weekly updated trending collection.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-between">
        {trendingItems.map((item) => (
          <div key={item.id} className="space-y-4">
            <div>
              <img
                src={item.mainImage}
                alt={item.title}
                className="w-full h-auto "
              />
            </div>
            <div className="flex items-center gap-4">
              {item.subImages.map((subImg, index) => (
                <div
                  key={index}
                  className="w-1/3 transition-all hover:scale-105"
                >
                  <img
                    src={subImg}
                    alt={`${item.title} sub ${index + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
            <div className="text-white">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-action animate-pulse">by {item.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
