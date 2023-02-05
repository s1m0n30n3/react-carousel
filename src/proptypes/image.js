import PropTypes from "prop-types";

import { imageBehaviorProps, effectProps } from "./common";

export const imageProptypes = {
  imagesLength: PropTypes.number,
  currentIndex: PropTypes.number,
  index: PropTypes.number,
  imageBehavior: PropTypes.oneOf(imageBehaviorProps),
  effect: PropTypes.oneOf(effectProps),
  effectSpeed: PropTypes.number,
  imageBlur: PropTypes.shape({
    blur: PropTypes.bool,
    blurAmount: PropTypes.number,
  }),
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      src: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
};
