export default function Financing({ messages}: any) {

    return (
      <div className="bg-[#F7F8F8]">
        <div className="px-6 py-24 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl uppercase">
            {messages['about']['finance_title']}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-xl text-gray-600">
                {messages['about']['finance_head']}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact-us"
                className="rounded-md bg-[#FA7F28] px-6 py-4 text-sm font-semibold text-white shadow-sm inline-flex items-center group transition-all duration-300 hover:px-8"
              >
                {messages['about']['finance_button']}
              </a>
              <a
                href="/apply-now"
                className="rounded-md bg-[#FA7F28] px-6 py-4 text-sm font-semibold text-white shadow-sm inline-flex items-center group transition-all duration-300 hover:px-8"
              >
                {messages['about']['apply_now']}
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  