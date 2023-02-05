import { useMemo } from "react";

export const useImageTransition = ({ isCurrentSlide, effectSpeed }) => {
  return useMemo(() => {
    return {
      fade: {
        opacity: isCurrentSlide ? 1 : 0,
        transitionDuration: effectSpeed ? `${effectSpeed}ms` : "initial",
      },
      inOutSlide: {
        transitionDuration: effectSpeed ? `${effectSpeed}ms` : "initial",
        transform: isCurrentSlide ? "scale(1)" : "scale(.5)",
      },
    };
  }, [effectSpeed, isCurrentSlide]);
};
