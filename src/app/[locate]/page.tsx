'use client'

import { useEffect, useState } from 'react';
import AboutSection from "@/components/AboutSection";
import ApplyNowSection from "@/components/ApplyNowSection";
import Financing from "@/components/common/Financing";
import Hero from "@/components/Hero";
import LoanProgramsSection from "@/components/LoanProgramsSection";
import Stats from "@/components/Stats";
import { use } from 'react';

export default function Home({ params }: { params: Promise<{ locate: string }> }) {
  const resolvedParams = use(params);
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    async function fetchMessages(locale: string) {
      const response = await import(`../../../messages/${locale}.json`);
      setMessages(response.default);
    }

    fetchMessages(resolvedParams.locate);
  }, [resolvedParams.locate]);

  if (!messages) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Hero messages={messages}></Hero>
      <AboutSection messages={messages}></AboutSection>
      <ApplyNowSection messages={messages}></ApplyNowSection>
      <LoanProgramsSection messages={messages}></LoanProgramsSection>
      <Stats messages={messages}></Stats>
      <Financing messages={messages}></Financing>
    </div>
  );
}
