'use client';

import { useState, useEffect, useCallback } from "react";
import Image from 'next/image';

export default function Hero({messages}: any) {
  const [currentImage, setCurrentImage] = useState(1);
  const [nextImage, setNextImage] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Preload images
  const preloadImages = useCallback(() => {
    for (let i = 1; i <= 11; i++) {
      const img = new window.Image();
      img.src = `/slider/Slider${i}.jpeg`;
    }
  }, []);

  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setNextImage(currentImage === 10 ? 1 : currentImage + 1);
      
      setTimeout(() => {
        setCurrentImage(currentImage === 10 ? 1 : currentImage + 1);
        setIsTransitioning(false);
      }, 1000);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="relative mt-16 sm:mt-0">
      <div className="relative h-screen sm:min-h-screen overflow-hidden">
        {/* Use next/image for better performance */}
        <Image
          src={`/slider/Slider${currentImage}.jpeg`}
          alt={messages['home']['title']}
          fill
          priority
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <Image
          src={`/slider/Slider${nextImage}.jpeg`}
          alt={messages['home']['title']}
          fill
          priority
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            isTransitioning ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content */}
        <div className="relative h-full mx-auto max-w-7xl px-6 flex items-center">
          <div className="w-full lg:w-1/2">
            <div>
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
