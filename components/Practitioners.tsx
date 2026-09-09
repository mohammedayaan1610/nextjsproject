"use client";

import PractitionerCard, {
  PractitionerData,
} from "./ui/cards/PractitionerCard";

const PRACTITIONERS: PractitionerData[] = [
  {
    id: "lauren",
    name: "Lauren Thompson",
    role: "Yoga Couch",
    location: "USA",
    description:
      "I work with yoga as a practical tool for improving mobility, balance, and body awareness. My sessions focus on breath, alignment, and calm strength, without pressure or competition. I support people who want to build a steady practice that fits real life and long-term wellbeing.",
    secondDescription:
      "My approach is grounded, structured, and accessible for different experience levels.",
    countries: "14",
    retreats: "18",
    image:
      "/vita-travel-assets/69897f6cb4387b1312d7ae14_9.webp",
  },

  {
    id: "michael",
    name: "Michael Wilson",
    role: "Meditation Coach",
    location: "Europe",
    description:
      "I work with meditation as a practical tool for emotional stability, focus, and self-discipline. My approach is structured and accessible, helping people build a consistent practice that fits into real life.",
    secondDescription:
      "I support participants in developing awareness and resilience through techniques that can be applied both during retreats and in everyday situations.",
    countries: "19",
    retreats: "56",
    image:
      "/vita-travel-assets/69897f6ccb670b10285a47bf_12.webp",
  },

    {
    id: "isabelle",
    name: "Isabelle Martin",
    role: "Stress-Relief Guide",
    location: "Europe",
    description:
        "I work with stress reduction through structured breathing practices, gentle movement, and nervous system regulation. My sessions focus on restoring balance, improving emotional stability, and reducing physical tension. I support people who experience long-term stress and want practical, repeatable tools they can use in everyday life. My approach is calm, grounded, and focused on sustainable recovery rather than quick fixes.",
    secondDescription: "",
    countries: "14",
    retreats: "18",
    image:
      "/vita-travel-assets/69897f6c6400b1ebc3956333_43c66f9116f860d81fe61e822e465e88_10.webp",
  },

{
  id: "sarah",
  name: "Sarah Johnson",
  role: "Nutrition Specialist",
  location: "Europe",
  description:
    "I support retreat participants with nutrition that is simple, nourishing, and adapted to real needs. My work focuses on whole foods, energy balance, and practical eating habits that support focus and recovery. I help people understand how nutrition affects their physical and mental state, without strict rules or unnecessary restrictions, and with respect for individual lifestyles.",
  secondDescription: "",
  countries: "17",
  retreats: "89",
    image:
      "/vita-travel-assets/69897f6cc589808c226f0cd7_ea8e8b2e1274331d29db4f187ea3aebb_1.webp ",
  },
];

export default function Practitioners() {
  return (
    <section
      id="coaches"
      className="w-full bg-[#091b20] text-white overflow-hidden scroll-mt-20"
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2">

        {/* INTRO PANEL — on mobile it renders first (top), on desktop it sits on the right (order-2) */}
        <div className="order-1 lg:order-2 flex flex-col justify-between px-5 pt-12 pb-8 sm:px-8 sm:py-12 lg:px-14 lg:py-14 xl:px-16 xl:py-16 lg:min-h-[780px] xl:min-h-[840px] border-b lg:border-b-0 border-white/10">

          <div>
            <div className="mb-4 sm:mb-7 flex items-center gap-2 lg:pt-1">
              <span className="text-xl text-white/40">✦</span>
              <span className="text-sm font-medium">Practitioners &amp; Coaches</span>
            </div>

            <h2 className="max-w-[650px] text-[clamp(2.25rem,4.5vw,5rem)] font-semibold leading-[0.95] sm:leading-[0.92] tracking-[-0.055em] sm:tracking-[-0.065em]">
              The 200+ faces
              <br />
              behind Vita Travel
            </h2>
          </div>

          <div className="mt-8 sm:mt-10 lg:mt-0 flex flex-col sm:grid sm:grid-cols-2 gap-6 sm:gap-10">

            {/* Block 1 */}
            <div>
              <div className="mb-3 sm:mb-8 text-[28px] sm:text-[32px] font-light text-white/60 sm:text-white">+</div>
              <h3 className="text-[1.05rem] sm:text-[1.1rem] font-semibold leading-[1.25]">Your Retreat, Our Experts</h3>
              <p className="mt-2.5 sm:mt-5 max-w-[300px] text-[0.875rem] sm:text-base leading-[1.35] sm:leading-[1.2] text-white/50">
                Each coach is carefully selected to deliver
                the highest quality guidance in yoga,
                meditation, fitness, and holistic well-being.
              </p>
            </div>

            {/* Block 2 */}
            <div className="pt-2 sm:pt-0">
              <div className="mb-3 sm:mb-8 text-[28px] sm:text-[32px] font-light text-white/60 sm:text-white">+</div>
              <h3 className="text-[1.05rem] sm:text-[1.1rem] font-semibold leading-[1.3] sm:leading-[1.1]">
                At Vita Travel we&apos;ve brought together a
                global network of 200+ certified coaches,
                practitioners, and wellness experts.
              </h3>
            </div>

          </div>
        </div>

        {/* PRACTITIONERS CARDS — on mobile it renders second (bottom) as a horizontal swipe row, on desktop on left (order-1) as 2x2 grid */}
        <div className="order-2 lg:order-1 w-full overflow-hidden pt-4 pb-12 sm:py-6 lg:py-0">
          <div className="flex lg:grid lg:grid-cols-2 overflow-x-auto lg:overflow-visible no-scrollbar px-5 sm:px-8 lg:px-0 gap-4 lg:gap-0 divide-y-0 lg:divide-white/10 lg:border-r lg:border-white/10">
            {PRACTITIONERS.map((practitioner) => (
              <div
                key={practitioner.id}
                className="shrink-0 w-[78vw] sm:w-[65vw] lg:w-auto border border-white/10 lg:border-0"
              >
                <PractitionerCard
                  practitioner={practitioner}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}