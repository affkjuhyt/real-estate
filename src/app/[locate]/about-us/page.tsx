'use client'

import AboutUsSection from "@/components/AboutUsSection";
import ContactUsSection from "@/components/ContactUsSection";
import Financing from "@/components/common/Financing";
import MissionAndVisionSection from "@/components/MissionAndVisionSection";
import OurTeamSection from "@/components/OurTeamSection";
import { use, useEffect, useState } from 'react';

async function fetchMessages(locale: string) {
    const response = await import(`../../../../messages/${locale}.json`);
    return response.default;
}

export default function AboutUs({ params }: { params: Promise<{ locate: string }> }) {
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
        <AboutUsSection messages={messages}></AboutUsSection>
        <MissionAndVisionSection messages={messages}></MissionAndVisionSection>
        <ContactUsSection messages={messages}></ContactUsSection>
        <OurTeamSection messages={messages}></OurTeamSection>
        <Financing messages={messages}></Financing>
      </div>
    );
}
