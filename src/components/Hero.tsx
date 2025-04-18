'use client';

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

export default function Hero({messages}) {
  const [currentImage, setCurrentImage] = useState(1);
  // const t = useTranslations('home');
  console.log("messages", messages)

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
                {messages['home']['title']}
              </h1>
              <div className="mt-6">
                <p className="text-pretty text-lg font-semibold text-white sm:text-xl/8">
                {messages['home']['sub_title']}
                </p>
                <p className="text-pretty text-lg font-semibold text-[#FA7F28] sm:text-xl/8">
                {messages['home']['content']}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
