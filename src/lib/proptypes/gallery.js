import PropTypes from "prop-types";

import {
  effectProps,
  galleryModeProps,
  imageBehaviorProps,
  navigationPropTypes,
  dotsProps,
} from "./common";

export const galleryPropTypes = {
  effect: PropTypes.oneOf(effectProps),
  effectSpeed: PropTypes.number,
  mode: PropTypes.oneOf(galleryModeProps),
  ratio: PropTypes.arrayOf(PropTypes.number),
  imageBehavior: PropTypes.oneOf(imageBehaviorProps),
  blur: PropTypes.bool,
  blurAmount: PropTypes.number,
  navigation: PropTypes.shape(navigationPropTypes),
  arrows: PropTypes.shape({
    icon: PropTypes.func,
    iconSize: PropTypes.number,
    color: PropTypes.string,
    background: PropTypes.string,
    size: PropTypes.number,
    radius: PropTypes.number,
  }),
  dots: PropTypes.shape(dotsProps),
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
};
