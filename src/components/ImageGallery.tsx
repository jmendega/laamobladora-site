"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  name: string;
}

export default function ImageGallery({ images, name }: ImageGalleryProps) {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) return null;

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrent((i) => (i + 1) % images.length);

  return (
    <div className="relative bg-[#0D1628] select-none">
      {/* Main image */}
      <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] overflow-hidden">
        <Image
          key={images[current]}
          src={images[current]}
          alt={`${name} — foto ${current + 1}`}
          fill
          className="object-contain p-6 transition-opacity duration-300"
          priority={current === 0}
        />
      </div>

      {/* Nav arrows — only show when multiple images */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Imagen anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-[#070E1C]/70 hover:bg-[#D4AE35]/20 border border-[#162040] hover:border-[#D4AE35]/50 text-[#5A6F85] hover:text-[#D4AE35] transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Siguiente imagen"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-[#070E1C]/70 hover:bg-[#D4AE35]/20 border border-[#162040] hover:border-[#D4AE35]/50 text-[#5A6F85] hover:text-[#D4AE35] transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 py-4 border-t border-[#162040]">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ver foto ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current
                    ? "bg-[#D4AE35] w-4"
                    : "bg-[#162040] hover:bg-[#5A6F85]"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
