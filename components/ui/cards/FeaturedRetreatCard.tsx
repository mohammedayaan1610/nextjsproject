"use client";

import { useState } from "react";

export interface FeaturedRetreatData {
  id: string;
  title: string;
  price: string;
  location: string;
  dates: string;
  duration: string;
  guests: string;
  trusted: string;
  image: string;
  fallbackImage?: string;
}

interface FeaturedRetreatCardProps {
  retreat: FeaturedRetreatData;
}

export default function FeaturedRetreatCard({ retreat }: FeaturedRetreatCardProps) {
  const {
    title,
    price,
    location,
    dates,
    duration,
    guests,
    trusted,
    image,
    fallbackImage,
  } = retreat;

  const [imgSrc, setImgSrc] = useState(image);

  return (
    <div
      className="group fcg bg-[#091b20] transition-colors duration-300 h-full"
      style={{
        display: "grid",
        gridTemplateAreas: '"header" "photo" "details"',
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto auto 1fr",
      }}
    >
      {/* 1. Title + Price */}
      <div
        className="px-6 pt-6 pb-4 sm:px-7 sm:pt-7 lg:px-10 lg:pt-10 lg:pb-6"
        style={{ gridArea: "header" }}
      >
        <h3 className="text-[1.25rem] sm:text-[1.375rem] lg:text-[1.5rem] font-semibold leading-[1.2] tracking-[-0.03em] text-white group-hover:text-[#fb9826] transition-colors duration-200 line-clamp-2 sm:line-clamp-3">
          {title}
        </h3>
        <div className="mt-3 sm:mt-4 flex items-baseline gap-1.5 text-[0.9375rem] sm:text-[1rem] tracking-[-0.02em]">
          <span className="text-white/50 font-normal">from</span>
          <span className="text-white font-semibold">{price}</span>
        </div>
      </div>

      {/* 2. Image */}
      <div
        className="overflow-hidden bg-[#0d232a]/50 relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-full"
        style={{ gridArea: "photo" }}
      >
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          onError={() => {
            if (fallbackImage && imgSrc !== fallbackImage) {
              setImgSrc(fallbackImage);
            }
          }}
        />
      </div>

      {/* 3. Details + Trusted + CTA */}
      <div
        className="px-6 pb-6 pt-5 sm:px-7 sm:pb-7 sm:pt-6 lg:px-10 lg:pb-10 lg:pt-6 flex flex-col gap-3.5 border-t border-white/10"
        style={{ gridArea: "details" }}
      >
        {/* Location */}
        <div className="flex items-center justify-between text-[0.8125rem] sm:text-[0.875rem] tracking-[-0.01em]">
          <span className="text-white/90 truncate pr-2">{location}</span>
          <div className="shrink-0 text-white/40 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 opacity-60">
              <path d="M12.25 5.83325C12.25 9.91658 7 13.4166 7 13.4166C7 13.4166 1.75 9.91658 1.75 5.83325C1.75 4.44087 2.30312 3.10551 3.28769 2.12094C4.27226 1.13638 5.60761 0.583252 7 0.583252C8.39239 0.583252 9.72774 1.13638 10.7123 2.12094C11.6969 3.10551 12.25 4.44087 12.25 5.83325Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 7.58325C7.9665 7.58325 8.75 6.79975 8.75 5.83325C8.75 4.86675 7.9665 4.08325 7 4.08325C6.0335 4.08325 5.25 4.86675 5.25 5.83325C5.25 6.79975 6.0335 7.58325 7 7.58325Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Dates and Duration */}
        <div className="flex items-center justify-between text-[0.8125rem] sm:text-[0.875rem] tracking-[-0.01em]">
          <span className="text-white/90 truncate pr-2">
            {dates} <span className="text-white/40">/ {duration}</span>
          </span>
          <div className="shrink-0 text-white/40 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 opacity-60">
              <path d="M11.0833 2.33325H2.91667C2.27233 2.33325 1.75 2.85559 1.75 3.49992V11.6666C1.75 12.3109 2.27233 12.8333 2.91667 12.8333H11.0833C11.7277 12.8333 12.25 12.3109 12.25 11.6666V3.49992C12.25 2.85559 11.7277 2.33325 11.0833 2.33325Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.33301 1.16675V3.50008" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.66699 1.16675V3.50008" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1.75 5.83325H12.25" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Guests */}
        <div className="flex items-center justify-between text-[0.8125rem] sm:text-[0.875rem] tracking-[-0.01em]">
          <span className="text-white/90 truncate pr-2">{guests}</span>
          <div className="shrink-0 text-white/40 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 opacity-60">
              <path d="M9.91634 12.25V11.0833C9.91634 10.4645 9.67051 9.871 9.23292 9.43342C8.79534 8.99583 8.20185 8.75 7.58301 8.75H2.91634C2.2975 8.75 1.70401 8.99583 1.26643 9.43342C0.82884 9.871 0.583008 10.4645 0.583008 11.0833V12.25" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.25033 6.41667C6.53899 6.41667 7.58366 5.372 7.58366 4.08333C7.58366 2.79467 6.53899 1.75 5.25033 1.75C3.96166 1.75 2.91699 2.79467 2.91699 4.08333C2.91699 5.372 3.96166 6.41667 5.25033 6.41667Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Trusted by + stars */}
        <div className="flex items-center justify-between text-[0.8125rem] sm:text-[0.875rem] tracking-[-0.01em] pt-1">
          <span className="text-white/60 truncate pr-2">{trusted}</span>
          <div className="shrink-0 flex items-center">
            <svg width="53" height="9" viewBox="0 0 53 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[50px] sm:w-[53px] h-auto">
              <path d="M3.56023 0.633822C3.92255 -0.211274 5.07745 -0.211274 5.43977 0.633822L5.96473 1.85654C6.11398 2.20527 6.43101 2.44489 6.79642 2.48447L8.07691 2.62461C8.96315 2.72196 9.32033 3.86337 8.65847 4.48382L7.7012 5.3792C7.42843 5.63486 7.308 6.02211 7.38417 6.39652L7.65076 7.70588C7.83604 8.61088 6.90142 9.31691 6.12942 8.85372L5.01466 8.18513C4.69557 7.99471 4.30443 7.99471 3.98534 8.18513L2.87058 8.85372C2.09858 9.31691 1.16396 8.61088 1.34924 7.70588L1.61583 6.39652C1.692 6.02211 1.57157 5.63486 1.2988 5.3792L0.341526 4.48382C-0.32033 3.86337 0.0368463 2.72196 0.923095 2.62461L2.20358 2.48447C2.56899 2.44489 2.88602 2.20527 3.03527 1.85654L3.56023 0.633822Z" fill="#FB9826"/>
              <path d="M14.0602 0.633822C14.4226 -0.211274 15.5774 -0.211274 15.9398 0.633822L16.4647 1.85654C16.614 2.20527 16.931 2.44489 17.2964 2.48447L18.5769 2.62461C19.4631 2.72196 19.8203 3.86337 19.1585 4.48382L18.2012 5.3792C17.9284 5.63486 17.808 6.02211 17.8842 6.39652L18.1508 7.70588C18.336 8.61088 17.4014 9.31691 16.6294 8.85372L15.5147 8.18513C15.1956 7.99471 14.8044 7.99471 14.4853 8.18513L13.3706 8.85372C12.5986 9.31691 11.664 8.61088 11.8492 7.70588L12.1158 6.39652C12.192 6.02211 12.0716 5.63486 11.7988 5.3792L10.8415 4.48382C10.1797 3.86337 10.5369 2.72196 11.4231 2.62461L12.7036 2.48447C13.069 2.44489 13.386 2.20527 13.5353 1.85654L14.0602 0.633822Z" fill="#FB9826"/>
              <path d="M24.5602 0.633822C24.9226 -0.211274 26.0774 -0.211274 26.4398 0.633822L26.9647 1.85654C27.114 2.20527 27.431 2.44489 27.7964 2.48447L29.0769 2.62461C29.9631 2.72196 30.3203 3.86337 29.6585 4.48382L28.7012 5.3792C28.4284 5.63486 28.308 6.02211 28.3842 6.39652L28.6508 7.70588C28.836 8.61088 27.9014 9.31691 27.1294 8.85372L26.0147 8.18513C25.6956 7.99471 25.3044 7.99471 24.9853 8.18513L23.8706 8.85372C23.0986 9.31691 22.164 8.61088 22.3492 7.70588L22.6158 6.39652C22.692 6.02211 22.5716 5.63486 22.2988 5.3792L21.3415 4.48382C20.6797 3.86337 21.0369 2.72196 21.9231 2.62461L23.2036 2.48447C23.569 2.44489 23.886 2.20527 24.0353 1.85654L24.5602 0.633822Z" fill="#FB9826"/>
              <path d="M35.0602 0.633822C35.4226 -0.211274 36.5774 -0.211274 36.9398 0.633822L37.4647 1.85654C37.614 2.20527 37.931 2.44489 38.2964 2.48447L39.5769 2.62461C40.4631 2.72196 40.8203 3.86337 40.1585 4.48382L39.2012 5.3792C38.9284 5.63486 38.808 6.02211 38.8842 6.39652L39.1508 7.70588C39.336 8.61088 38.4014 9.31691 37.6294 8.85372L36.5147 8.18513C36.1956 7.99471 35.8044 7.99471 35.4853 8.18513L34.3706 8.85372C33.5986 9.31691 32.664 8.61088 32.8492 7.70588L33.1158 6.39652C33.192 6.02211 33.0716 5.63486 32.7988 5.3792L31.8415 4.48382C31.1797 3.86337 31.5369 2.72196 32.4231 2.62461L33.7036 2.48447C34.069 2.44489 34.386 2.20527 34.5353 1.85654L35.0602 0.633822Z" fill="#FB9826"/>
              <path d="M45.5602 0.633822C45.9226 -0.211274 47.0774 -0.211274 47.4398 0.633822L47.9647 1.85654C48.114 2.20527 48.431 2.44489 48.7964 2.48447L50.0769 2.62461C50.9631 2.72196 51.3203 3.86337 50.6585 4.48382L49.7012 5.3792C49.4284 5.63486 49.308 6.02211 49.3842 6.39652L49.6508 7.70588C49.836 8.61088 48.9014 9.31691 48.1294 8.85372L47.0147 8.18513C46.6956 7.99471 46.3044 7.99471 45.9853 8.18513L44.8706 8.85372C44.0986 9.31691 43.164 8.61088 43.3492 7.70588L43.6158 6.39652C43.692 6.02211 43.5716 5.63486 43.2988 5.3792L42.3415 4.48382C41.6797 3.86337 42.0369 2.72196 42.9231 2.62461L44.2036 2.48447C44.569 2.44489 44.886 2.20527 45.0353 1.85654L45.5602 0.633822Z" fill="#FB9826"/>
            </svg>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-2 mt-2">
          <a
            href="#contacts"
            className="w-full inline-flex items-center justify-between rounded-full bg-[#0d2e37] hover:bg-[#133c48] px-5 sm:px-6 py-3.5 sm:py-4 text-[0.875rem] font-semibold text-white transition-all duration-300 group/btn border border-white/10 hover:border-white/20"
          >
            <span>Explore Retreat</span>
            <span className="text-white text-xs transition-transform duration-200 group-hover/btn:translate-x-0.5">&#10022;</span>
          </a>
        </div>
      </div>
    </div>
  );
}