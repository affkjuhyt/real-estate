import AboutUsSection from "@/components/AboutUsSection";
import ContactUsSection from "@/components/ContactUsSection";
import Financing from "@/components/common/Financing";
import MissionAndVisionSection from "@/components/MissionAndVisionSection";
import OurTeamSection from "@/components/OurTeamSection";

async function fetchMessages(locale: string) {
    const response = await import(`../../../../messages/${locale}.json`);
    return response.default;
}

export default async function AboutUs({ params }) {
    const resolvedParams = await params;
    const messages = await fetchMessages(resolvedParams.locate);

    return (
      <div>
        <AboutUsSection></AboutUsSection>
        <MissionAndVisionSection></MissionAndVisionSection>
        <ContactUsSection></ContactUsSection>
        <OurTeamSection messages={messages}></OurTeamSection>
        <Financing></Financing>
      </div>
    );
}