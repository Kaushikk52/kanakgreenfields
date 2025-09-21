import React from "react";

export default function Card({
  title,
  description,
  image,
  mode = "center",
  bgColor = "bg-[#457f5e]",
}) {
  const hasImage = mode === "top" || mode === "bottom";

  return (
    <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[560px] rounded-xl overflow-hidden">
      {hasImage && image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      )}

      {mode === "center" && (
        <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-center text-white bg-[#457f5e]/90">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{title}</h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-2xl leading-snug">
            {description}
          </p>
        </div>
      )}

      {mode === "top" && (
        <div className="absolute inset-0 p-6 sm:p-8 text-white flex flex-col justify-start bg-gradient-to-b from-[#457f5e]/90 via-[#457f5e]/50 to-transparent">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{title}</h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-2xl leading-snug">
            {description}
          </p>
        </div>
      )}

      {mode === "bottom" && (
        <div className="absolute inset-0 p-6 sm:p-8 text-white flex flex-col justify-end bg-gradient-to-t from-[#457f5e]/90 via-[#457f5e]/50 to-transparent">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{title}</h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-2xl leading-snug">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
