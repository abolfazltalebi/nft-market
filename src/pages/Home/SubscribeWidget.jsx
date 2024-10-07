import { Icon } from "@iconify/react/dist/iconify.js";
import photoMan from "/public/images/Photo.webp";
import { useState } from "react";
export default function SubscribeWidget() {
  const [submit, setSubmit] = useState(false);
  return (
    <section className="my-20">
      <div className="bg-secondary p-8 rounded-3xl flex flex-wrap md:flex-nowrap items-center justify-around gap-4">
        <div>
          <img src={photoMan} alt="" />
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-white">
            Join our weekly digest
          </h2>
          <p className="text-white/50">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div className="flex flex-col items-center gap-4">
            <input
              type="text"
              placeholder="Enter your email here"
              className="w-full px-2 py-4 rounded-xl"
              onChange={(e) => setSubmit(e.target.value !== "")}
            />
            {submit && (
              <button className="button w-full md:w-auto text-white">
                <Icon icon="ph:rocket-launch" width="22" height="22" />
                Subscribe
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
