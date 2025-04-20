"use client";

import { useRouter } from "next/navigation";

export default function AssetUtilizationSection({ messages }: any) {
  const router = useRouter();

  const loanRequirements = messages["asset_utilization"]["loan_requirements"];

  return (
    <div className="overflow-hidden bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="text-xl mt-6 text-black font-bold uppercase">
                {messages["asset_utilization"]["title"]}
              </p>
              <p className="text-xl mt-2 text-black">
                {messages["asset_utilization"]["a_content"]} <b>
                  {messages["asset_utilization"]["b_content"]}
                </b> {messages["asset_utilization"]["c_content"]} <b>
                  {messages["asset_utilization"]["d_content"]}
                </b> {messages["asset_utilization"]["e_content"]} <b>
                  {messages["asset_utilization"]["f_content"]}
                </b> {messages["asset_utilization"]["g_content"]}
              </p>
              <button
                onClick={() => router.push("/apply-now")}
                className="mt-8 bg-[#c99909] text-white px-6 py-2.5 rounded-md font-semibold hover:bg-[#e06a15] transition-colors hover:cursor-pointer"
              >
                {messages["asset_utilization"]["apply_now"]}
              </button>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl shadow-xl p-6 overflow-hidden">
            <h3 className="text-2xl font-semibold text-[#c99909] mb-6 uppercase">
              {messages["asset_utilization"]["a_title"]}
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
