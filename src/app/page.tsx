'use client'

import AboutSection from "@/components/AboutSection";
import ApplyNowSection from "@/components/ApplyNowSection";
import Financing from "@/components/common/Financing";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/Hero";
import LoanProgramsSection from "@/components/LoanProgramsSection";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <AboutSection></AboutSection>
      <ApplyNowSection></ApplyNowSection>
      <LoanProgramsSection></LoanProgramsSection>
      <Stats></Stats>
      <Financing></Financing>
    </div>
  );
}
