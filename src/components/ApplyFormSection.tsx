import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useTranslations } from "next-intl";

export default function ApplyFormSection() {
  const t = useTranslations('apply')
  
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <form>
          <div className="space-y-12">
            <div className="pb-12">
              <h2 className="text-2xl font-bold text-gray-900 uppercase text-center">
                {t('title')}
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 bg-[#F7F8F8] p-16">
                <div className="col-span-full mb-4 text-2xl uppercase text-black font-bold">
                  {t('sub_title')}
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm/6 font-medium uppercase text-black">
                    {t('name')}
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
                    {t('last_name')}
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
                    {t('subject_property_address')}
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
                    {t('email_address')}
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
                    {t('cellphone')}
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
                    {t('estimated_fico')}
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
                    {t('legal_status')}
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="legal-status"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option>{t('permanent')}</option>
                      <option>{t('foreign')}</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="loan-type" className="block text-sm/6 font-medium uppercase text-black">
                    {t('type_of_loan')}
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="loan-type"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option>{t('purchase')}</option>
                      <option>{t('fix_and_flip')}</option>
                      <option>{t('new_construction')}</option>
                      <option>{t('refinance')}</option>
                      <option>{t('cash_out')}</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="rehab-budget" className="block text-sm/6 font-medium uppercase text-black">
                    {t('estimated_rehab_budget')}
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
                    {t('number_of_properties_of_experience')}
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
                    {t('estimated_purchase_price')}
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
                    {t('how_did_you_hear_about_us')}
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
                    {t('note')}
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
                    {t('best_time')}
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
                    className="rounded-md bg-[#c99909] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#e06a15] transition-colors"
                  >
                    {t('submit')}
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
