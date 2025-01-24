import AnimatedSubTitle from "@/components/AnimatedSubTitle";
import AnimatedWordsByLetter from "@/components/AnimatedWordsByLetter";
import SectionDividerLine from "@/components/SectionDividerLine";
import WorkOne from "@/assets/images/home/work-1.jpeg";
import ParrallexComp from "@/components/ParrallexComp";
import Image from "next/image";

function WorkSection() {
  return (
    <section className="mt-[20vh] pb-10 md:mt-[30vh]">
      <div className="px-[4.1666vw] md:px-[12.4998vw]">
        <SectionDividerLine />

        <div className="flex flex-wrap md:flex-nowrap">
          <div className="h-[1000px] w-[91.6652vw] md:w-[29.1662vw]">
            <AnimatedSubTitle>projects</AnimatedSubTitle>

            <AnimatedWordsByLetter
              words={["recent", "work."]}
              className="mt-[5vh] font-tt_tunnels text-[clamp(24px,11.2vw,180px)] font-bold uppercase leading-[0.85] [&_div:last-child_span:last-child]:text-secondary"
            />

            <ParrallexComp>
              <Image src={WorkOne} alt="" />
            </ParrallexComp>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
