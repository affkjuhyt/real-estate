import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function InquireAboutSection() {
  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <form action="#" method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Inquire About a New Deal</h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                  First name <span className="text-[#FA7F28]">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#FA7F28]"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                  Last name <span className="text-[#FA7F28]">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#FA7F28]"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
                  Company <span className="text-[#FA7F28]">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="text"
                    id="company"
                    name="company"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#FA7F28]"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="loan-amount" className="block text-sm/6 font-semibold text-gray-900">
                  Requested loan amount <span className="text-[#FA7F28]">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="text"
                    id="loan-amount"
                    name="loan-amount"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#FA7F28]"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="current-working" className="block text-sm/6 font-semibold text-gray-900">
                  Current Working With <span className="text-[#FA7F28]">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="text"
                    id="current-working"
                    name="current-working"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#FA7F28]"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="loan-type" className="block text-sm/6 font-semibold text-gray-900">
                  Loan Type <span className="text-[#FA7F28]">*</span>
                </label>
                <div className="mt-2.5">
                  <select
                    required
                    id="loan-type"
                    name="loan-type"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#FA7F28]"
                  >
                    <option value="">Select a loan type</option>
                    <option value="fix-flip">Fix & Flip loan</option>
                    <option value="bridge">Bridge loan</option>
                    <option value="construction">Ground up construction loan</option>
                    <option value="dscr">DSCR loan</option>
                    <option value="multifamily">Multifamily project financing</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="property-address" className="block text-sm/6 font-semibold text-gray-900">
                  Property Address <span className="text-[#FA7F28]">*</span>
                </label>
                <div className="mt-2.5">
                  <textarea
                    required
                    id="property-address"
                    name="property-address"
                    rows={2}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#FA7F28]"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="additional-info" className="block text-sm/6 font-semibold text-gray-900">
                  Additional Information
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="additional-info"
                    name="additional-info"
                    rows={4}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#FA7F28]"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-[#FA7F28] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#e06a15] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FA7F28]"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect fill="white" width="100%" height="100%" strokeWidth={0} />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
              </svg>
            </div>
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Get in Touch Directly
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
                Still have questions about our loan rate or any other inquiries? Reach out today!
            </p>
            <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  545 Mavis Island
                  <br />
                  Chicago, IL 99191
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="tel:+1 (555) 234-5678" className="hover:text-gray-900">
                    +1 (555) 234-5678
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="mailto:hello@example.com" className="hover:text-gray-900">
                    hello@example.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
