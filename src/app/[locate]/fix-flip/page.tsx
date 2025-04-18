import FaqFixAndFlipSection from "@/components/faq/FaqFixAndFlipSection";
import Financing from "@/components/common/Financing";
import FixAndFlipSection from "@/components/content/FixAndFlipSection";

async function fetchMessages(locale: string) {
    const response = await import(`../../../../messages/${locale}.json`);
    return response.default;
}

export default async function FlixFlip({ params }) {
    const resolvedParams = await params;
    const messages = await fetchMessages(resolvedParams.locate);

    return (
        <div>
            <FixAndFlipSection messages={messages}></FixAndFlipSection>
            <FaqFixAndFlipSection messages={messages}></FaqFixAndFlipSection>
            <Financing messages={messages}></Financing>
        </div>
    )
}