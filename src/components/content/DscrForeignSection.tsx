"use client";

import { useRouter } from "next/navigation";

const loanTerms = [
  {
    title: "PROPERTY TYPE",
    content:
      "Single Family /n2-4 Units /n5-10 Units /nTownhomes /nPlanned Unit Development (PUD) /nWarrantable Condos",
  },
  {
    title: "LOAN AMOUNT",
    content: "US$ 125K to US$ 2.5M (Higher amount on individual basis)",
  },
  {
    title: "TYPE OF LOAN",
    content:
      "30-Year Fixed or Adjustable-rate mortgages (ARMs): 5/1, 10/1 (Partial IO or Amortizing)",
  },
  {
    title: "MAXIMUM LOAN TO VALUE",
    content: "PURCHASE: 80% /nREFINANCE: 75% /nCASHOUT: 70%",
  },
  {
    title: "Term Length",
    content: "30 Year",
  },
  {
    title: "BASE RATE",
    content: "6,875%",
  },
  {
    title: "PREPAYMENT PENALTIES",
    content: "5 YEARS DECLINING (5% to 1%)",
  },
  {
    title: "CLOSING",
    content: "30 TO 60 DAYS",
  },
];

const loanRequirements = [
  "3 months of bank statements",
  "ID, passport, (US visa for foreign nationals)",
  "Entity Documents (LLC or Corp), EIN & OP Agreement",
  "6 months liquidity/reserves",
  "Non-owner occupancy certification",
  "SSN for credit report and background check",
  "Evidence of insurance (full replacement + 500K liability) + 6 months rental loss",
  "Minimum Fico score of 660",
  "Signed loan application",
  "Income based in rental cash flow subject to A DSCR ratio of 1:10",
  "HOA documents (only condos)",
  "Foreign nationals: asset sourced and seasoned for 60 days in US FDIC insured bank"
];

export default function DscrForeignSection() {
  const router = useRouter();

  return (
    <div className="overflow-hidden bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="text-xl mt-6 text-black font-bold uppercase">
                What is a Foreign National DSCR Loan?
              </p>
              <p className="mt-2 text-lg/8 text-gray-600">
                <span className="font-semibold text-gray-700">
                  Foreign National DSCR Loans
                </span>{" "}
                is a type of loan specifically designed for foreign investors
                who are interested in purchasing income-generating properties in
                the United States. These loans use the <span className="font-semibold text-gray-700">Debt Service Coverage
                Ratio (DSCR)</span> as the primary factor in determining the loan's
                eligibility, rather than focusing on the borrower's personal
                credit score or income.
              </p>
              <p className="mt-2 text-lg/8 text-gray-600">
                In simple terms, a <span className="font-semibold text-gray-700">Foreign National DSCR Loan</span> allows foreign
                investors to finance U.S. real estate purchases by evaluating
                the property’s ability to generate income, rather than the
                financial background of the foreign borrower.
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
            Foreign National DSCR Terms
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
