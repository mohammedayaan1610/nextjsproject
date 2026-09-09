export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[700px] w-full overflow-hidden">

      {/* ================= MOBILE BACKGROUND ================= */}
      <img
        src="/vita-travel-assets/69b13422ebe5cda64625a488_mobile-bg-part-1.webp"
        alt=""
        className="
          absolute inset-0
          h-full w-full
          object-cover
          md:hidden
        "
      />

      {/* ================= DESKTOP BACKGROUND ================= */}
      <img
        src="/vita-travel-assets/69b131f7e83fd36f79be5b78_bg-part-1.webp"
        alt=""
        className="
          absolute inset-0
          hidden h-full w-full
          object-cover
          md:block
        "
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#091b20]/20" />

      {/* ================= MOBILE FOREGROUND ================= */}
      <img
        src="/vita-travel-assets/69b134223848489eddf4f3cf_mobile-bg-part-2.webp"
        alt=""
        className="
          absolute bottom-0 left-0
          z-10
          h-auto w-full
          md:hidden
        "
      />

      {/* ================= DESKTOP FOREGROUND ================= */}
      <img
        src="/vita-travel-assets/69b131f75b251dd705fc8bb9_bg-part-2.webp"
        alt=""
        className="
          absolute bottom-0 left-0
          z-10
          hidden h-auto w-full
          md:block
        "
      />

      {/* ================= HERO CONTENT ================= */}
      <div className="absolute inset-0 z-20 text-white">

        {/* Travel */}
        <h1
          className="
            absolute
            left-1/2
            top-[28%]
            -translate-x-1/2
            whitespace-nowrap
            text-[5.5rem]
            font-bold
            leading-[0.85]
            tracking-[-0.06em]

            sm:text-[7rem]

            md:top-[39%]
            md:text-[10rem]
            md:leading-none

            lg:top-[29%]
            xl:top-[28%]
          "
        >
          Travel
        </h1>

        {/* Subtitle */}
        <p
          className="
            absolute
            left-1/2
            top-[47%]
            w-[88%]
            -translate-x-1/2
            text-center
            text-[1.05rem]
            font-semibold
            leading-[1.12]

            sm:text-[1.2rem]

            md:top-[59%]
            md:w-auto
            md:max-w-[700px]
            md:text-[1.5rem]
            md:leading-tight

            lg:top-[49%]
            xl:top-[48%]
          "
        >
          With purpose. Book retreats, active tours, and boutique stays in one place.
        </p>

        {/* Explore button */}
       <a
  href="#retreats"
  className="
    group
    absolute
    bottom-[7%]
    left-1/2
    flex
    w-[82%]
    max-w-[360px]
    -translate-x-1/2
    items-center
    justify-center
    rounded-full
    bg-white
    px-8
    py-5
    text-base
    font-semibold
    text-[#091b20]
    transition-colors
    duration-300
    hover:bg-[#fb9826]
    hover:text-white

    md:bottom-auto
    md:top-[75%]
    md:w-auto
    md:max-w-none
    md:px-9
    md:py-5
    md:text-lg

    lg:top-[64%]
    xl:top-[63%]
  "
>
  <span>Explore Retreats</span>
  <span className="ml-5 text-xs">✦</span>
</a> 

      </div>

    </section>
  );
}