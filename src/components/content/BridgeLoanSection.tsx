'use client';

import { useRouter } from "next/navigation";

const loanTerms = [
  {
    title: "PROPERTY TYPE",
    content: "Single Family: 1-4 Units / Condos /nMulti Family: 5 – 30 units"
  },
  {
    title: "LOAN AMOUNT",
    content: "UP TO US$ 5.000.000 (Loan amount above US $5M subject to longer approval time and additional requirements)"
  },
  {
    title: "TYPE OF LOAN",
    content: "Interest only short term loan with a balloon payment at maturity."
  },
  {
    title: "PURCHASE",
    content: "75%"
  },
  {
    title: "REFINANCE",
    content: "75%"
  },
  {
    title: "CASH OUT",
    content: "70%"
  },
  {
    title: "Term Length",
    content: "Up to 18 months + 6 months extension."
  },
  {
    title: "BASE RATE",
    content: "STARTING RATE 8.75% (Interest only payments on disbursed amount)"
  },
  {
    title: "MINIMUM FICO SCORE",
    content: "700"
  },
  {
    title: "PREPAYMENT PENALTIES",
    content: "NO PREPAYMENT PENALTIES 10-14 DAYS CLOSINGS"
  },
  {
    title: "FOREIGN NATIONALS ACCEPTED",
    content: "+ 0.25 to base rate"
  }
];

const loanRequirements = [
  "3 months of bank statements",
  "ID, passport, (US visa for foreign nationals)",
  "Entity Documents (LLC or Corp), EIN & OP Agreement",
  "Rehab budget (if applicable)",
  "6 months liquidity/reserves",
  "Non-owner occupancy certification",
  "SSN for credit report and background check",
  "Evidence of insurance (full replacement + 500K liability) & builder's risk insurance (if applicable)",
  "Minimum Fico score of 700",
  "Signed loan application",
  "Purchase Contract (if applicable.)"
];

export default function BridgeLoanSection() {
  const router = useRouter();

  return (
    <div className="overflow-hidden bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl uppercase">
                Bespoke Bridge Loans: Flexible Financing Solutions for Your Real Estate Ventures
              </p>
              <p className="text-xl mt-6 text-black font-bold uppercase">What is a BRIDGE LOANS?</p>
              <p className="text-xl mt-2 text-black font-semibold uppercase">Purchase, Refinance or Cash out</p>
              <p className="mt-2 text-lg/8 text-gray-600">
                <span className="font-semibold text-gray-700">Bridge loan</span> is a short-term loan that's ideal for situations requiring immediate and creative solutions, such as when you need to close a deal quickly or when your project isn't ready for conventional financing.
                It's called a <span className="font-semibold text-gray-700">bridge loan</span> because it serves as a bridge between one financing period and another, while you wait to sell or secure long-term financing.
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                At <span className="font-semibold text-gray-700">Alto Capital</span>, we offer faster financing with excellent terms.
                Simplified loans, amplified profits.
              </p>
              <button 
                onClick={() => router.push('/apply-now')}
                className="mt-8 bg-[#FA7F29] text-white px-6 py-2.5 rounded-md font-semibold hover:bg-[#e06a15] transition-colors hover:cursor-pointer"
              >
                APPLY NOW
              </button>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl shadow-xl p-6 overflow-hidden">
            <h3 className="text-2xl font-semibold text-[#FA7F28] mb-6 uppercase">Bridge Loan Terms</h3>
            <div className="overflow-y-auto max-h-[600px] pr-4 space-y-6">
              {loanTerms.map((term, index) => (
                <div key={term.title}>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 uppercase">{term.title}</h4>
                    <p className="text-gray-600">{term.content}</p>
                  </div>
                  {index < loanTerms.length - 1 && <hr className="border-gray-200 mt-6" />}
                </div>
              ))}
              
              <div className="flex items-center justify-center gap-4 my-8">
                <div className="h-[2px] w-24 bg-gray-300"></div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Requirements:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {loanRequirements.map((requirement, index) => (
                    <li key={index} className="text-gray-600">{requirement}</li>
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
