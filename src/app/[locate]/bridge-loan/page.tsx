import BridgeLoanSection from "@/components/content/BridgeLoanSection";
import FaqBridgeLoanSection from "@/components/faq/FaqBridgeLoanSection";
import Financing from "@/components/common/Financing";

async function fetchMessages(locale: string) {
    const response = await import(`../../../../messages/${locale}.json`);
    return response.default;
  }

export default async function BridgeLoan({ params }) {
    const resolvedParams = await params;
    const messages = await fetchMessages(resolvedParams.locate);

    return (
        <div>
            <BridgeLoanSection messages={messages}></BridgeLoanSection>
            <FaqBridgeLoanSection messages={messages}></FaqBridgeLoanSection>
            <Financing messages={messages}></Financing>
        </div>
    )
}
