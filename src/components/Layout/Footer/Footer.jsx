import ExploreItem from "./ExploreItem";
import InfoWebsite from "./InfoWebsite";
import Subscribe from "./Subscribe";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12 md:p-12  ">
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-8 md:gap-4 container">
        <InfoWebsite />
        <ExploreItem />
        <Subscribe />
      </div>
      <div className="container space-y-4 mt-8">
        <div className=" w-full h-px mx-auto bg-gray-100 "></div>
        <div>
          <h2 className="text-white/50">
            Ⓒ NFT Market. Use this template freely.
          </h2>
        </div>
      </div>
    </footer>
  );
}
