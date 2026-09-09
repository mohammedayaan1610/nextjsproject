"use client";

const STEPS = [
  {
    number: "01",
    title: "Choose Retreat",
  },
  {
    number: "02",
    title: "Match Boutique Stay",
  },
  {
    number: "03",
    title: "Add Transfers & Extras",
  },
  {
    number: "04",
    title: "Secure Payment",
  },
];

export default function CombineRetreat() {
  return (
    <section
      id="combine-retreat"
      className="relative min-h-[600px] sm:min-h-[750px] lg:min-h-[900px] w-full overflow-hidden bg-[#091b20] text-white scroll-mt-20"
    >
      {/* Background Map Artwork */}
      <img
        src="/vita-travel-assets/697b4b8b3132f745287378ec_bg-illustration.png"
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      {/* Illustration Artwork - covers full section on mobile, bottom-anchored on desktop */}
      <img
        src="/vita-travel-assets/697b1f5e0aeba6bb251058df_illustration.webp"
        alt=""
        className="absolute inset-0 z-[1] h-full w-full object-cover object-center md:h-auto md:w-full md:min-w-[900px] md:max-w-none md:inset-auto md:bottom-0 md:left-1/2 md:-translate-x-1/2"
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-[2] bg-[#091b20]/25" />

      {/* Content */}
      <div className="relative z-[3] flex min-h-[600px] sm:min-h-[750px] lg:min-h-[900px] flex-col justify-between">
        {/* Main heading */}
        <div className="px-5 pt-16 sm:px-8 sm:pt-24 md:px-10 lg:px-12 lg:pt-28 xl:pt-32">
          <h2
            className="
              text-[clamp(2.5rem,6vw,5.25rem)]
              font-semibold
              leading-[0.9]
              tracking-[-0.065em]
            "
          >
            Combine Retreat
          </h2>

          <div className="mt-8 lg:mt-6 flex flex-col gap-0.5 lg:gap-1">
            <div className="flex items-center gap-2 text-[clamp(2.2rem,3.2vw,3.5rem)] font-semibold leading-[0.95] tracking-[-0.06em]">
              <span className="text-white/60">+</span>
              <span>Stay</span>
            </div>

            <div className="flex items-center gap-2 text-[clamp(2.2rem,3.2vw,3.5rem)] font-semibold leading-[0.95] tracking-[-0.06em]">
              <span className="text-white/60">+</span>
              <span>Transfers</span>
            </div>

            <div className="flex items-center gap-2 text-[clamp(2.2rem,3.2vw,3.5rem)] font-semibold leading-[0.95] tracking-[-0.06em]">
              <span className="text-white/60">+</span>
              <span>Extras</span>
            </div>
          </div>
        </div>

        {/* Bottom steps */}
        <div className="border-t border-white/20">
          {/* Description */}
          <div className="px-5 py-6 sm:px-8 md:px-10 lg:px-12 lg:py-10 border-b border-white/15 lg:border-b-0">
            <p className="max-w-[390px] text-[clamp(0.9rem,1.5vw,1.45rem)] font-semibold leading-[1.2] tracking-[-0.035em]">
              Combine Retreat into one seamless checkout. Instant
              confirmations where available, or concierge support for
              bespoke itineraries.
            </p>
          </div>

          {/* Steps — 2-col on mobile, 4-col on lg */}
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                className={`
                  px-5 py-5 sm:py-6
                  md:px-8
                  lg:min-h-[180px]
                  lg:px-10
                  lg:py-10
                  border-t border-white/15
                  ${i % 2 === 1 ? "border-l border-white/15" : ""}
                  ${i >= 2 ? "" : ""}
                  lg:border-t-0
                  ${i > 0 ? "lg:border-l lg:border-white/15" : ""}
                `}
              >
                <div className="text-[clamp(2rem,4vw,4.5rem)] font-semibold leading-none tracking-[-0.06em]">
                  {step.number}
                </div>

                <div className="mt-2 text-xs sm:text-sm font-medium text-white/50">
                  Step
                </div>

                <div className="mt-4 sm:mt-8 text-[clamp(0.85rem,1.4vw,1.3rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
                  {step.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}