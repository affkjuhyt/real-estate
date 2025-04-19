import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { NextIntlClientProvider } from "next-intl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Real Estate Private Lender in California",
  description: "",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locate: string}>; // Change 'locale' to 'locate'
}) {
  const data = await params;
  let locale = data['locate']; // Access 'locate' instead of 'locale'

  const determineLocaleFromLocation = async () => {
    try {
      const response = await fetch('https://ipinfo.io/json?token=90d53581cc79a7');
      const data = await response.json();
      const countryCode = data.country;

      // Return 'vi' for Vietnam, 'en' for other countries
      return countryCode === 'VN' ? 'vi' : 'en';
    } catch (error) {
      console.error('Error determining location:', error);
      return 'en'; // Default to 'en' if there's an error
    }
  };

  // Check IP-based location first
  if (!locale) {
    locale = await determineLocaleFromLocation();
  }

  let messages;
  messages = await import(`../../../messages/${locale}.json`);

  const header = messages['header'];

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextIntlClientProvider locale={locale} messages={null}>
          <Header header={header} />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
