import { ChevronRightIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:col-span-2 xl:col-auto">
              Real Estate Investment and Private Lending - Your Path to Profitable Peace of Mind
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-pretty text-lg font-semibold text-black sm:text-xl/8">
                Committed to optimizing your profits while safeguarding your confidence and security
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
            <img
              alt=""
              src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}
