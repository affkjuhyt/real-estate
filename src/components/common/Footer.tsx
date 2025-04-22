import Image from "next/image";
import logo from "../../../public/logo.jpeg";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  const navigation = {
    solutions: [
      {
        name: "2102 Business Center Drive, Irvine, CA 92612",
        type: "address",
        href: "#",
      },
      { name: "info@sapiencecapital.us", type: "email", href: "#" },
      { name: "714-462-7882", type: "phone", href: "#" },
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
            <a className="mb-4 flex items-center gap-2" href="/">
              <Image alt="logo" src={logo} className="h-20 w-auto" />
              <Image
                alt="character"
                src="/character.jpeg"
                width={100}
                height={100}
                className="h-10 w-auto"
              />
            </a>
            <h3 className="text-sm/4 font-semibold text-white mb-6 uppercase">
              {t("address")}
            </h3>
            <ul role="list" className="space-y-4">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <a
                    href={
                      item.type === "address"
                        ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            item.name
                          )}`
                        : item.type === "email"
                        ? `mailto:${item.name}`
                        : item.type === "phone"
                        ? `tel:${item.name.replace(/[^\d+]/g, "")}`
                        : item.href
                    }
                    className="text-sm/6 text-white hover:text-gray-500"
                    target={item.type === "address" ? "_blank" : undefined}
                    rel={
                      item.type === "address"
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-16">
            <h3 className="text-sm/4 font-semibold text-white mb-6 uppercase">
              {t("link")}
            </h3>
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
            ALL RIGHTS RESERVED. © Sapience Capital 2025. Irvine, CA. | DESIGNED
            BY SAPIENCE
          </p>
          <p className="text-center text-sm text-white mt-4">
            Sapience Capital, LLC is powered by BluEleven Capital Corporation
            NMLS No: 1888223. California loans will be made or arranged pursuant
            to CA Department of Real Estate, California Broker of Record DRE #
            02094987. California Department of Financial Protection and
            Innovation “DFPI” Department of Business Oversite 60DBO-139022.
            Interest rates are subject to change without notice. All products
            are subject to credit, income, and approval. Program terms and
            conditions are subject to change without prior notice. Not all
            products are available in all states or for all amounts. Other
            restrictions and limitations may apply. Not intended for
            distribution without written approval. For any Inquiries, please
            contact 714-462-7882.
          </p>
        </div>
      </div>
    </footer>
  );
}
