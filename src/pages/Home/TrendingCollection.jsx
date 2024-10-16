import ScrollAnimation from "../../components/ScrollAnimation";
import { trendingItems } from "../../constants/trending";

export default function TrendingCollection() {
  return (
    <section className="flex flex-col gap-8 my-12">
      <div className="title-section space-y-4 text-white">
        <ScrollAnimation
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }} 
        >
          <h2 className="text-4xl font-bold">Trending Collection</h2>
          <p className="text-base">
            Checkout our weekly updated trending collection.
          </p>
        </ScrollAnimation>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-between">
      {trendingItems.map((item,index) => (
        <ScrollAnimation
          key={item.id}
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: index * 0.2 }} 
        >
          <div className="space-y-4">
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
        </ScrollAnimation>
      ))}
      </div>
    </section>
  );
}
