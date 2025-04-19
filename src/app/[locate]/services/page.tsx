import FintechServiceSection from "@/components/FintechServiceSection";
import RealEstateSection from "@/components/RealEstateSection";
import InvestmentStrategySection from "@/components/InvestmentStrategySection";

export default function Service() {
    return (
        <div>
            <RealEstateSection></RealEstateSection>
            <InvestmentStrategySection></InvestmentStrategySection>
            <FintechServiceSection></FintechServiceSection>
        </div>
    )
}
