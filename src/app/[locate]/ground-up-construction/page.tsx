import Financing from "@/components/common/Financing";
import GroupUpConstructionSection from "@/components/content/GroupUpConstructionSection";
import FaqGroupUpConstructionSection from "@/components/faq/FaqGroupUpConstructionSection";

async function fetchMessages(locale: string) {
    const response = await import(`../../../../messages/${locale}.json`);
    return response.default;
}

export default async function GroundUpConstruction({ params }) {
    const resolvedParams = await params;
    const messages = await fetchMessages(resolvedParams.locate);

    return (
        <div>
            <GroupUpConstructionSection messages={messages}></GroupUpConstructionSection>
            <FaqGroupUpConstructionSection messages={messages}></FaqGroupUpConstructionSection>
            <Financing messages={messages}></Financing>
        </div>
    )
}
