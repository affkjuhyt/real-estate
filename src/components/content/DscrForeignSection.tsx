"use client";

import { useRouter } from "next/navigation";

export default function DscrForeignSection({ messages}: any) {
  const router = useRouter();

  const loanTerms = messages['dscr']['loan_term'];
  const loanRequirements = messages['dscr']['loan_requirements'];

  return (
    <div className="overflow-hidden bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="text-xl mt-6 text-black font-bold uppercase">
                {messages['dscr_foreign']['title']}
              </p>
              <p className="mt-2 text-lg/8 text-gray-600">
                <span className="font-semibold text-gray-700">
                  {messages['dscr_foreign']['a_content']}
                </span>{" "}
                {messages['dscr_foreign']['b_content']} <span className="font-semibold text-gray-700">{messages['dscr_foreign']['c_content']}</span> as the primary factor in determining the loan's
                {messages['dscr_foreign']['d_content']}
              </p>
              <p className="mt-2 text-lg/8 text-gray-600">
                {messages['dscr_foreign']['e_content']} <span className="font-semibold text-gray-700">{messages['dscr_foreign']['f_content']}</span> {messages['dscr_foreign']['g_content']}
              </p>
              <button
                onClick={() => router.push("/apply-now")}
                className="mt-8 bg-[#FA7F29] text-white px-6 py-2.5 rounded-md font-semibold hover:bg-[#e06a15] transition-colors hover:cursor-pointer"
              >
                {messages['dscr_foreign']['apply_now']}
              </button>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl shadow-xl p-6 overflow-hidden">
            <h3 className="text-2xl font-semibold text-[#FA7F28] mb-6 uppercase">
            {messages['dscr_foreign']['term']}
            </h3>
            <div className="overflow-y-auto max-h-[600px] pr-4 space-y-6">
              {loanTerms.map((term: any, index: number) => (
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
                  Requirements:
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  {loanRequirements.map((requirement: any, index: number) => (
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
