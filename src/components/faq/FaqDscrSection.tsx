import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

export default function FaqDscrSection({ messages }: any) {
  const faqs = messages['dscr']['faq'];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="flex items-center gap-4 text-2xl font-semibold tracking-tight text-[#FA7F29] sm:text-2xl">
            <div className="h-[2px] w-8 bg-[#c99909]"></div>
            FAQ
          </h2>
          <dl className="mt-16 grid grid-cols-1 gap-x-8 lg:grid-cols-2">
            {faqs.map((faq: any) => (
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
