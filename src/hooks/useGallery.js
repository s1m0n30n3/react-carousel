import { useCallback, useState } from "react";

import { GalleryMode, MouseEvent, CarouselAction } from "constants";

export const useGallery = ({ imagesLength, mode }) => {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [startPosition, setStartPosition] = useState(0);

  const handleNavigation = useCallback(
    ({ action }) => {
      return setGalleryIndex((prev) => {
        const carouselLength = imagesLength - 1;
        const isNext = action === CarouselAction.NEXT;
        const isPrev = action === CarouselAction.PREV;
        const isModeBounded = mode === GalleryMode.BOUNDED;
        const isModeReturn = mode === GalleryMode.RETURN;
        const isFirstSlide = prev === 0;
        const isLastSlide = prev === carouselLength;
        const increment = prev + 1;
        const decrement = prev - 1;

        if (prev > 0 && prev < carouselLength && !!action)
          return isPrev ? decrement : increment;

        if (isModeBounded && !!action) {
          if (isFirstSlide) return isPrev ? prev : increment;
          if (isLastSlide) return isNext ? prev : decrement;
        }

        if (isModeReturn && !!action) {
          if (isFirstSlide) return isPrev ? carouselLength : increment;
          if (isLastSlide) return isNext ? 0 : decrement;
        }
        return prev;
      });
    },
    [imagesLength, mode]
  );

  const defineCarouselMovement = useCallback(({ posStart, posEnd }) => {
    const start = Math.round(posStart);
    const end = Math.round(posEnd);
    const difference = start - end;

    if (difference < -50) return CarouselAction.PREV;
    if (difference > 50) return CarouselAction.NEXT;
    return null;
  }, []);

  const onMouseDrag = useCallback(
    ({ action, property }) => {
      const isActionStart = action === MouseEvent.START;
      const isActionEnd = action === MouseEvent.END;

      setStartPosition((prev) => (isActionStart ? property?.screenX : prev));

      if (isActionEnd) {
        return handleNavigation({
          action: defineCarouselMovement({
            posStart: startPosition,
            posEnd: property?.screenX,
          }),
        });
      }
      return null;
    },
    [startPosition, handleNavigation, defineCarouselMovement]
  );

  return {
    onMouseDrag,
    handleNavigation,
    setGalleryIndex,
    galleryIndex,
  };
};
