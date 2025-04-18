'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import logo from '../../../public/logo-real-estate.jpeg'


export default function Header({header}: any) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()

  const loanTypes = [
      { name: 'Flip loans', href: '/fix-flip' },
      { name: 'Bridge loan', href: '/bridge-loan' },
      { name: 'Ground Up Construction Loans', href: '/ground-up-construction' },
      { name: 'DSCR Loans', href: '/dscr' },
      { name: 'DSCR LOANS (FOREIGN NATIONAL)', href: '/dscr-foreign' },
  ]

  const navigation = [
    { name: header['about_us'], href: '/about-us' },
    { name: header['services'], href: '/services' },
    { name: header['loans_programs'], dropdown: true, items: loanTypes },
    { name: header['contact_us'], href: '/contact-us' },
  ]

  const handleLanguageChange = (newLocale: string) => {
    // Remove the current locale from the pathname
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, '')
    router.push(`/${newLocale}${pathnameWithoutLocale}`)
  }

  return (
    <header className="bg-white fixed top-0 w-full z-50 shadow-md">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <Image
            alt="logo"
            src={logo}
            className="h-12 w-auto"
          />
        </Link>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              {item.href ? (
                <Link href={item.href} className="text-sm/6 font-semibold text-gray-900 uppercase transition-colors duration-200 hover:text-[#FA7F28]">
                  {item.name}
                </Link>
              ) : (
                <span className="text-sm/6 font-semibold text-gray-900 uppercase transition-colors duration-200 hover:text-[#FA7F28] cursor-pointer">
                  {item.name}
                </span>
              )}
              {item.dropdown && (
                <div className="absolute hidden group-hover:block w-64 pt-4 left-1/2 -translate-x-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="py-1">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="uppercase block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#FA7F28] transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
              className="text-sm/6 font-semibold text-gray-900 uppercase transition-colors duration-200 hover:text-[#FA7F28]"
            >
              🌐 {/* Language icon */}
            </button>
            {languageDropdownOpen && (
              <div className="absolute w-16 pt-2 left-1/2 -translate-x-1/2">
                <div className="bg-white overflow-hidden">
                  <div className="py-1">
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className={`block px-4 py-2 text-sm text-gray-700 hover:text-[#FA7F28] ${locale === 'en' ? 'text-[#FA7F28]' : 'text-gray-700'}`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => handleLanguageChange('vi')}
                      className={`block px-4 py-2 text-sm text-gray-700 hover:text-[#FA7F28] ${locale === 'vi' ? 'text-[#FA7F28]' : 'text-gray-700'}`}
                    >
                      VI
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
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
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt="logo"
                src={logo}
                className="h-8 w-auto"
              />
            </Link>
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
                  <div key={item.name}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900">
                        {item.name}
                      </span>
                    )}
                    {item.dropdown && (
                      <div className="pl-4">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Add Language Switcher to mobile menu */}
          <div className="mt-6 flex justify-center gap-2">
            <button
              onClick={() => handleLanguageChange('en')}
              className={`px-4 py-2 rounded ${locale === 'en' ? 'bg-[#FA7F28] text-white' : 'text-gray-700'}`}
            >
              English
            </button>
            <button
              onClick={() => handleLanguageChange('vi')}
              className={`px-4 py-2 rounded ${locale === 'vi' ? 'bg-[#FA7F28] text-white' : 'text-gray-700'}`}
            >
              Tiếng Việt
            </button>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
