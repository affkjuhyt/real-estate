import Financing from "@/components/common/Financing";
import GroupUpConstructionSection from "@/components/content/GroupUpConstructionSection";
import FaqGroupUpConstructionSection from "@/components/faq/FaqGroupUpConstructionSection";

export default function GroundUpConstruction() {
    return (
        <div>
            <GroupUpConstructionSection></GroupUpConstructionSection>
            <FaqGroupUpConstructionSection></FaqGroupUpConstructionSection>
            <Financing></Financing>
        </div>
    )
}
