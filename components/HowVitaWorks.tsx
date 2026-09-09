"use client";

const STEPS = [
  {
    number: "01",
    title: "Tell us your goals",
    description:
      "Trusted by travelers looking for more than ordinary vacations.",
    icon: "/vita-travel-assets/697b4ca99831f5d3ba3e38ac_icon-1.svg",
  },
  {
    number: "02",
    title: "Get curated matches",
    description:
      "We recommend retreats and stays that fit.",
    icon: "/vita-travel-assets/697b4caa7fe5ce94a391888e_icon-4.svg",
  },
  {
    number: "03",
    title: "Customize your package",
    description:
      "Add transfers, spa, and extras in one checkout.",
    icon: "/vita-travel-assets/697b4caacaa12fec64081c6c_icon-2.svg",
  },
  {
    number: "04",
    title: "Travel & track progress",
    description:
      "Use VITA Journal to reflect and rebook.",
    icon: "/vita-travel-assets/697b4caae3cc55404d552d02_icon-3.svg",
  },
];

export default function HowVitaWorks() {
  return (
    <section
      id="how-vita-works"
      className="relative w-full overflow-hidden bg-[#091b20] text-white scroll-mt-20"
    >
      <div
        className="
          relative
          z-10
          px-5
          pb-16
          pt-12
          sm:px-8
          sm:pb-28
          sm:pt-20
          md:px-10
          lg:px-10
          lg:pb-28
          lg:pt-24
        "
      >
        {/* Header */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-[45%_55%] lg:grid-cols-[42%_58%] items-baseline">
          <h2
            className="
              text-[2.25rem]
              sm:text-[3rem]
              md:text-[clamp(2.5rem,5.5vw,5.5rem)]
              font-semibold
              leading-[1.0]
              tracking-[-0.05em]
            "
          >
            How Vita Works
          </h2>

          <p
            className="
              max-w-[390px]
              self-baseline
              justify-self-start
              text-[0.9375rem]
              sm:text-[1rem]
              md:text-[clamp(1rem,1.35vw,1.25rem)]
              font-normal
              sm:font-medium
              leading-[1.4]
              tracking-[-0.015em]
              text-white/60
              md:ml-4
              lg:ml-8
            "
          >
            Browse certified experts with verified
            <br className="hidden sm:block" />
            credentials and guest testimonials.
          </p>
        </div>

        {/* Steps — 2 columns on mobile, 4 columns on desktop */}
        <div
          className="
            mt-10
            sm:mt-14
            grid
            grid-cols-2
            gap-x-4
            gap-y-10
            sm:gap-x-8
            sm:gap-y-12
            lg:mt-20
            lg:grid-cols-4
            lg:gap-8
          "
        >
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="flex min-h-[200px] sm:min-h-[240px] lg:min-h-[260px] flex-col justify-between"
            >
              {/* Icon + number */}
              <div className="flex items-start">
                <img
                  src={step.icon}
                  alt=""
                  className="h-10 w-10 sm:h-12 sm:w-12 lg:h-[55px] lg:w-[55px] object-contain"
                />

                <span className="ml-2.5 sm:ml-3 mt-0.5 sm:mt-1 text-[11px] sm:text-[12px] font-medium text-white/50">
                  {step.number}
                </span>
              </div>

              {/* Text */}
              <div className="mt-8 sm:mt-12 lg:mt-16">
                <h3 className="text-[0.9375rem] sm:text-[1rem] font-semibold leading-[1.2] sm:leading-[1.15] tracking-[-0.025em]">
                  {step.title}
                </h3>

                <p className="mt-2.5 sm:mt-4 lg:mt-5 max-w-[250px] text-[0.8125rem] sm:text-[0.9375rem] lg:text-[1rem] font-normal sm:font-medium leading-[1.35] sm:leading-[1.2] tracking-[-0.015em] sm:tracking-[-0.02em] text-white/50">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}