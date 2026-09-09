"use client";

export default function AboutUs() {
  return (
    <section id="about" className="bg-[#091b20] text-white py-16 md:py-24 lg:py-20 border-b border-white/10">
      
      {/* Top Header Row (2-column layout matching Retreats) */}
      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-10 max-w-full">
        <div className="flex flex-col md:flex-row items-start mb-12 md:mb-16 lg:mb-12">
          
          {/* Left Column Label (25% on desktop) */}
          <div className="w-full md:w-[22.5%] lg:w-[25%] mb-4 md:mb-0 lg:pt-1 flex items-center gap-2">
            <img
              src="/images/logo-mini.svg"
              alt="About Us Icon"
              className="w-[18px] h-[18px] object-contain opacity-40"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                target.parentElement!.insertAdjacentHTML(
                  "afterbegin",
                  '<span class="text-white/40 text-sm">✦</span>'
                );
              }}
            />
            <span className="text-[0.875rem] font-medium tracking-[-0.02em] text-white">
              About Us
            </span>
          </div>

          {/* Right Column Heading (75% on desktop) */}
          <div className="w-full md:w-[77.5%] lg:w-[75%]">
            <h2 className="text-[1.85rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem] font-semibold leading-[1.08] tracking-[-0.04em] text-white max-w-[850px]">
              Not just trips experiences that <br className="hidden sm:inline" />
              nurture body and soul
            </h2>
          </div>

        </div>

        {/* 2-Column Main Content: Left Image, Right Text & Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Left: Large Editorial Image */}
          <div className="w-full aspect-[335/366] sm:aspect-[4/3] lg:aspect-[632/650] overflow-hidden rounded-none bg-[#0d232a]/50">
            <img
              src="/images/about-us.webp"
              alt="Vita Travel Experience"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
              }}
            />
          </div>

          {/* Right: Editorial Paragraph + Statistics Block */}
          <div className="flex flex-col justify-between py-2 sm:py-4">
            
            {/* Paragraph block */}
            <div className="mb-10 lg:mb-12">
              <p className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.375rem] font-medium leading-[1.35] tracking-[-0.02em] text-white/90">
                Vita Travel is a premium wellness travel marketplace that
                blends the ease of booking with the feel of an editorial
                magazine. Discover curated programs, match them with exceptional
                stays, and book seamlessly.
              </p>
            </div>

            {/* Two Statistics Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
              
              {/* Stat 1 */}
              <div className="flex flex-col justify-between space-y-6">
                <div>
                  <div className="text-[2.5rem] sm:text-[2.8125rem] font-semibold tracking-[-0.04em] text-white leading-none mb-3">
                    100+
                  </div>
                  <div className="text-[1.125rem] font-medium tracking-[-0.02em] text-white leading-tight">
                    Total countries <br />
                    travelled
                  </div>
                </div>

                <p className="text-[0.875rem] font-normal text-white/60 leading-normal">
                  Trusted by travelers looking for more than ordinary vacations.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col justify-between space-y-6">
                <div>
                  <div className="text-[2.5rem] sm:text-[2.8125rem] font-semibold tracking-[-0.04em] text-white leading-none mb-3">
                    1 472+
                  </div>
                  <div className="text-[1.125rem] font-medium tracking-[-0.02em] text-white leading-tight">
                    Total retreats <br />
                    attended
                  </div>
                </div>

                {/* Partner / Trust Logos */}
                <div className="flex items-center gap-4 sm:gap-6 pt-2">
                  <img
                    src="/images/about-stat-1.svg"
                    alt="Partner Logo 1"
                    className="h-6 sm:h-7 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.endsWith(".webp")) {
                        target.src = "/images/about-stat-1.webp";
                      } else {
                        target.style.display = "none";
                      }
                    }}
                  />
                  <img
                    src="/images/about-stat-2.svg"
                    alt="Partner Logo 2"
                    className="h-6 sm:h-7 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.endsWith(".webp")) {
                        target.src = "/images/about-stat-2.webp";
                      } else {
                        target.style.display = "none";
                      }
                    }}
                  />
                  <img
                    src="/images/about-stat-3.svg"
                    alt="Partner Logo 3"
                    className="h-6 sm:h-7 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity hidden sm:inline-block"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.endsWith(".webp")) {
                        target.src = "/images/about-stat-3.webp";
                      } else {
                        target.style.display = "none";
                      }
                    }}
                  />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
