'use client';

import { useState, useEffect } from "react";

export default function Hero({messages}: any) {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((current) => (current === 11 ? 1 : current + 1));
    }, 10000); // Increased interval to 10000 milliseconds (10 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-16 sm:mt-0"> {/* Added margin-top for mobile */}
      <div
        className="relative h-screen sm:min-h-screen bg-cover bg-center transition-all duration-2000 ease-in-out" // Adjusted height for mobile
        style={{ backgroundImage: `url('/slider/Slider${currentImage}.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} // Ensures full coverage
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* Increased opacity */}
        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1"> {/* Use a single column grid for all screen sizes */}
            <div className="col-span-1">
              <h1 className="text-balance text-3xl sm:text-5xl font-semibold tracking-tight text-white">
                {messages['home']['title']}
              </h1>
              <div className="mt-4 sm:mt-6">
                <p className="text-pretty text-base sm:text-lg font-semibold text-white">
                {messages['home']['sub_title']}
                </p>
                <p className="text-pretty text-base sm:text-lg font-semibold text-[#c99909]">
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
