const navigation = {
  solutions: [
    { name: "12000 Biscayne Blvd Suite 400 Miami, FL 33181, United States", href: "#" },
    { name: "info@altocapital.com", href: "#" },
    { name: "+1 (305) 381-0153", href: "#" },
  ],
  legal: [
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Apply Now", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Access Portal", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#D1D1D1]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <img
              alt="Company name"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-12 mb-8"
            />
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
