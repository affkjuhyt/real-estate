'use client'

import AboutSection from "@/components/AboutSection";
import ApplyNowSection from "@/components/ApplyNowSection";
import Financing from "@/components/common/Financing";
import Hero from "@/components/Hero";
import LoanProgramsSection from "@/components/LoanProgramsSection";
import Stats from "@/components/Stats";

async function fetchMessages(locale: string) {
  const response = await import(`../../../messages/${locale}.json`);
  return response.default;
}

export default async function Home({ params }) {
  const resolvedParams = await params;
  const messages = await fetchMessages(resolvedParams.locate);

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
