import Image from 'next/image';
import logo from '../../../public/logo-real-estate.png'
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  const navigation = {
    solutions: [
      { name: "2102 Business Center Drive, Irvine, CA 92612", type: 'address', href: "#" },
      { name: "info@sapiencecapital.us", type: 'email', href: "#" },
      { name: "714-462-7882", type: 'phone', href: "#" },
    ],
    legal: [
      { name: t("about_us"), href: "/about-us" },
      { name: t("contact_us"), href: "/contact-us" },
      { name: t("apply_now"), href: "/apply-now" },
      { name: t("privacy_policy"), href: "/privacy-policy" },
      { name: t("access_portal"), href: "/access-portal" },
    ],
  };

  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <a href="/">
              <Image
                alt="Company name"
                src={logo}
                className="h-32 w-32 mb-8 object-contain"
              />
            </a>
            <h3 className="text-sm/4 font-semibold text-white mb-6 uppercase">
              {t('address')}
            </h3>
            <ul role="list" className="space-y-4">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <a
                    href={
                      item.type === 'address'
                        ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name)}`
                        : item.type === 'email'
                        ? `mailto:${item.name}`
                        : item.type === 'phone'
                        ? `tel:${item.name.replace(/[^\d+]/g, '')}`
                        : item.href
                    }
                    className="text-sm/6 text-white hover:text-gray-500"
                    target={item.type === 'address' ? '_blank' : undefined}
                    rel={item.type === 'address' ? 'noopener noreferrer' : undefined}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-16">
            <h3 className="text-sm/4 font-semibold text-white mb-6 uppercase">{t('link')}</h3>
            <ul role="list" className="space-y-4">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm/6 text-white hover:text-gray-500 underline decoration-gray-600 underline-offset-4"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-400 pt-8">
          <p className="text-center text-sm text-white">
            ALL RIGHTS RESERVED. © Sapience Capital 2025. Irvine, CA. | DESIGNED BY SAPIENCE
          </p>
        </div>
      </div>
    </footer>
  );
}
