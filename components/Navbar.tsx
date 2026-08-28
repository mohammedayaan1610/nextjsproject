export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[78px] border-b border-white/10 bg-white/[0.08] backdrop-blur-md">
      <div className="flex h-full items-stretch">

        {/* Logo */}
        <div className="flex w-[276px] shrink-0 items-center border-r border-white/10 px-[48px]">
          <div className="flex items-center gap-2">

            <img
              src="/vita-travel-assets/svg-1.svg"
              alt=""
              className="h-[26px] w-[26px]"
            />

            <span className="text-[24px] font-semibold leading-none tracking-[-0.04em] text-white">
              Vita Travels
            </span>

          </div>
        </div>

        {/* Empty flexible space */}
        <div className="flex-1" />

        {/* Retreats */}
        <a
          href="#retreats"
          className="flex items-center px-[25px] text-[16px] font-semibold tracking-[-0.02em] text-white"
        >
          Retreats
        </a>

        {/* Coaches */}
        <a
          href="#coaches"
          className="flex items-center px-[25px] text-[16px] font-semibold tracking-[-0.02em] text-white"
        >
          Coaches
        </a>

        {/* Contacts */}
        <a
          href="#contacts"
          className="flex items-center px-[25px] text-[16px] font-semibold tracking-[-0.02em] text-white"
        >
          Contacts
        </a>

        {/* Explore */}
        <a
          href="#explore"
          className="flex w-[174px] items-center justify-center border-l border-white/10 text-[16px] font-semibold tracking-[-0.02em] text-white"
        >
          Explore
        </a>

      </div>
    </nav>
  );
}