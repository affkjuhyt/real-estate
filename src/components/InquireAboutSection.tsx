import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";

export default function InquireAboutSection() {
  const t = useTranslations('contact');
  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <form
          action="#"
          method="POST"
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              {t('form.name')}
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  {t('form.first_name')} <span className="text-[#FA7F28]">*</span>
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
                <label
                  htmlFor="last-name"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  {t('form.last_name')} <span className="text-[#FA7F28]">*</span>
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
                <label
                  htmlFor="company"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  {t('form.company')} <span className="text-[#FA7F28]">*</span>
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
                <label
                  htmlFor="loan-amount"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  {t('form.requested_loan_amount')}{" "}
                  <span className="text-[#FA7F28]">*</span>
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
                <label
                  htmlFor="current-working"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  {t('form.current_working_with')} <span className="text-[#FA7F28]">*</span>
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
                <label
                  htmlFor="loan-type"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  {t('form.loan_type')} <span className="text-[#FA7F28]">*</span>
                </label>
                <div className="mt-2.5">
                  <select
                    required
                    id="loan-type"
                    name="loan-type"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#FA7F28]"
                  >
                    <option value="">{t('form.select_a_loan_type')}</option>
                    <option value="fix-flip">{t('form.fix_and_flip')}</option>
                    <option value="bridge">{t('form.bridge_loan')}</option>
                    <option value="construction">
                      {t('form.ground_up_construction')}
                    </option>
                    <option value="dscr">{t('form.dscr_loan')}</option>
                    <option value="dscr-foreign">
                      {t('form.dscr_foreign')}
                    </option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="property-address"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  {t('form.property_address')} <span className="text-[#FA7F28]">*</span>
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
                <label
                  htmlFor="additional-info"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  {t('form.additional_information')}
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
                {t('form.submit')}
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
                <rect
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                />
              </svg>
            </div>
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {t('form.title')}
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              {t('form.sub_title')}
            </p>
            <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=2102+Business+Center+Drive+Irvine+CA+92612"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-900"
                  >
                    2102 Business Center Drive, Irvine, CA 92612
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  <a
                    href="tel:+1 (714) 462-7882"
                    className="hover:text-gray-900"
                  >
                    +1 (714) 462-7882
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  <a
                    href="mailto:info@sapiencecapital.us"
                    className="hover:text-gray-900"
                  >
                    info@sapiencecapital.us
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
