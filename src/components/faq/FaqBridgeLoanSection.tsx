import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What exactly is a bridge loan?",
    answer:
      "A bridge loan is a short-term financing option that is used to bridge the gap until a more permanent financial arrangement can be secured.",
  },
  {
    question: "In which scenarios is a bridge loan most appropriate?",
    answer:
      "It’s ideal for situations like buying a new residence before the sale of the current one, funding projects while awaiting a long-term loan approval or seizing short-term investment ventures, to name a few.",
  },
  {
    question: "Is collateral necessary for a bridge loan?",
    answer:
      "Absolutely. To secure a bridge loan, you must provide collateral, typically real estate or land.",
  },
  {
    question: "Can I settle my bridge loan ahead of schedule without incurring extra charges?",
    answer:
      "Certainly! At Alto Capital, we don’t impose any penalties for settling your loan ahead of its due date.",
  },
  {
    question: "Can I consider refinancing my bridge loan?",
    answer:
      "Indeed, in specific situations, you can refinance your bridge loan either with a similar product or with a more extended financial solution.",
  },
  {
    question: "What if the asset I intend to offload (e.g., my residence) is sold after the bridge loan's due date?",
    answer:
      "At Alto Capital, we recommend reaching out to us a month before your loan’s expiration. We’ll guide you through the best alternatives, which might involve prolonging your current loan or opting for a different financing solution.",
  },
]

export default function FaqBridgeLoanSection() {
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
