'use client';

import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useTranslations } from "next-intl";
import { useFormik } from "formik";
import * as Yup from 'yup';

export default function ApplyFormSection() {
  const t = useTranslations('apply');

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      propertyAddress: '',
      email: '',
      cellphone: '',
      fico: '',
      legalStatus: t('permanent'),
      loanType: t('purchase'),
      rehabBudget: '',
      experience: '',
      purchasePrice: '',
      referralSource: 'Social Media',
      note: '',
      bestTime: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      propertyAddress: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      cellphone: Yup.string().required('Required'),
      fico: Yup.number().required('Required'),
    }),
    onSubmit: async (values, { setSubmitting, setStatus, resetForm }) => {
      setStatus('idle');

      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          const errorData = await response.text();
          throw new Error(`Failed to send email. Status: ${response.status}`);
        }

        setStatus('success');
        resetForm();
      } catch (error) {
        setStatus('error');
      } finally {
        setSubmitting(false);
      }
    }
  });

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <form onSubmit={formik.handleSubmit}>
          <div className="space-y-12">
            <div className="pb-12">
              <h2 className="text-2xl font-bold text-gray-900 uppercase text-center">
                {t('title')}
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 bg-[#F7F8F8] p-16">
                <div className="col-span-full mb-4 text-2xl uppercase text-black font-bold">
                  {t('sub_title')}
                </div>

                {/* FIRST NAME */}
                <div className="sm:col-span-3">
                  <label htmlFor="firstName" className="block text-sm font-medium uppercase text-black">
                    {t('name')}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                      className="block w-full rounded-md px-3 py-1.5 bg-white text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm"
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <div className="text-red-500 text-sm mt-1">{formik.errors.firstName}</div>
                    ) : null}
                  </div>
                </div>

                {/* LAST NAME */}
                <div className="sm:col-span-3">
                  <label htmlFor="lastName" className="block text-sm font-medium uppercase text-black">
                    {t('last_name')}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                      className="block w-full rounded-md px-3 py-1.5 bg-white text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm"
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <div className="text-red-500 text-sm mt-1">{formik.errors.lastName}</div>
                    ) : null}
                  </div>
                </div>

                {/* PROPERTY ADDRESS */}
                <div className="col-span-full">
                  <label htmlFor="propertyAddress" className="block text-sm font-medium uppercase text-black">
                    {t('subject_property_address')}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="propertyAddress"
                      name="propertyAddress"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.propertyAddress}
                      className="block w-full rounded-md px-3 py-1.5 bg-white text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm"
                    />
                    {formik.touched.propertyAddress && formik.errors.propertyAddress ? (
                      <div className="text-red-500 text-sm mt-1">{formik.errors.propertyAddress}</div>
                    ) : null}
                  </div>
                </div>

                {/* Các trường khác: Email, Cellphone, FICO, LegalStatus, LoanType, ... */}
                {/* Bạn có thể copy/paste từ đoạn trên và thay tên trường tương ứng */}

                {/* SUBMIT BUTTON */}
                <div className="col-span-full">
                  <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="mt-4 w-full rounded-md bg-indigo-600 py-2 text-white text-base font-semibold hover:bg-indigo-500 disabled:opacity-50"
                  >
                    {formik.isSubmitting ? t('sending') : t('submit')}
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