"use client";

import { useRouter } from "next/navigation";

export default function BankStatementSection({ messages }: any) {
  const router = useRouter();

  const loanRequirements = messages["bank_statement"]["loan_requirements"];

  return (
    <div className="overflow-hidden bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="text-xl mt-6 text-black font-bold uppercase">
                {messages["bank_statement"]["title"]}
              </p>
              <p className="text-xl mt-2 text-black">
                {messages["bank_statement"]["a_content"]} <b>
                  {messages["bank_statement"]["b_content"]}
                </b> {messages["bank_statement"]["c_content"]} <b>
                  {messages["bank_statement"]["d_content"]}
                </b> {messages["bank_statement"]["e_content"]} <b>
                  {messages["bank_statement"]["f_content"]}
                </b> {messages["bank_statement"]["g_content"]}
              </p>
              <button
                onClick={() => router.push("/apply-now")}
                className="mt-8 bg-[#c99909] text-white px-6 py-2.5 rounded-md font-semibold hover:bg-[#e06a15] transition-colors hover:cursor-pointer"
              >
                {messages["bank_statement"]["apply_now"]}
              </button>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl shadow-xl p-6 overflow-hidden">
            <h3 className="text-2xl font-semibold text-[#c99909] mb-6 uppercase">
              {messages["bank_statement"]["a_title"]}
            </h3>
            <div className="overflow-y-auto max-h-[600px] pr-4 space-y-6">
              <div>
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
