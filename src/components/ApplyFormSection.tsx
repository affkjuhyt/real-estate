import { PhotoIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function ApplyFormSection() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <form>
          <div className="space-y-12">
            <div className="pb-12">
              <h2 className="text-2xl font-bold text-gray-900 uppercase text-center">
                Apply now
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 bg-[#F7F8F8] p-16">
                <div className="col-span-full mb-4 text-2xl uppercase text-black font-bold">
                  A secure and fast transaction guaranteed in one place
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm/6 font-medium uppercase text-black">
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="first-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm/6 font-medium uppercase text-black">
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="last-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="property-address" className="block text-sm/6 font-medium uppercase text-black">
                    Subject property address
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="property-address"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="email" className="block text-sm/6 font-medium uppercase text-black">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      id="email"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="cellphone" className="block text-sm/6 font-medium uppercase text-black">
                    Cellphone
                  </label>
                  <div className="mt-2">
                    <input
                      type="tel"
                      id="cellphone"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="fico" className="block text-sm/6 font-medium uppercase text-black">
                    Estimated fico
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      id="fico"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="legal-status" className="block text-sm/6 font-medium uppercase text-black">
                    Legal Status
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="legal-status"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option>Permanent resident or US Citizen</option>
                      <option>Foreign National</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="loan-type" className="block text-sm/6 font-medium uppercase text-black">
                    Type of loan
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="loan-type"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option>Purchase</option>
                      <option>Fix and flip</option>
                      <option>New construction</option>
                      <option>Refinance</option>
                      <option>Cast out</option>
                      <option>Multifamily Project Financing</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="rehab-budget" className="block text-sm/6 font-medium uppercase text-black">
                    Estimated rehab budget
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      id="rehab-budget"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="experience" className="block text-sm/6 font-medium uppercase text-black">
                    Number of properties of experience
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      id="experience"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="purchase-price" className="block text-sm/6 font-medium uppercase text-black">
                    Estimated purchase price
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      id="purchase-price"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="referral-source" className="block text-sm/6 font-medium uppercase text-black">
                    How did you hear about us?
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="referral-source"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option>Social Media</option>
                      <option>Linkedin</option>
                      <option>Our website</option>
                      <option>Friend or Family</option>
                      <option>Broker or Realtor</option>
                      <option>Email Marketing</option>
                      <option>Events and Fairs</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="contact-person" className="block text-sm/6 font-medium uppercase text-black">
                    If you have already spoken with someone from our office, please provide the name of that person
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="contact-person"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="best-time" className="block text-sm/6 font-medium uppercase text-black">
                    Best time to call
                  </label>
                  <div className="mt-2">
                    <input
                      type="time"
                      id="best-time"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="col-span-full flex items-center justify-end">
                  <button
                    type="submit"
                    className="rounded-md bg-[#FA7F29] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#e06a15] transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
