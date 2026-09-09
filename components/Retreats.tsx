"use client";

import RetreatCard from "./ui/cards/RetreatCard";
interface RetreatData {
  id: string;
  title: string;
  countries: string;
  image: string;
}

const RETREATS_DATA: RetreatData[] = [
  {
    id: "introvert",
    title: "Introvert Retreats",
    countries: "78+ Countries",
    image: "/images/retreat-introvert.webp",
  },
  {
    id: "yoga",
    title: "Yoga Retreats",
    countries: "89+ Countries",
    image: "/images/retreat-yoga.webp",
  },
  {
    id: "detox",
    title: "Detox",
    countries: "56+ Countries",
    image: "/images/retreat-detox.webp",
  },
];

export default function Retreats() {
  return (
    <section
      id="retreats"
      className="bg-[#091b20] text-white pt-12 sm:pt-16 md:pt-20 lg:pt-16 pb-0 scroll-mt-20"
    >

      {/* Section Heading */}
      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-10">
        <div className="flex flex-col md:flex-row items-start mb-8 sm:mb-12 md:mb-16 lg:mb-12">

          {/* Left Label */}
          <div className="w-full md:w-[22.5%] lg:w-[25%] mb-3 md:mb-0 lg:pt-1 flex items-center gap-2">
            <img
              src="/images/logo-mini.svg"
              alt=""
              className="w-[18px] h-[18px] object-contain opacity-40"
            />

            <span className="text-[0.875rem] font-medium tracking-[-0.02em] text-white">
              Retreats
            </span>
          </div>

          {/* Main Heading */}
          <div className="w-full md:w-[77.5%] lg:w-[75%]">
            <h2 className="text-[1.85rem] sm:text-[2.5rem] md:text-[3.25rem] lg:text-[3.5rem] font-semibold leading-[1.08] tracking-[-0.04em] text-white max-w-[850px]">
              We&apos;ve vetted retreats in
              <br className="hidden sm:inline" />
              more than 100 countries
              <br className="hidden sm:inline" />
              See for yourself
            </h2>
          </div>

        </div>
      </div>

      {/* Retreat Cards */}
      <div className="w-full border-t border-b border-white/10 overflow-hidden">
        <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible no-scrollbar px-5 sm:px-8 md:px-0 divide-x md:divide-y-0 md:divide-x divide-white/10">

          {RETREATS_DATA.map((retreat) => (
            <div
              key={retreat.id}
              className="shrink-0 w-[82vw] sm:w-[70vw] md:w-auto"
            >
              <RetreatCard
                title={retreat.title}
                countries={retreat.countries}
                image={retreat.image}
              />
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}