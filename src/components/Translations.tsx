'use client'

import React, { useState, useEffect } from 'react';

const TranslationBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const languages = ['English', 'Spanish'];

  return (
    <div className={`w-full bg-white transition-all duration-300 ease-in-out ${isVisible ? 'h-16 opacity-100' : 'h-0 opacity-0'}`}>
      <div className="container mx-auto px-4 h-full flex justify-end items-center gap-4">
        {/* Language Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="bg-white border border-gray-300 rounded-md px-4 py-2 flex items-center gap-2 hover:bg-gray-50"
          >
            {selectedLanguage}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
              {languages.map((language) => (
                <button
                  key={language}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100"
                  onClick={() => {
                    setSelectedLanguage(language);
                    setIsOpen(false);
                  }}
                >
                  {language}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Apply Now Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Apply Now
        </button>

        {/* Payoff Request Button */}
        <button className="bg-white border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
          Payoff Request
        </button>
      </div>
    </div>
  );
};

export default TranslationBar;
