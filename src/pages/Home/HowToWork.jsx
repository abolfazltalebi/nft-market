import ScrollAnimation from "../../components/ScrollAnimation";
import { workItem } from "../../constants/howToWork.jsx";

export default function HowToWork() {
  return (
    <section className="mt-24 space-y-6">
      <ScrollAnimation
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="title-section text-white">
          <h2 className="text-2xl font-bold">How It Work</h2>
          <p>Find out how to get started</p>
        </div>
      </ScrollAnimation>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {workItem.map((item, index) => {
          return (
            <ScrollAnimation
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              key={item.id}
            >
              <div className="">
                <div>
                  <img
                    src={item.src}
                    className="w-full h-auto bg-auto"
                    alt=""
                  />
                </div>
                <div className="space-y-4 bg-secondary p-4 rounded-[1.5rem] text-white transition-all hover:-translate-y-3 relative -top-12">
                  <h2 className="text-center text-2xl font-bold">
                    {item.name}{" "}
                  </h2>
                  <p className="text-center text-[12px] text-white/80">{item.caption}</p>
                </div>
              </div>
            </ScrollAnimation>
          );
        })}
      </div>
    </section>
  );
}
