"use client";

import { useState, useEffect } from "react";

interface NavItem {
  label: string;
  href: string;
}

const navItems = [
  { label: "Retreats", href: "#retreats" },
  { label: "Coaches", href: "#coaches" },
  { label: "Contacts", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] w-full">
      {/* Translucent glass bar */}
      <div className="relative flex h-[78px] w-full items-center justify-between border-b border-white/10 bg-white/[0.06] backdrop-blur-md">        
        {/* Left: Logo container with right divider */}
        <a
          href="/"
          className="flex h-full items-center gap-2 pl-5 pr-6 sm:px-10 border-r border-white/10 hover:opacity-90 transition-opacity"
        >
          {/* Logo icon placeholder */}
          <div className="w-5 h-5 flex items-center justify-center shrink-0">
            <img
              src="/images/logo-symbol.svg"
              alt="Vita Travels Icon"
              className="w-5 h-5 object-contain"
              onError={(e) => {
                // Fallback if image is missing
                const target = e.currentTarget;
                target.style.display = 'none';
                target.parentElement!.innerHTML = '<span class="text-white text-base leading-none">✦</span>';
              }}
            />
          </div>
          <span className="text-[1.5rem] font-semibold tracking-[-0.04em] text-white whitespace-nowrap leading-none">
            Vita Travels
          </span>
        </a>

        {/* Right Desktop Nav */}
        <div className="hidden md:flex h-full items-center">
          <nav className="flex h-full items-center">
            {navItems.map((item) => ( 
              <a
                key={item.label}
                href={item.href}
                className="flex h-full items-center px-6 text-[0.875rem] font-semibold tracking-[-0.02em] text-white hover:text-[#fb9826] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Explore CTA area with vertical left divider */}
          <a
            href="#destinations"
            className="flex h-full items-center px-8 border-l border-white/10 text-[0.875rem] font-semibold tracking-[-0.02em] text-white hover:text-[#fb9826] transition-colors duration-200"
          >
            Explore
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center pr-5">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="relative z-50 p-2 text-white focus:outline-none"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-center">
              <span
                className={`w-6 h-[2px] bg-white transition-all duration-300 transform origin-center ${
                  mobileMenuOpen ? "rotate-45 translate-y-[9px]" : ""
                }`}
              />
              <span
                className={`w-6 h-[2px] bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-[2px] bg-white transition-all duration-300 transform origin-center ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Overlay */}
      <div
        className={`fixed inset-0 top-[4.5rem] h-[calc(100dvh-4.5rem)] bg-[#091b20] transition-all duration-300 md:hidden flex flex-col justify-between p-6 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-2"
        }`}
      >
        <nav className="flex flex-col pt-8 space-y-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center text-[2.25rem] font-semibold tracking-[-0.03em] text-white hover:text-[#fb9826] transition-colors"
            >
              <span className="text-white/40 mr-2 text-[1.75rem] font-light">+</span>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile bottom CTA */}
        <div className="pb-8">
          <a
            href="#destinations"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-between rounded-full bg-white px-6 py-4 text-[0.875rem] font-semibold text-[#0d2e37] hover:bg-[#fb9826] transition-colors"
          >
            <span>Explore Retreats</span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <path
                d="M8 0C8 0 7.32057 2.41553 7.32057 4C7.32057 5.58447 8 8 8 8C8 8 5.58447 7.32057 4 7.32057C2.41553 7.32057 0 8 0 8C0 8 0.679427 5.58447 0.679427 4C0.679427 2.41553 0 0 0 0C0 0 2.41553 0.679426 4 0.679426C5.58447 0.679426 8 0 8 0Z"
                fill="#0D2E37"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}