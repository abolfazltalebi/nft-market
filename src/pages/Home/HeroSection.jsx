import { Icon } from "@iconify/react/dist/iconify.js";
import sectionImage from "/images/pic-7.webp";
import ScrollAnimation from "../../components/ScrollAnimation";

export default function HeroSection() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 ">
      <ScrollAnimation
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={sectionImage} className="w-full h-auto bg-auto" alt="" />
        </ScrollAnimation>
        <ScrollAnimation
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-8 ">
            <h1 className="text-3xl md:text-6xl tracking-tighter text-white font-bold">
              Discover digital art & Collect NFTs
            </h1>
            <p className="text-xl md:text-xl text-white">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>
            <div>
              <button className="button w-full md:w-auto text-white">
                <Icon icon="ph:rocket-launch" width="22" height="22" />
                Get Started
              </button>
            </div>
            <div className="hidden md:flex items-center justify-between gap-8 md:gap-20">
              <div className="space-y-1 text-white">
                <p className="text-3xl font-bold italic">240k+</p>
                <p className="text-xl">Total Sale</p>
              </div>
              <div className="space-y-1 text-white">
                <p className="text-3xl font-bold italic">100k+</p>
                <p className="text-xl">Auctions</p>
              </div>
              <div className="space-y-1 text-white">
                <p className="text-3xl font-bold italic">240k+</p>
                <p className="text-xl">Artists</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
     
      </section>
    </>
  );
}
