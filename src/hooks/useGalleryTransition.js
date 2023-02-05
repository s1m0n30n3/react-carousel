import { useMemo } from "react";

export const useGalleryTransition = ({
  imagesLength,
  currentIndex,
  effectSpeed,
}) => {
  return useMemo(() => {
    const splitUnit = 100 / imagesLength;

    const slideSettings = {
      width: `${100 * imagesLength}%`,
      transform: `translateX(-${splitUnit * currentIndex}%)`,
      transitionDuration: `${effectSpeed}ms`,
    };
    return {
      slide: slideSettings,
      inOutSlide: slideSettings,
    };
  }, [currentIndex, imagesLength, effectSpeed]);
};
