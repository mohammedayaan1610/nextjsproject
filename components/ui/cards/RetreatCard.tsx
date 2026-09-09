interface RetreatCardProps {
  title: string;
  countries: string;
  image: string;
}

export default function RetreatCard({
  title,
  countries,
  image,
}: RetreatCardProps) {
  return (
    <div className="p-5 sm:p-6 md:p-6 lg:p-10 flex flex-col justify-between group">

      {/* Card Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
        <h3 className="text-[1.0625rem] sm:text-[1.125rem] font-semibold tracking-[-0.02em] text-white group-hover:text-[#fb9826] transition-colors duration-200">
          {title}
        </h3>

        <span className="text-[0.875rem] sm:text-[0.9375rem] lg:text-[1rem] font-medium text-white/50 tracking-[-0.02em]">
          / {countries}
        </span>
      </div>

      {/* Card Image */}
      <div className="w-full aspect-[400/437] overflow-hidden rounded-none bg-[#0d232a]/50">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

    </div>
  );
}