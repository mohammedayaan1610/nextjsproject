"use client";

export default function Footer() {
  return (
    <footer id="contacts" className="w-full bg-[#061b20] text-white">
      {/* Footer Image — hidden on mobile, visible on desktop */}
      <div className="hidden lg:block w-full overflow-hidden">
        <img
          src="/vita-travel-assets/697b6310adee6f369b84c520_illustration.webp"
          alt=""
          className="block w-full h-auto object-cover"
        />
      </div>

      {/* Main Footer */}
      <div className="px-6 py-14 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-[72px] lg:py-[72px]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-3 lg:gap-10">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/vita-travel-assets/svg-1.svg"
                alt="Vita Travels"
                className="h-7 w-7"
              />

              <span className="text-[1.55rem] font-semibold tracking-[-0.04em]">
                Vita Travels
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-1">
            <a
              href="#coaches"
              className="group flex items-center text-[2.9rem] font-semibold leading-[1.05] tracking-[-0.055em] sm:text-[3.2rem] lg:text-[3.5rem]"
            >
              <span className="mr-1 text-white/40 transition-colors duration-300 group-hover:text-white/70">
                +
              </span>

              <span className="transition-colors duration-300 group-hover:text-[#fb9826]">
                Coaches
              </span>
            </a>

            <a
              href="#contacts"
              className="group flex items-center text-[2.9rem] font-semibold leading-[1.05] tracking-[-0.055em] sm:text-[3.2rem] lg:text-[3.5rem]"
            >
              <span className="mr-1 text-white/40 transition-colors duration-300 group-hover:text-white/70">
                +
              </span>

              <span className="transition-colors duration-300 group-hover:text-[#fb9826]">
                Contacts
              </span>
            </a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3 text-[1.15rem] font-medium tracking-[-0.025em] sm:text-[1.25rem] lg:justify-self-end lg:pt-2">
            <a href="tel:+1012345678">
              +1 012 345 678
            </a>

            <a href="mailto:vita-travels@gmail.com">
              vita-travels@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/15 text-[0.8rem] font-semibold text-white/55">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Copyright */}
          <div className="flex min-h-[58px] items-center justify-center border-b border-white/10 px-6 text-center md:min-h-[78px] md:justify-start md:border-b-0 md:px-8 lg:px-[72px]">
            ©All Rights Reserved. Vita Travel, 2026
          </div>

          {/* Made by */}
          <div className="flex min-h-[58px] items-center justify-center border-b border-white/10 px-6 text-center md:min-h-[78px] md:border-b-0 md:border-l md:border-white/10">
            <span>Made by</span>

            <img
              src="/vita-travel-assets/svg-13.svg"
              alt="Phenomenon Studio"
              className="mx-2 h-4 w-4 object-contain"
            />

            <span>Phenomenon Studio</span>
          </div>

          {/* Legal */}
          <div className="flex min-h-[58px] items-center justify-center gap-7 px-6 text-center md:min-h-[78px] md:justify-end md:border-l md:border-white/10 md:px-8 lg:px-[64px]">
            <a href="#terms">
              Terms and Conditions
            </a>

            <a href="#privacy">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}