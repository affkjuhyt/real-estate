"use client";

import { useRouter } from "next/navigation";

export default function BridgeLoanSection({ messages }) {
  const router = useRouter();

  const loanTerms = messages['bridge_loan']['loan_terms'];
  const loanRequirements = messages['bridge_loan']['loan_requirements'];

  return (
    <div className="overflow-hidden bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="text-xl mt-6 text-black font-bold uppercase">
                {messages['bridge_loan']['title']}
              </p>
              <p className="text-xl mt-2 text-black font-semibold">
                {messages['bridge_loan']['sub_title']}
              </p>
              <p className="mt-2 text-lg/8 text-gray-600">
                {messages['bridge_loan']['a_content']}{" "}
                <span className="font-semibold text-gray-700">{messages['bridge_loan']['b_content']}</span>{" "}
                {messages['bridge_loan']['c_content']}
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                {messages['bridge_loan']['d_content']}{" "}
                <span className="font-semibold text-gray-700">
                  Sapience Capital
                </span>
                {messages['bridge_loan']['e_content']}
              </p>
              <button
                onClick={() => router.push("/apply-now")}
                className="mt-8 bg-[#FA7F29] text-white px-6 py-2.5 rounded-md font-semibold hover:bg-[#e06a15] transition-colors hover:cursor-pointer"
              >
                {messages['bridge_loan']['apply_now']}
              </button>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl shadow-xl p-6 overflow-hidden">
            <h3 className="text-2xl font-semibold text-[#FA7F28] mb-6 uppercase">
              {messages['bridge_loan']['a_title']}
            </h3>
            <div className="overflow-y-auto max-h-[600px] pr-4 space-y-6">
              {loanTerms.map((term, index) => (
                <div key={term.title}>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 uppercase">
                      {term.title}
                    </h4>
                    <p className="text-gray-600">{term.content}</p>
                  </div>
                  {index < loanTerms.length - 1 && (
                    <hr className="border-gray-200 mt-6" />
                  )}
                </div>
              ))}

              <div className="flex items-center justify-center gap-4 my-8">
                <div className="h-[2px] w-24 bg-gray-300"></div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {messages['bridge_loan']['requirements']}
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  {loanRequirements.map((requirement, index) => (
                    <li key={index} className="text-gray-600">
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
