import KeywordsUSPS from "@/components/KeywordsUSPS";
import ParrallexContent from "@/components/ParrallexContent";
import HeroSection from "@/sections/home/HeroSection";
import IntroSection from "@/sections/home/IntroSection";
import WorkSection from "@/sections/home/WorkSection";

function home() {
  return (
    <ParrallexContent className="relative ml-[-10px] mt-[-10px] w-screen md:pb-[10px]">
      <KeywordsUSPS />

      <HeroSection />

      <IntroSection />

      <WorkSection />
    </ParrallexContent>
  );
}

export default home;
