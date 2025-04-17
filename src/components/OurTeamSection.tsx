'use client'

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function OurTeamSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const t = useTranslations('about');

  const people = [
    {
      name: "Anjin Ho",
      role: t('manage_partner'),
      imageUrl: "/Managing Partner.jpeg",
    },
    {
      name: "Trung",
      role: t('co_founder'),
      imageUrl: "/Co-Founder.jpeg",
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="flex items-center gap-4 text-2xl font-semibold tracking-tight text-[#FA7F28] sm:text-3xl">
            <div className="h-[2px] w-8 bg-[#FA7F28]"></div>
            {t('our_team')}
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img
                alt=""
                src={person.imageUrl}
                className="aspect-[14/13] w-full rounded-2xl object-cover cursor-pointer"
                onClick={() => setSelectedImage(person.imageUrl)}
              />
              <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-black">
                {person.name}
              </h3>
              <p className="text-base/7 text-black">{person.role}</p>
              {/* <p className="text-sm/6 text-black">{person.location}</p> */}
            </li>
          ))}
        </ul>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-2xl w-full">
            <img
              src={selectedImage}
              alt="Team member"
              className="w-full h-auto rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute -top-2 -right-2 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
