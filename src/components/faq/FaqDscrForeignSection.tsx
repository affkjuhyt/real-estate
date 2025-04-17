import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What is a DSCR loan?",
    answer:
      "A DSCR (Debt Service Coverage Ratio) loan is a financial product that looks at the cash flow (based on rental analysis) generated from an investment property to cover the loan’s principal, interest, property taxes, insurance premiums and HOA if applicable. \nThe debt service coverage ratio is calculated by taking rental revenue and dividing it by the cost an owner has to pay for a property. Costs include the principal and interest of the loan, property taxes, insurance and HOA if applicable.",
  },
  {
    question: "How can DSCR loans enhance my financial wellbeing?",
    answer:
      "Our DSCR loans are tailored to consolidate and restructure existing debts, providing more favorable terms and extended durations. This can lead to reduced monthly payments and more efficient debt management, ultimately bolstering your long-term financial health.",
  },
  {
    question: "Why is considering a DSCR crucial when refinancing a loan over a longer term?",
    answer:
      "No Personal Income or Employment Verification required. \nFaster closing proces \nVery competitive rates \nAllows a real estate investor to change a Short Term Loan such as a Fix and Flip, Bridge and Ground up Construction to a 30 year Loan.",
  },
  {
    question: "What is the maximum loan amount based on DSCR?",
    answer:
      "You can apply for a DSCR loan ranging from a minimum of $100,000 to $2 million.",
  },
  {
    question: "How can I leverage a DSCR loan to my advantage?",
    answer:
      "You can use a DSCR loan for various purposes, including property purchase, rate & term refinancing, and cash-out refinancing.",
  },
  {
    question: "Do you offer financial counseling to help me better grasp my DSCR and its impact on my borrowing capacity?",
    answer:
      "Absolutely! Sapience Capital has a team of financial experts ready to assist you in making informed decisions about our loans.",
  },
]

export default function FaqDscrForeignSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="flex items-center gap-4 text-2xl font-semibold tracking-tight text-[#FA7F29] sm:text-2xl">
            <div className="h-[2px] w-8 bg-[#FA7F29]"></div>
            FAQ
          </h2>
          <dl className="mt-16 grid grid-cols-1 gap-x-8 lg:grid-cols-2">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="border-t border-gray-900/10 first:border-t-0 lg:first:border-t lg:even:border-t-0">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between py-6 text-left text-gray-900">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 group-[&:not([data-open])]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="pb-6 pr-12">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
