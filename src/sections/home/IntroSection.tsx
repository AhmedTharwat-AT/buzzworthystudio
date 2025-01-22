import AnimatedBorderLink from "@/components/AnimatedBorderLink";
import AnimationWordByWord from "@/components/AnimationWordByWord";
import Dot from "@/components/Dot";

function IntroSection() {
  return (
    <section className="relative max-md:flex-wrap flex mt-[10vh] pt-0 md:pt-[8.3332vw] px-[4.16vw] pb-[4.16vw] md:px-[12.49vw] font-sans">
      <div className="w-[8.3332vw]">
        <h2 className="font-tt_lakes text-xs font-normal uppercase ps-6  relative">
          <Dot className="mx-0 !absolute left-0 top-0 size-[1.2em]" />
          About
        </h2>
      </div>

      <div className="ms-0 md:ms-[4.1666vw] w-full mt-[10vh] md:mt-0 md:w-[16.6664vw]">
        <p className="mb-[10vh] md:mb-[15vh] leading-[1.25]  uppercase">
          <AnimationWordByWord
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

      <div className="ms-0 md:ms-[24.9996vw] w-[91.6652vw] lg:ms-[4.1666vw] lg:w-[41.666vw] md:w-[49.9992vw]">
        <p className="mb-[10vh] md:mb-[20vh]  text-[calc(40px+1.4vw)]  uppercase leading-none">
          <AnimationWordByWord
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
            className="px-0 pt-[1em] pb-[0.6em] text-[13px]"
          >
            About us
          </AnimatedBorderLink>
          <AnimatedBorderLink
            href="/"
            className="px-0 pt-[1em] pb-[0.6em] text-[13px]"
          >
            services
          </AnimatedBorderLink>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
