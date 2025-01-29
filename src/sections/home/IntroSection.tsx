import AnimatedBorderLink from "@/components/AnimatedBorderLink";
import AnimatedSubTitle from "@/components/AnimatedSubTitle";
import AnimatedWordByWord from "@/components/AnimatedWordByWord";

function IntroSection() {
  return (
    <section className="relative mt-[10vh] flex px-[4.16vw] pb-[4.16vw] pt-0 font-sans max-md:flex-wrap md:px-[12.49vw] md:pt-[8.3332vw]">
      <div className="w-[8.3332vw]">
        <AnimatedSubTitle>About</AnimatedSubTitle>
      </div>

      <div className="ms-0 mt-[10vh] w-full md:ms-[4.1666vw] md:mt-0 md:w-[16.6664vw]">
        <p className="mb-[10vh] uppercase leading-[1.25] md:mb-[15vh]">
          <AnimatedWordByWord
            words={[
              "With a",
              "decade of",
              "experience",
              "under our",
              "belts,",
              "Buzzworthy",
              "has become",
              "a world -",
              "renowned",
              "studio",
            ]}
          />
        </p>
      </div>

      <div className="ms-0 w-[91.6652vw] md:ms-[24.9996vw] md:w-[49.9992vw] lg:ms-[4.1666vw] lg:w-[41.666vw]">
        <p className="mb-[10vh] text-[calc(40px+1.4vw)] uppercase leading-none md:mb-[20vh]">
          <AnimatedWordByWord
            words={[
              "delivering",
              "innovative",
              "design and",
              "development",
              "with,",
              "impactful",
              "digital",
              "marketing",
              "campaigns",
              "that",
              "catapult",
              "brands",
              "forward.",
            ]}
          />
        </p>

        <div className="flex gap-24 font-tt_lakes">
          <AnimatedBorderLink
            href="/"
            className="px-0 pb-[0.6em] pt-[1em] text-[13px]"
          >
            About us
          </AnimatedBorderLink>
          <AnimatedBorderLink
            href="/"
            className="px-0 pb-[0.6em] pt-[1em] text-[13px]"
          >
            services
          </AnimatedBorderLink>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
