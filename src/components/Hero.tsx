import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((current) => (current === 11 ? 1 : current + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div
        className="relative min-h-screen bg-cover bg-center transition-all duration-2000 ease-in-out"
        style={{ backgroundImage: `url('/slider/Slider${currentImage}.jpeg')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-4xl">
                Real Estate Investment and Private Lending - Your Path to
                Profitable Peace of Mind
              </h1>
              <div className="mt-6">
                <p className="text-pretty text-lg font-semibold text-white sm:text-xl/8">
                  Committed to optimizing your profits while safeguarding your
                  confidence and security
                </p>
                <p className="text-pretty text-lg font-semibold text-[#FA7F28] sm:text-xl/8">
                  Are you ready to avoid the complexity of banks and secure
                  smoother financing?
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="/apply-now"
                    className="uppercase rounded-md bg-[#FA7F28] px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-[#e67324] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FA7F28] inline-flex items-center group transition-all duration-300 hover:px-8"
                  >
                    Pre-Approve here now
                    <ChevronRightIcon
                      className="ml-0 w-0 h-4 opacity-0 group-hover:ml-2 group-hover:w-4 group-hover:opacity-100 transition-all duration-300"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
