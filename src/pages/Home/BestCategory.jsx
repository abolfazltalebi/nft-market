import ScrollAnimation from "../../components/ScrollAnimation";
import { category } from "../../constants/CategoryItems";

export default function BestCategory() {
  return (
    <section className="my-12 space-y-8">
      <ScrollAnimation
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }} 
        >
        <div className="title-section text-white">
          <h2 className="text-2xl font-bold">Best Categories</h2>
        </div>
      </ScrollAnimation>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {category.map((categoryItem, index) => {
          return (
            <ScrollAnimation
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
              key={categoryItem.id}
            >
              <div className="bg-secondary rounded-[1.4rem] overflow-hidden group transition-all duration-300 hover:-translate-y-3">
                <div className="relative">
                  <img
                    src={categoryItem.src}
                    className="w-full h-auto bg-auto transition-all duration-300"
                    alt={categoryItem.name}
                  />
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="my-4">
                  <h2 className="text-xl text-white text-center font-bold">
                    {categoryItem.name}
                  </h2>
                </div>
              </div>
            </ScrollAnimation>
          );
        })}
      </div>
    </section>
  );
}
