const retreats = [
  {
    name: "Introvert Retreats",
    countries: "78+ Countries",
    image:
      "/vita-travel-assets/6971da64c60674c148d40058_statistic-3.webp",
  },
  {
    name: "Yoga Retreats",
    countries: "89+ Countries",
    image:
      "/vita-travel-assets/6971da641fb15bbf6432e993_statistic-1.webp",
  },
  {
    name: "Detox",
    countries: "56+ Countries",
    image:
      "/vita-travel-assets/6971da644ade29a121769faf_statistic-2.webp",
  },
];

export default function Retreats() {
  return (
    <section className="bg-[#091b20] text-white">

      {/* Heading */}
      <div className="px-10 pt-14 pb-12">

        <p className="text-sm font-semibold text-white/50">
          ✦ Retreats
        </p>

        <h2 className="ml-[25%] mt-2 max-w-[760px] text-[3.8rem] font-semibold leading-[1.08]">
          We've vetted retreats in
          <br />
          more than 100 countries
          <br />
          See for yourself
        </h2>

      </div>

      {/* Retreat cards */}
      <div className="grid grid-cols-3 border-t border-white/10">

        {retreats.map((retreat) => (
          <div
            key={retreat.name}
            className="border-r border-white/10 px-10 pt-8 pb-10 last:border-r-0"
          >

            {/* Card heading */}
            <div className="mb-4 flex items-center justify-between">

              <h3 className="text-lg font-semibold">
                {retreat.name}
              </h3>

              <p className="text-lg font-semibold text-white/50">
                / {retreat.countries}
              </p>

            </div>

            {/* Card image */}
            <img
              src={retreat.image}
              alt={retreat.name}
              className="block h-[420px] w-full object-cover"
            />

          </div>
        ))}

      </div>

    </section>
  );
}