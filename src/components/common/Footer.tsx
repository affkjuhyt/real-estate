import Image from 'next/image';
import logo from '../../../public/logo-real-estate.jpeg'

const navigation = {
  solutions: [
    { name: "12000 Biscayne Blvd Suite 400 Miami, FL 33181, United States", href: "#" },
    { name: "info@altocapital.com", href: "#" },
    { name: "+1 (305) 381-0153", href: "#" },
  ],
  legal: [
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Apply Now", href: "/apply-now" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Access Portal", href: "/access-portal" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#D1D1D1]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <a href="/">
              <Image
                alt="Company name"
                src={logo}
                className="h-8 w-8 mb-8 object-contain"
              />
            </a>
            <h3 className="text-sm/4 font-semibold text-gray-900 mb-6 uppercase">
              Address
            </h3>
            <ul role="list" className="space-y-4">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm/6 text-gray-600 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-16">
            <h3 className="text-sm/4 font-semibold text-gray-900 mb-6 uppercase">Links</h3>
            <ul role="list" className="space-y-4">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm/6 text-gray-600 hover:text-gray-900 underline decoration-gray-600 underline-offset-4"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-400 pt-8">
          <p className="text-center text-sm text-gray-600">
            ALL RIGHTS RESERVED. © Alto Capital 2024. Miami, Florida. | DESIGNED BY M3DIGISMART
          </p>
        </div>
      </div>
    </footer>
  );
}
