"use client";

import { useState } from "react";

export interface PractitionerData {
  id: string;
  name: string;
  role: string;
  location: string;
  description: string;
  secondDescription: string;
  countries: string;
  retreats: string;
  image: string;
}

interface PractitionerCardProps {
  practitioner: PractitionerData;
}

export default function PractitionerCard({
  practitioner,
}: PractitionerCardProps) {
  const [tapped, setTapped] = useState(false);

  return (
    <div
      className={`group relative h-[402px] w-[350px] shrink-0 overflow-hidden border border-white/10 bg-[#091b20] cursor-pointer sm:h-[420px] sm:w-[345px] lg:h-[390px] lg:w-auto lg:shrink xl:h-[420px] ${
        tapped ? "is-tapped" : ""
      }`}
      onClick={() => setTapped((v) => !v)}
    >
      {/* PHOTO STATE */}
      <div
        className={`absolute inset-0 p-0 transition-opacity duration-500 ${
          tapped ? "opacity-0" : "opacity-100"
        } group-hover:opacity-0`}
      >
        <div className="relative h-full w-full overflow-hidden">
          <img
            src={practitioner.image}
            alt={practitioner.name}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/75 to-transparent" />

          <div className="absolute bottom-5 left-5 right-5 text-white sm:bottom-6 sm:left-6 sm:right-6">
            <h3 className="text-base font-semibold leading-tight sm:text-lg">
              {practitioner.name}
            </h3>

            <p className="mt-1 text-xs font-medium sm:text-sm">
              {practitioner.role}
            </p>
          </div>
        </div>
      </div>

      {/* DETAIL STATE */}
      <div
        className={`absolute inset-0 flex flex-col justify-between overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-[#091b20] p-4 transition-all duration-500 ease-out sm:p-6 lg:p-6 xl:p-8 ${
          tapped ? "opacity-100" : "opacity-0"
        } group-hover:opacity-100`}
      >
        <div>
          {practitioner?.location && (
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium sm:text-sm">
                {practitioner.location}
              </span>

              <img
                src="/vita-travel-assets/69895f26b75cf55113d4cbe1_location.svg"
                alt=""
                className="h-4 w-4 object-contain opacity-50"
              />
            </div>
          )}

          <h3 className="mt-2 text-base font-semibold leading-tight sm:text-lg">
            {practitioner.name}
          </h3>

          <p className="mt-1 text-xs font-medium sm:text-sm">
            {practitioner.role}
          </p>

          <div className="mt-4 space-y-3 sm:mt-8 sm:space-y-5">
            {practitioner.description && (
              <p className="text-xs font-medium leading-[1.35] text-white/60 sm:text-sm">
                {practitioner.description}
              </p>
            )}

            {practitioner.secondDescription && (
              <p className="text-xs font-medium leading-[1.35] text-white/60 sm:text-sm">
                {practitioner.secondDescription}
              </p>
            )}
          </div>
        </div>

        <div className="mt-4 border-t border-white/10 pt-4 sm:mt-0 sm:pt-5">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span>Countries travelled:</span>

            <span className="flex items-center gap-2">
              {practitioner.countries}

              <img
                src="/vita-travel-assets/69897a49b1a14c60272a1674_earth.svg"
                alt=""
                className="h-4 w-4 object-contain opacity-50"
              />
            </span>
          </div>

          <div className="mt-3 flex items-center justify-between text-xs sm:mt-4 sm:text-sm">
            <span>Retreats attended:</span>

            <span className="flex items-center gap-2">
              {practitioner.retreats}

              <img
                src="/vita-travel-assets/69897a49b9177022708b735a_yoga.svg"
                alt=""
                className="h-4 w-4 object-contain opacity-50"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}