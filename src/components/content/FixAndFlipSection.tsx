"use client";

import { useRouter } from "next/navigation";

export default function FixAndFlipSection({ messages }: any) {
  const router = useRouter();

  const loanTerms = [
    {
      title: messages['fix_flip']['property_type'],
      content: messages['fix_flip']['property_type_value'],
    },
    {
      title: messages['fix_flip']['loan_amount'],
      content: messages['fix_flip']['loan_amount_value'],
    },
    {
      title: messages['fix_flip']['type_of_loan'],
      content: messages['fix_flip']['type_of_loan_value'],
    },
    {
      title: messages['fix_flip']['maximum_loan_to_cost'],
      content: messages['fix_flip']['maximum_loan_to_cost_value'],
    },
    {
      title: messages['fix_flip']['maximum_loan_to_arv'],
      content: messages['fix_flip']['maximum_loan_to_arv_value'],
    },
    {
      title: messages['fix_flip']['base_rate'],
      content: messages['fix_flip']['base_rate_value'],
    },
    {
      title: messages['fix_flip']['minimum_fico_score'],
      content: messages['fix_flip']['minimum_fico_score_value'],
    },
    {
      title: messages['fix_flip']['prepayment_penalties'],
      content: messages['fix_flip']['prepayment_penalties_value'],
    },
    {
      title: messages['fix_flip']['foreign_nationals_accepted'],
      content: messages['fix_flip']['foreign_nationals_accepted_value'],
    },
    {
      title: messages['fix_flip']['term_length'],
      content: messages['fix_flip']['term_length_value'],
    },
    {
      title: messages['fix_flip']['easy_draw_process'],
      content: "",
    },
  ];
  
  const loanRequirements = messages["fix_flip"]["requirements_list"];

  return (
    <div className="overflow-hidden bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="text-xl mt-6 text-black font-bold uppercase">
                {messages["fix_flip"]["title"]}
              </p>
              <p className="mt-2 text-lg/8 text-gray-600">
                <span className="font-semibold text-gray-700">
                  {messages["fix_flip"]["a_content"]}
                </span>{" "}
                {messages["fix_flip"]["b_content"]}
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                {messages["fix_flip"]["a_sub_content"]}{" "}
                <span className="font-semibold text-gray-700">
                  Sapience Capital
                </span>
                {messages["fix_flip"]["b_sub_content"]}
              </p>
              <button
                onClick={() => router.push("/apply-now")}
                className="mt-8 bg-[#c99909] text-white px-6 py-2.5 rounded-md font-semibold hover:bg-[#e06a15] transition-colors hover:cursor-pointer"
              >
                {messages["fix_flip"]["apply_now"]}
              </button>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl shadow-xl p-6 overflow-hidden">
            <h3 className="text-2xl font-semibold text-[#c99909] mb-6 uppercase">
              {messages["fix_flip"]["a_title"]}
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
                  {messages["fix_flip"]["requirements"]}
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
