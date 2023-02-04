/**
 * @enum string
 */
export const GalleryMode = {
  BOUNDED: "bounded",
  RETURN: "return",
};

/**
 * @enum string
 */
export const TransitionEffect = {
  SLIDE: "slide",
  FADE: "fade",
  IN_OUT_SLIDE: "inOutSlide",
};

/**
 * @enum string
 */
export const MouseEvent = {
  END: "end",
  START: "start",
  MOVE: "move",
};

/**
 * @enum string
 */
export const CarouselAction = {
  PREV: "prev",
  NEXT: "next",
};

/**
 * @enum string
 */
export const ImageBehavior = {
  FULL: "full",
  CONTAINED: "contained",
};

/**
 * @enum number[]
 */
export const GalleryRatio = {
  R1_1: [1, 1],
  R4_1: [4, 1],
  R3_2: [3, 2],
  R4_3: [4, 3],
  R5_4: [5, 4],
  R16_10: [16, 10],
  R16_9: [16, 9],
  R21_9: [21, 9],
  R32_9: [32, 9],
};

/**
 * @enum string
 */
export const NavigationType = {
  ONLY_ARROWS: "onlyArrows",
  ONLY_DOTS: "onlyDots",
  ARROWS_AND_DOTS: "arrowsAndDots",
  NONE: "none",
};

/**
 * @enum string
 */
export const NavigationPosition = {
  TOP: "top",
  CENTER: "center",
  BOTTOM: "bottom",
  BOTTOM_OUTSIDE: "bottomOutside",
};
