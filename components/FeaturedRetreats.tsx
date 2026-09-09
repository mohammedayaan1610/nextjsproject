"use client";

import FeaturedRetreatCard, {
  FeaturedRetreatData,
} from "./ui/cards/FeaturedRetreatCard";

const FEATURED_RETREATS: FeaturedRetreatData[] = [
  {
    id: "romania",
    title: "7 Day Mystic Mountain Retreat in Romania",
    price: "$1,000",
    location: "Gura Humorului, Romania",
    dates: "Feb 15 - 21, 2026",
    duration: "7 days, 6 nights",
    guests: "12 guests",
    trusted: "Trusted by 190+ clients worldwide",
    image: "/vita-travel-assets/697b0f75d450e622eb69bbb9_1.webp",
    fallbackImage: "/vita-travel-assets/697b0f75d450e622eb69bbb9_1.webp",
  },
  {
  id: "tuscany",
  title: "Yoga & Outdoor Retreat in Tuscany, Italy",
  price: "$1,328",
  location: "Province of Grosseto, Tuscany, Italy",
  dates: "Jan 15 - 21, 2026",
  duration: "7 days, 6 nights",
  guests: "6 guests",
  trusted: "Trusted by 125+ clients worldwide",
  image: "/vita-travel-assets/697b0f759c0200e2421e8d01_2.webp",
  fallbackImage: "/vita-travel-assets/697b0f759c0200e2421e8d01_2.webp",
},
  {
    id: "morocco",
    title: "Photography Retreat & Tour in Magical Morocco",
    price: "$5,575",
    location: "Morocco",
    dates: "March 06 - 20, 2026",
    duration: "15 days, 14 nights",
    guests: "18 guests",
    trusted: "Trusted by 312+ clients worldwide",
    image: "/vita-travel-assets/697b0f75e8fb56ed1c7f7c90_3.webp",
    fallbackImage: "/vita-travel-assets/697b0f75e8fb56ed1c7f7c90_3.webp",
  },
  {
    id: "marrakesh",
    title: "Morocco Holiday & Desert Moon",
    price: "$3,829",
    location: "Marrakesh, Marrakesh-Safi, Morocco",
    dates: "April 12 - 20, 2026",
    duration: "8 days, 7 nights",
    guests: "6 guests",
    trusted: "Trusted by 412+ clients worldwide",
    image: "/vita-travel-assets/697b0f75cd93fd313dfcc0bd_4.webp",
    fallbackImage: "/vita-travel-assets/697b0f75cd93fd313dfcc0bd_4.webp",
  },
  {
    id: "portugal",
    title: "8 Day Juice Detox, Retreat in Portugal",
    price: "$1,294",
    location: "Portugal",
    dates: "Feb 06 - 14, 2026",
    duration: "8 days, 7 nights",
    guests: "12 guests",
    trusted: "Trusted by 112+ clients worldwide",
    image: "/vita-travel-assets/697b162748ae928115f5f8ee_5.webp",
    fallbackImage: "/vita-travel-assets/697b162748ae928115f5f8ee_5.webp",
  },
  {
    id: "bali",
    title: "7 Day Solo Travelers Retreat: Fun in Bali",
    price: "$406",
    location: "Ubud, Bali, Indonesia",
    dates: "Jan | Feb | Mar | Apr | May",
    duration: "7 days, 6 nights",
    guests: "Solo",
    trusted: "Trusted by 287+ clients worldwide",
    image: "/vita-travel-assets/697b16276a09f35cfb31e223_6.webp",
    fallbackImage: "/vita-travel-assets/697b16276a09f35cfb31e223_6.webp",
  },
];

export default function FeaturedRetreats() {
  return (
    <section
      id="featured-retreats"
      className="bg-[#091b20] text-white pt-12 sm:pt-16 md:pt-20 lg:pt-16 pb-0 w-full scroll-mt-20"
    >
      {/* 2-Column Header Area */}
      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-10 max-w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 md:mb-16 lg:mb-12 gap-4 md:gap-8">
          {/* Left Side: Large Title */}
          <div className="w-full md:w-1/2">
            <h2 className="text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem] font-semibold leading-[1.08] tracking-[-0.04em] text-white">
              Featured Retreats
            </h2>
          </div>

          {/* Right Side: Muted Description */}
          <div className="w-full md:w-1/2 flex md:justify-end">
            <p className="text-[0.9375rem] sm:text-[1rem] md:text-[1.0625rem] lg:text-[1.125rem] font-normal leading-[1.4] tracking-[-0.02em] text-white/70 max-w-[460px]">
              Discover unique locations, engaging activities, and expert-led
              workshops designed to inspire and refresh your spirit.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Retreats Grid (1 column on mobile/tablet, 2 columns on desktop) */}
      <div className="w-full border-t border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 divide-white/10">
          {FEATURED_RETREATS.map((retreat, index) => {
            const isRightColumn = index % 2 === 1;
            const isTopRow = index < 2;

            return (
              <div
                key={retreat.id}
                className={`
                  w-full
                  ${isRightColumn ? "lg:border-l lg:border-white/10" : ""}
                  ${!isTopRow ? "lg:border-t lg:border-white/10" : ""}
                `}
              >
                <FeaturedRetreatCard retreat={retreat} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
