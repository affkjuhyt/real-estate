'use client'

import Financing from "@/components/common/Financing";
import GroupUpConstructionSection from "@/components/content/GroupUpConstructionSection";
import FaqGroupUpConstructionSection from "@/components/faq/FaqGroupUpConstructionSection";
import { use, useState, useEffect } from 'react';

async function fetchMessages(locale: string) {
    const response = await import(`../../../../messages/${locale}.json`);
    return response.default;
}

export default function GroundUpConstruction({ params }: { params: Promise<{ locate: string }> }) {
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
            <GroupUpConstructionSection messages={messages}></GroupUpConstructionSection>
            <FaqGroupUpConstructionSection messages={messages}></FaqGroupUpConstructionSection>
            <Financing messages={messages}></Financing>
        </div>
    );
}
