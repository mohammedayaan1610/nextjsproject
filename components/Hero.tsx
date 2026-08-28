export default function Hero() {
  return (
    <section className="relative flex aspect-[1440/922] items-center justify-center overflow-hidden">

      {/* Background / back mountain layer */}
      <img
        src="/vita-travel-assets/69b131f7e83fd36f79be5b78_bg-part-1.webp"
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-1 bg-[#091b20]/20" />

      {/* Travel */}
      <h1
        className="
          absolute
          left-1/2
          top-[39%]
          z-2
          -translate-x-1/2
          text-[10rem]
          font-bold
          leading-none
          tracking-[-0.06em]
          text-white
        "
      >
        Travel
      </h1>

      {/* Foreground / hill layer */}
      <img
        src="/vita-travel-assets/69b131f75b251dd705fc8bb9_bg-part-2.webp"
        alt=""
        className="absolute bottom-0 left-0 z-3 w-full"
      />

      {/* Paragraph + button */}
      <div
        className="
          absolute
          left-1/2
          top-[59%]
          z-4
          flex
          -translate-x-1/2
          flex-col
          items-center
          text-center
          text-white
        "
      >
        <p className="w-[700px] text-[1.5rem] font-semibold leading-[1.1]">
          With purpose. Book retreats, active tours, and boutique stays in one place.
        </p>

        <button className="mt-8 rounded-full bg-white px-9 py-5 text-lg font-semibold text-[#091b20]">
          Explore Retreats
        </button>
      </div>

    </section>
  );
}