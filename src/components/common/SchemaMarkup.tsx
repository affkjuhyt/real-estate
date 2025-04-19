export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Sapience Capital",
    "description": "Private lending solutions for real estate investors in California",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2102 Business Center Drive",
      "addressLocality": "Irvine",
      "addressRegion": "CA",
      "postalCode": "92612",
      "addressCountry": "US"
    },
    "telephone": "714-462-7882",
    "email": "info@sapiencecapital.us",
    "areaServed": {
      "@type": "State",
      "name": "California"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Loan Programs",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Fix & Flip Loans",
          "description": "Short-term financing for property renovation and resale"
        },
        {
          "@type": "Service",
          "name": "DSCR Loans",
          "description": "Long-term rental property financing based on property cash flow"
        }
        // Add other loan types
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}