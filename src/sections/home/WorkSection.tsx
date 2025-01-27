import AnimatedSubTitle from "@/components/AnimatedSubTitle";
import AnimatedWordsByLetter from "@/components/AnimatedWordsByLetter";
import SectionDividerLine from "@/components/SectionDividerLine";
import WorkOne from "@/assets/images/home/work-1.jpeg";
import workTwo from "@/assets/images/home/work-2.jpg";
import workThree from "@/assets/images/home/work-3.jpeg";
import workFour from "@/assets/images/home/work-4.jpeg";
import ParrallexComp from "@/components/ParrallexComp";
import WorkImageWithTitle from "@/components/WorkImageWithTitle";

function WorkSection() {
  return (
    <section className="mt-[20vh] pb-10 md:mt-[30vh]">
      <div className="px-[4.1666vw] md:px-[12.4998vw]">
        <SectionDividerLine />

        <div className="flex flex-wrap md:flex-nowrap">
          <div className="w-[91.6652vw] md:w-[29.1662vw]">
            <AnimatedSubTitle>projects</AnimatedSubTitle>

            <AnimatedWordsByLetter
              words={["recent", "work."]}
              className="mt-[5vh] font-tt_tunnels text-[clamp(24px,11.2vw,180px)] font-bold uppercase leading-[0.85] [&_div:last-child_span:last-child]:text-secondary"
            />

            <ParrallexComp
              className="mt-[5vh] w-[91.6652vw] md:mt-[10vh] md:w-[29.1662vw]"
              min={-30}
              max={30}
              scrollDiff={1000}
            >
              <WorkImageWithTitle
                image={WorkOne}
                title="sling shot intergalactic"
              />
            </ParrallexComp>
          </div>

          <WorkImageWithTitle
            image={workTwo}
            title="0 positive films"
            className="ml-0 w-[91.6652vw] max-md:mt-[5vh] md:ml-[8.3332vw] md:w-[37.4994vw]"
          />
        </div>

        <div className="mt-[5vh] flex flex-wrap md:mt-[15vh] md:flex-nowrap">
          <ParrallexComp
            className="w-[91.6652vw] md:ml-[8.3332vw] md:w-[33.3328vw]"
            min={-40}
            max={40}
            scrollDiff={1000}
          >
            <WorkImageWithTitle image={workThree} title="Valaclava" />
          </ParrallexComp>

          <ParrallexComp
            className="mt-[5vh] w-[91.6652vw] md:ml-[8.3332vw] md:mt-[30vh] md:w-[24.9996vw]"
            min={60}
            max={-60}
            scrollDiff={1000}
          >
            <WorkImageWithTitle image={workFour} title="hoboken yogi" />
          </ParrallexComp>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
