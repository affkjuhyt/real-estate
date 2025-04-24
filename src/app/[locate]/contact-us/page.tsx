'use client'

import ContactHeroSection from "@/components/ContactHeroSection";
import InquireAboutSection from "@/components/InquireAboutSection";
import { use, useEffect, useState } from "react";

export default function ContactUs({ params }: { params: Promise<{ locate: string }> }) {
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
            <ContactHeroSection messages={messages}></ContactHeroSection>
            <InquireAboutSection messages={messages}></InquireAboutSection>
        </div>
    )
}
