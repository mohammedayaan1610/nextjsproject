"use client";

export default function ExploreByDestination() {
  return (
    <section
      id="destinations"
      className="
        relative
        min-h-[600px] sm:min-h-[750px] lg:min-h-[900px]
        w-full
        overflow-hidden
        bg-[#091b20]
        text-white
        scroll-mt-20
      "
    >
      {/* Map background */}
      <img
        src="/vita-travel-assets/697b4b8b3132f745287378ec_bg-illustration.png"
        alt=""
        className="
          absolute
          inset-0
          z-0
          h-full
          w-full
          object-cover
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          grid
          grid-cols-1
          px-5
          pt-16
          sm:px-8
          sm:pt-24
          md:grid-cols-[22.5%_77.5%]
          md:px-10
          md:pt-32
          lg:grid-cols-[25%_75%]
          lg:px-10
          lg:pt-28
          xl:pt-32
        "
      >
        {/* Section label */}
        <div className="flex items-start gap-2 lg:pt-1">
          <span className="mt-1 text-[20px] leading-none text-white/40">
            ✦
          </span>

          <span className="text-[14px] font-medium tracking-[-0.02em]">
            Country
          </span>
        </div>

        {/* Main content */}
        <div className="mt-10 md:mt-0">
          <h2
            className="
              max-w-[900px]
              text-[clamp(2.5rem,6.8vw,6rem)]
              font-semibold
              leading-[0.92]
              tracking-[-0.065em]
            "
          >
            Explore by Destination
          </h2>

          <p
            className="
              mt-6 sm:mt-8 lg:mt-10
              text-[clamp(1rem,1.5vw,1.375rem)]
              font-semibold
              leading-[1.2]
              tracking-[-0.03em]
              text-white/80
            "
          >
            Discover your next adventure!
            <br />
            Choose from stunning destinations across Europe with 289
            <br className="hidden sm:block" />
            options, vibrant Asia with 90 experiences, and the diverse USA
            <br className="hidden sm:block" />
            featuring 180 unique locations.
          </p>
        </div>
      </div>
    </section>
  );
}