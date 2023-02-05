import PropTypes from "prop-types";

import {
  GalleryMode,
  NavigationType,
  NavigationPosition,
  TransitionEffect,
  ImageBehavior,
} from "../constants";

export const effectProps = Object.values(TransitionEffect);
export const galleryModeProps = Object.values(GalleryMode);
export const navigationPositionProps = Object.values(NavigationPosition);
export const navigationTypeProps = Object.values(NavigationType);
export const imageBehaviorProps = Object.values(ImageBehavior);

export const dotsProps = {
  areSet: PropTypes.bool,
  position: PropTypes.oneOf(navigationPositionProps),
  size: PropTypes.number,
  color: PropTypes.string,
  radius: PropTypes.number,
  spacing: PropTypes.number,
};

export const navigationPropTypes = {
  type: PropTypes.oneOf(navigationTypeProps),
  position: PropTypes.oneOf(navigationPositionProps),
  width: PropTypes.string,
  sideMargin: PropTypes.number,
};
