import React from "react";
import useEmblaCarousel from "embla-carousel-react";

type sliderProps = {
  children?: React.ReactNode;
};

export function Slider({ children }: sliderProps) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">{children}</div>
      </div>

      <div className="absolute position-center w-full flex gap-2 justify-between align-self-center">
        <button className="embla__prev">
          <i className="bi bi-arrow-left-circle-fill text-4xl text-white"></i>
        </button>
        <button className="embla__next">
          <i className="bi bi-arrow-right-circle-fill text-4xl text-white"></i>
        </button>
      </div>
    </div>
  );
}
