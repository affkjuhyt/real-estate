import Financing from "@/components/common/Financing";
import DscrSection from "@/components/content/DscrSection";
import FaqDscrSection from "@/components/faq/FaqDscrSection";

async function fetchMessages(locale: string) {
    const response = await import(`../../../../messages/${locale}.json`);
    return response.default;
}

export default async function Dscr({ params}) {
    const resolvedParams = await params;
    const messages = await fetchMessages(resolvedParams.locate);

    return (
        <div>
            <DscrSection messages={messages}></DscrSection>
            <FaqDscrSection messages={messages}></FaqDscrSection>
            <Financing messages={messages}></Financing>
        </div>
    )
}