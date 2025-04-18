'use client'

import FaqFixAndFlipSection from "@/components/faq/FaqFixAndFlipSection";
import Financing from "@/components/common/Financing";
import FixAndFlipSection from "@/components/content/FixAndFlipSection";
import { use, useState, useEffect } from 'react';

async function fetchMessages(locale: string) {
    const response = await import(`../../../../messages/${locale}.json`);
    return response.default;
}

export default function FixFlip({ params }: { params: Promise<{ locate: string }> }) {
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
            <FixAndFlipSection messages={messages}></FixAndFlipSection>
            <FaqFixAndFlipSection messages={messages}></FaqFixAndFlipSection>
            <Financing messages={messages}></Financing>
        </div>
    );
}
