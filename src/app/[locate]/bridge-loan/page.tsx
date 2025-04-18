'use client'

import BridgeLoanSection from "@/components/content/BridgeLoanSection";
import FaqBridgeLoanSection from "@/components/faq/FaqBridgeLoanSection";
import Financing from "@/components/common/Financing";
import { use, useEffect, useState } from 'react';

async function fetchMessages(locale: string) {
  const response = await import(`../../../../messages/${locale}.json`);
  return response.default;
}

export default function BridgeLoan({ params }: { params: Promise<{ locate: string }> }) {
  const resolvedParams = use(params);
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    async function fetchMessages(locale: string) {
      const response = await import(`../../../../messages/${locale}.json`);
      setMessages(response.default);
    }

    fetchMessages(resolvedParams.locate);
  }, [resolvedParams.locate]);

  if (!messages) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BridgeLoanSection messages={messages}></BridgeLoanSection>
      <FaqBridgeLoanSection messages={messages}></FaqBridgeLoanSection>
      <Financing messages={messages}></Financing>
    </div>
  );
}
