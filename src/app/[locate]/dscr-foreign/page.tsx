'use client'

import Financing from "@/components/common/Financing";
import DscrForeignSection from "@/components/content/DscrForeignSection";
import FaqDscrForeignSection from "@/components/faq/FaqDscrForeignSection";
import { use, useEffect, useState } from 'react';

async function fetchMessages(locale: string) {
    const response = await import(`../../../../messages/${locale}.json`);
    return response.default;
}

export default function DscrForeign({ params }: { params: Promise<{ locate: string }> }) {
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
            <DscrForeignSection messages={messages}></DscrForeignSection>
            <FaqDscrForeignSection messages={messages}></FaqDscrForeignSection>
            <Financing messages={messages}></Financing>
        </div>
    );
}
