import { ChevronRightIcon } from '@heroicons/react/24/outline'

export default function ApplyNowSection({ messages }: any) {
  return (
    <div className="bg-[#1C3455]">
      <div className="mx-auto max-w-7xl py-24 sm:py-28 px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl uppercase">
            {messages['home']['contact_us_head']}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-xl text-gray-300">
          {messages['home']['contact_sub_title']}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/apply-now"
              className="uppercase rounded-md bg-[#FA7F28] px-6 py-4 text-sm font-semibold text-white shadow-sm inline-flex items-center group transition-all duration-300 hover:px-8"
            >
              {messages['home']['apply_now']}
              <ChevronRightIcon 
                className="ml-0 w-0 h-4 opacity-0 group-hover:ml-2 group-hover:w-4 group-hover:opacity-100 transition-all duration-300" 
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
