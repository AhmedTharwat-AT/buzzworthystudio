import KeywordsUSPS from "@/components/KeywordsUSPS";
import ParrallexContext from "@/components/ParrallexContext";
import HeroSection from "@/sections/home/HeroSection";
import IntroSection from "@/sections/home/IntroSection";

function home() {
  return (
    <ParrallexContext className="w-screen relative ml-[-10px] mt-[-10px] ">
      <KeywordsUSPS />

      <HeroSection />

      <IntroSection />
    </ParrallexContext>
  );
}

export default home;
