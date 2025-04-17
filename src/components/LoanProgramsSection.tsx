import Link from "next/link";

export default function LoanProgramsSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[2px] bg-[#FA7F28] w-8"></div>
          <h1 className="text-[#FA7F28] text-2xl sm:text-2xl font-bold">LOAN PROGRAMS</h1>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {/* Top row with 3 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="border border-gray-200 p-8 sm:p-10 flex flex-col rounded-lg items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <img
                alt="Transistor"
                src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
                width={158}
                height={48}
                className="max-h-12 w-full object-contain"
              />
              <h2 className="mt-4 text-xl font-semibold uppercase sm:text-2xl text-black">Fix & Flip loan</h2>
              <h3 className="text-sm text-[#FA7F28] uppercase font-medium sm:text-base">Short term</h3>
              <h3 className="text-sm text-gray-600 mb-6 sm:text-base">
                Purchase, Rehab and Resell Your Property
              </h3>
              <Link 
                href="/fix-flip" 
                className="mt-auto bg-[#FA7F28] text-white font-medium text-sm py-2 px-4 rounded hover:bg-[#e06a15] transition-colors"
              >
                Read More
              </Link>
            </div>

            <div className="border border-gray-200 p-6 sm:p-10 flex flex-col rounded-lg items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <img
                alt="Reform"
                src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
                width={158}
                height={48}
                className="max-h-12 w-full object-contain"
              />
              <h2 className="mt-4 text-xl font-semibold uppercase sm:text-2xl text-black">
                Ground up constructions loan
              </h2>
              <h3 className="text-sm text-[#FA7F28] uppercase font-medium sm:text-base">Short term</h3>
              <h3 className="text-sm text-gray-600 mb-6 sm:text-base">
                Finance your New Construction
              </h3>
              <Link 
                href="/ground-up-construction" 
                className="mt-auto bg-[#FA7F28] text-white font-medium text-sm py-2 px-4 rounded hover:bg-[#e06a15] transition-colors"
              >
                Read More
              </Link>
            </div>

            <div className="border border-gray-200 p-6 sm:p-10 flex flex-col rounded-lg items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <img
                alt="Tuple"
                src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
                width={158}
                height={48}
                className="max-h-12 w-full object-contain"
              />
              <h2 className="mt-4 text-xl font-semibold uppercase sm:text-2xl text-black">Bridge loan</h2>
              <h3 className="text-sm text-[#FA7F28] uppercase font-medium sm:text-base">Short term</h3>
              <h3 className="text-sm text-gray-600 mb-6 sm:text-base">
                Purchase, refinance or cash out
              </h3>
              <Link 
                href="/bridge-loan" 
                className="mt-auto bg-[#FA7F28] text-white font-medium text-sm py-2 px-4 rounded hover:bg-[#e06a15] transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Bottom row with 2 centered items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
            <div className="border border-gray-200 p-6 sm:p-10 flex flex-col rounded-lg items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <img
                alt="SavvyCal"
                src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
                width={158}
                height={48}
                className="max-h-12 w-full object-contain"
              />
              <h2 className="mt-4 text-xl font-semibold uppercase sm:text-2xl text-black">Dscr loan</h2>
              <h3 className="text-sm text-[#FA7F28] uppercase font-medium sm:text-base">Short term</h3>
              <h3 className="text-sm text-gray-600 mb-6 sm:text-base">
                Buy and refinance your rental property
              </h3>
              <Link 
                href="/dscr" 
                className="mt-auto bg-[#FA7F28] text-white font-medium text-sm py-2 px-4 rounded hover:bg-[#e06a15] transition-colors"
              >
                Read More
              </Link>
            </div>

            <div className="border border-gray-200 p-6 sm:p-10 flex flex-col rounded-lg items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <img
                alt="Statamic"
                src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
                width={158}
                height={48}
                className="max-h-12 w-full object-contain"
              />
              <h2 className="mt-4 text-xl font-semibold uppercase sm:text-2xl text-black">
                Multifamily project financing
              </h2>
              <h3 className="text-sm text-gray-600 mb-6 sm:text-base">
                Financing process for multifamily projects
              </h3>
              <Link 
                href="/multifamily-project-financing" 
                className="mt-auto bg-[#FA7F28] text-white font-medium text-sm py-2 px-4 rounded hover:bg-[#e06a15] transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
