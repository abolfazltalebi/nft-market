import { workItem } from "../../constants/HowToWorkItmes.JSX";

export default function HowToWork() {
  return (
    <section className="mt-24 space-y-6">
      <div className="title-section text-white">
        <h2 className="text-2xl font-bold">How It Work</h2>
        <p>Find out how to get started</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {workItem.map((item) => {
          return (
            <div
              className="bg-secondary p-4 rounded-[1.5rem] text-white transition-all hover:-translate-y-3"
              key={item.id}
            >
              <div>
                <img src={item.src} className="w-full h-auto bg-auto" alt="" />
              </div>
              <div className="space-y-4">
                <h2 className="text-center text-2xl font-bold">{item.name} </h2>
                <p className="text-center text-white/80">{item.caption}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
