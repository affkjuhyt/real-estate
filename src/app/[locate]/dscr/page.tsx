'use client'

import Financing from "@/components/common/Financing";
import DscrSection from "@/components/content/DscrSection";
import FaqDscrSection from "@/components/faq/FaqDscrSection";
import { use, useState, useEffect } from 'react';

async function fetchMessages(locale: string) {
    const response = await import(`../../../../messages/${locale}.json`);
    return response.default;
}

export default function Dscr({ params }: { params: Promise<{ locate: string }> }) {
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
            <DscrSection messages={messages}></DscrSection>
            <FaqDscrSection messages={messages}></FaqDscrSection>
            <Financing messages={messages}></Financing>
        </div>
    );
}
