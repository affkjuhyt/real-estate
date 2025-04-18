"use client";

import { useRouter } from "next/navigation";

const loanTerms = [
  {
    title: "LOAN AMOUNT",
    content:
      "Financing ranges from $20 million to $100 million, tailored to the scale and scope of each project.",
  },
  {
    title: "FLEXIBLE TERMS",
    content:
      "Financing terms customized to the specific needs of the development, with extension options based on project milestones.",
  },
  {
    title: "PERSONALIZED GUIDANCE",
    content:
      "Our team of experts provides support at every stage of the process, from initial planning to securing funding and project execution.",
  },
  {
    title: "ACCESS TO FINANCIAL NETWORKS",
    content:
      "We connect our clients with an extensive network of financial institutions and private lenders, facilitating competitive terms and solutions tailored to each initiative.",
  },
  {
    title: "Transition to Permanent Financing (Take-Out Loan)",
    content:
      "We assist developers in structuring take-out loans, enabling the transition from short-term loans to long-term financing with more competitive rates and sustainable terms, using the property as collateral.",
  },
];

const loanRequirements = [
  "Through this comprehensive service, we ensure that developers and investors meet the stringent financing requirements needed to bring their large-scale projects to life efficiently while maximizing their return on investment.",
];

export default function MultifamilyProjectSection() {
  const router = useRouter();

  return (
    <div className="overflow-hidden bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl uppercase">
                Strategic Advisory for Large-Scale Multifamily Project Financing
              </p>
              <p className="text-xl mt-6 text-black font-bold uppercase">
                What is a Multifamily Project Financing?
              </p>
              <p className="mt-2 text-lg/8 text-gray-600">
                At{" "}
                <span className="font-semibold text-gray-700">
                  Sapience Capital
                </span>{" "}
                we provide a comprehensive advisory service designed to simplify
                and optimize the financing process for multifamily projects
                starting at 70 units, with funding amounts ranging from $20
                million to $100 million.
              </p>
              <p className="mt-2 text-lg/8 text-gray-600">
                Our mission is to ensure that developers and investors meet the
                stringent requirements necessary to secure financing, enabling
                them to execute large-scale projects efficiently and
                successfully.
              </p>
              <button
                onClick={() => router.push("/apply-now")}
                className="mt-8 bg-[#FA7F29] text-white px-6 py-2.5 rounded-md font-semibold hover:bg-[#e06a15] transition-colors hover:cursor-pointer"
              >
                APPLY NOW
              </button>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl shadow-xl p-6 overflow-hidden">
            <h3 className="text-2xl font-semibold text-[#FA7F28] mb-6 uppercase">
              Multifamily Project Financing
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
