import Financing from "@/components/common/Financing";
import DscrForeignSection from "@/components/content/DscrForeignSection";
import FaqDscrForeignSection from "@/components/faq/FaqDscrForeignSection";

async function fetchMessages(locale: string) {
    const response = await import(`../../../../messages/${locale}.json`);
    return response.default;
}

export default async function DscrForeign({ params}) {
    const resolvedParams = await params;
    const messages = await fetchMessages(resolvedParams.locate);

    return (
        <div>
            <DscrForeignSection messages={messages}></DscrForeignSection>
            <FaqDscrForeignSection messages={messages}></FaqDscrForeignSection>
            <Financing messages={messages}></Financing>
        </div>
    )
}