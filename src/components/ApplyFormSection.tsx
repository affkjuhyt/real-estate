'use client'; // Add this directive if not already present for useState/useEffect

import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useTranslations } from "next-intl";
import { useState, FormEvent } from "react"; // Import useState and FormEvent

export default function ApplyFormSection() {
  const t = useTranslations('apply');

  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    propertyAddress: '',
    email: '',
    cellphone: '',
    fico: '',
    legalStatus: t('permanent'), // Default value
    loanType: t('purchase'), // Default value
    rehabBudget: '',
    experience: '',
    purchasePrice: '',
    referralSource: 'Social Media', // Default value
    note: '',
    bestTime: '',
  });

  // State for submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Generic handler for input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Form submission handler
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    console.log("handleSubmit called");
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // You might want to get more details from the response if possible
        const errorData = await response.text(); // or response.json() if the API returns JSON error
        console.error('API Error Response:', errorData);
        throw new Error(`Failed to send email. Status: ${response.status}`);
      }

      setSubmitStatus('success');
      // Optionally reset form fields
      // setFormData({ firstName: '', lastName: '', ... }); // Reset to initial state
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <form onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="pb-12">
              <h2 className="text-2xl font-bold text-gray-900 uppercase text-center">
                {t('title')}
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 bg-[#F7F8F8] p-16">
                <div className="col-span-full mb-4 text-2xl uppercase text-black font-bold">
                  {t('sub_title')}
                </div>

                {/* --- Example for First Name Input --- */}
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm/6 font-medium uppercase text-black">
                    {t('name')}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="first-name"
                      name="firstName" // Add name attribute
                      value={formData.firstName} // Control component value
                      onChange={handleChange} // Handle changes
                      required // Add required if necessary
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                {/* --- Example for Last Name Input --- */}
                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm/6 font-medium uppercase text-black">
                    {t('last_name')}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="last-name"
                      name="lastName" // Add name attribute
                      value={formData.lastName} // Control component value
                      onChange={handleChange} // Handle changes
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                {/* --- Example for Property Address Input --- */}
                 <div className="col-span-full">
                  <label htmlFor="property-address" className="block text-sm/6 font-medium uppercase text-black">
                    {t('subject_property_address')}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="property-address"
                      name="propertyAddress" // Add name attribute
                      value={formData.propertyAddress} // Control component value
                      onChange={handleChange} // Handle changes
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                {/* --- Example for Email Input --- */}
                <div className="sm:col-span-3">
                  <label htmlFor="email" className="block text-sm/6 font-medium uppercase text-black">
                    {t('email_address')}
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      id="email"
                      name="email" // Add name attribute
                      value={formData.email} // Control component value
                      onChange={handleChange} // Handle changes
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                {/* --- Example for Cellphone Input --- */}
                <div className="sm:col-span-3">
                  <label htmlFor="cellphone" className="block text-sm/6 font-medium uppercase text-black">
                    {t('cellphone')}
                  </label>
                  <div className="mt-2">
                    <input
                      type="tel"
                      id="cellphone"
                      name="cellphone" // Add name attribute
                      value={formData.cellphone} // Control component value
                      onChange={handleChange} // Handle changes
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                {/* --- Example for FICO Input --- */}
                <div className="sm:col-span-3">
                  <label htmlFor="fico" className="block text-sm/6 font-medium uppercase text-black">
                    {t('estimated_fico')}
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      id="fico"
                      name="fico" // Add name attribute
                      value={formData.fico} // Control component value
                      onChange={handleChange} // Handle changes
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                {/* --- Example for Legal Status Select --- */}
                <div className="sm:col-span-3">
                  <label htmlFor="legal-status" className="block text-sm/6 font-medium uppercase text-black">
                    {t('legal_status')}
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="legal-status"
                      name="legalStatus" // Add name attribute
                      value={formData.legalStatus} // Control component value
                      onChange={handleChange} // Handle changes
                      required
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      {/* Add value attributes matching state keys/values */}
                      <option value={t('permanent')}>{t('permanent')}</option>
                      <option value={t('foreign')}>{t('foreign')}</option>
                    </select>
                    {/* ... ChevronDownIcon ... */}
                  </div>
                </div>

                {/* --- Example for Loan Type Select --- */}
                <div className="sm:col-span-3">
                  <label htmlFor="loan-type" className="block text-sm/6 font-medium uppercase text-black">
                    {t('type_of_loan')}
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="loan-type"
                      name="loanType" // Add name attribute
                      value={formData.loanType} // Control component value
                      onChange={handleChange} // Handle changes
                      required
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      {/* Add value attributes */}
                      <option value={t('purchase')}>{t('purchase')}</option>
                      <option value={t('fix_and_flip')}>{t('fix_and_flip')}</option>
                      <option value={t('new_construction')}>{t('new_construction')}</option>
                      <option value={t('refinance')}>{t('refinance')}</option>
                      <option value={t('cash_out')}>{t('cash_out')}</option>
                    </select>
                    {/* ... ChevronDownIcon ... */}
                  </div>
                </div>

                {/* --- Example for Rehab Budget Input --- */}
                <div className="sm:col-span-3">
                  <label htmlFor="rehab-budget" className="block text-sm/6 font-medium uppercase text-black">
                    {t('estimated_rehab_budget')}
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      id="rehab-budget"
                      name="rehabBudget" // Add name attribute
                      value={formData.rehabBudget} // Control component value
                      onChange={handleChange} // Handle changes
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                {/* --- Example for Experience Input --- */}
                <div className="sm:col-span-3">
                  <label htmlFor="experience" className="block text-sm/6 font-medium uppercase text-black">
                    {t('number_of_properties_of_experience')}
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      id="experience"
                      name="experience" // Add name attribute
                      value={formData.experience} // Control component value
                      onChange={handleChange} // Handle changes
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                {/* --- Example for Purchase Price Input --- */}
                <div className="sm:col-span-3">
                  <label htmlFor="purchase-price" className="block text-sm/6 font-medium uppercase text-black">
                    {t('estimated_purchase_price')}
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      id="purchase-price"
                      name="purchasePrice" // Add name attribute
                      value={formData.purchasePrice} // Control component value
                      onChange={handleChange} // Handle changes
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                {/* --- Example for Referral Source Select --- */}
                <div className="sm:col-span-3">
                  <label htmlFor="referral-source" className="block text-sm/6 font-medium uppercase text-black">
                    {t('how_did_you_hear_about_us')}
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="referral-source"
                      name="referralSource" // Add name attribute
                      value={formData.referralSource} // Control component value
                      onChange={handleChange} // Handle changes
                      required
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      {/* Add value attributes */}
                      <option value="Social Media">Social Media</option>
                      <option value="Linkedin">Linkedin</option>
                      <option value="Our website">Our website</option>
                      <option value="Friend or Family">Friend or Family</option>
                      <option value="Broker or Realtor">Broker or Realtor</option>
                      <option value="Email Marketing">Email Marketing</option>
                      <option value="Events and Fairs">Events and Fairs</option>
                    </select>
                    {/* ... ChevronDownIcon ... */}
                  </div>
                </div>

                {/* --- Example for Note Input --- */}
                <div className="col-span-full">
                  <label htmlFor="note" className="block text-sm/6 font-medium uppercase text-black"> {/* Changed htmlFor */}
                    {t('note')}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="note" // Changed id
                      name="note" // Add name attribute
                      value={formData.note} // Control component value
                      onChange={handleChange} // Handle changes
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                {/* --- Example for Best Time Input --- */}
                <div className="sm:col-span-3">
                  <label htmlFor="best-time" className="block text-sm/6 font-medium uppercase text-black">
                    {t('best_time')}
                  </label>
                  <div className="mt-2">
                    <input
                      type="time"
                      id="best-time"
                      name="bestTime" // Add name attribute
                      value={formData.bestTime} // Control component value
                      onChange={handleChange} // Handle changes
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                {/* --- Submit Button and Status --- */}
                <div className="col-span-full flex flex-col items-end gap-4"> {/* Adjusted layout for status message */}
                   <button
                    type="submit"
                    disabled={isSubmitting} // Disable button while submitting
                    className="rounded-md bg-[#c99909] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#e06a15] transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : t('submit')}
                  </button>
                  {submitStatus === 'success' && (
                    <p className="text-green-600">Application submitted successfully!</p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-red-600">Failed to submit application. Please try again.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
