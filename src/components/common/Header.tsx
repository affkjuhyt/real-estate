'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const loanTypes = [
    { name: ' Flip loans', href: '/fix-flip' },
    { name: 'Bridge loan', href: '/bridge-loan' },
    { name: 'Ground Up Construction Loans', href: '/ground-up-construction' },
    { name: 'DSCR Loans', href: '/dscr' },
    { name: 'Multifamily Project Financing', href: '/multifamily-project-financing' },
]

const navigation = [
  { name: 'About Us', href: '/about-us' },
  { name: 'Type Of Loans', dropdown: true, items: loanTypes },
  { name: 'Contact Us', href: '/contact-us' },
]


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white fixed top-0 w-full z-50 shadow-md">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img
            alt=""
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="h-8 w-auto"
          />
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <a href={item.href} className="text-sm/6 font-semibold text-gray-900 uppercase transition-colors duration-200 hover:text-[#FA7F28]">
                {item.name}
              </a>
              {item.dropdown && (
                <div className="absolute hidden group-hover:block w-64 pt-4 left-1/2 -translate-x-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="py-1">
                      {item.items?.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="uppercase block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#FA7F28] transition-colors duration-200"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>

          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <>
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                    {item.dropdown && (
                      <div className="pl-4">
                        {item.items?.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
