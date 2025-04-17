import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Do I need renovation or construction experience for a 'Fix and Flip' loan?",
    answer:
      "Yes, it’s vital to have proven experience with a minimum of three projects.",
  },
  {
    question: "Can I apply for a 'Fix and Flip' loan for commercial properties, or is it exclusive to residential ones?",
    answer:
      "At Sapience Capital, “Fix and Flip” loans are exclusively available for residential properties.",
  },
  {
    question: "What happens if I cannot sell the property after renovation or wish to retain it?",
    answer:
      "Suppose you face challenges in securing a quick sale or decide to retain the property. In that case, you can transition to a DSCR loan, a long-term financing solution with more favorable terms and extended durations.",
  },
  {
    question: "How long does a typical 'Fix and Flip' project last?",
    answer:
      "The duration varies based on the property’s condition and the extent of required renovations. However, the goal is to sell the refurbished property as swiftly as possible, typically within 6 months to a year.",
  },
  {
    question: "How do you manage disbursements during the various construction stages of a 'Fix and Flip' loan?",
    answer:
      "Disbursements are made after the completion of the work. An assigned inspector will evaluate the property, and upon their approval, the agreed-upon amount will be disbursed.",
  },
  {
    question: "Are there any penalties for early payments or settling the 'Fix and Flip' loan ahead of schedule?",
    answer:
      "No. At Sapience Capital, we don’t levy any penalties for early payments or for settling the loan before its due date.",
  },
]

export default function FaqMultifamilyProjectSection() {
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
