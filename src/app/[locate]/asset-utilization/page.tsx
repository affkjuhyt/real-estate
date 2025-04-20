'use client'

import AssetUtilizationSection from "@/components/AssetUtilizationSection";
import { use, useEffect, useState } from "react";

export default function AssetUtilization({ params }: { params: Promise<{ locate: string }> }) {
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
        <AssetUtilizationSection messages={messages}></AssetUtilizationSection>
    </div>
  )
}