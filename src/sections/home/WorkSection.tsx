import AnimatedSubTitle from "@/components/AnimatedSubTitle";
import AnimatedWordsByLetter from "@/components/AnimatedWordsByLetter";
import SectionDividerLine from "@/components/SectionDividerLine";
import WorkOne from "@/assets/images/home/work-1.jpeg";
import workTwo from "@/assets/images/home/work-2.jpg";
import workThree from "@/assets/images/home/work-3.jpeg";
import workFour from "@/assets/images/home/work-4.jpeg";
import ParrallexComp from "@/components/ParrallexComp";
import WorkImageWithTitle from "@/components/WorkImageWithTitle";

const mask = (
  <svg viewBox="0 0 660 660" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="imgMask4">
      <path
        d="M0 0.5C0 0.223858 0.223858 0 0.5 0H659.5C659.776 0 660 0.223858 660 0.5V0.5C660 0.776142 659.829 1 659.553 1C653.058 1 577.308 1 528 1C476.451 1 447.549 1 396 1C344.451 1 315.549 1 264 1C212.451 1 183.549 1 132 1C82.6923 1 6.94176 1 0.447341 1C0.171199 1 0 0.776142 0 0.5V0.5Z"
        fill="black"
      ></path>
    </mask>
    <image
      width="100%"
      height="100%"
      mask="url(#imgMask4)"
      href="https://images.prismic.io/buzzworthy/Zh1nlTjCgu4jz1Oc_thumb-hy-2x.webp?auto=format%2Ccompress&amp;rect=0%2C0%2C1320%2C1320&amp;w=1320&amp;h=1320&amp;q=90&amp;w=660&amp;h=660"
      data-svg-origin="0 0"
      transform="matrix(1,0,0,1,0,-40)"
    ></image>
  </svg>
);

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
