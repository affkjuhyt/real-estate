import AboutUsSection from "@/components/AboutUsSection";
import ContactUsSection from "@/components/ContactUsSection";
import Financing from "@/components/Financing";
import MissionAndVisionSection from "@/components/MissionAndVisionSection";
import OurTeamSection from "@/components/OurTeamSection";

export default function AboutUs() {
    return (
        <div>
            <AboutUsSection></AboutUsSection>
            <MissionAndVisionSection></MissionAndVisionSection>
            <ContactUsSection></ContactUsSection>
            <OurTeamSection></OurTeamSection>
            <Financing></Financing>
        </div>
    )
}