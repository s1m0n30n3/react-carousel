import PropTypes from "prop-types";

import {
  GalleryMode,
  NavigationType,
  NavigationPosition,
  TransitionEffect,
  ImageBehavior,
} from "../constants";

const effectPropType = PropTypes.oneOf(Object.values(TransitionEffect));
const imagesPropType = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired
);
const galleryModePropType = PropTypes.oneOf(Object.values(GalleryMode));
const navigationPositionProptype = PropTypes.oneOf(
  Object.values(NavigationPosition)
);
const navigationTypeProptype = PropTypes.oneOf(Object.values(NavigationType));
const dotsPropType = PropTypes.shape({
  areDotsSet: PropTypes.bool,
  position: navigationPositionProptype,
  dotSize: PropTypes.number,
  dotColor: PropTypes.string,
  dotRadius: PropTypes.number,
  dotSpacing: PropTypes.number,
});
const imageBehaviorPropType = PropTypes.oneOf(Object.values(ImageBehavior));

export const arrowPropTypes = {
  direction: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  arrowIcon: PropTypes.func,
  arrowIconSize: PropTypes.number,
  arrowColor: PropTypes.string,
  arrowBackground: PropTypes.string,
  arrowSize: PropTypes.number,
  arrowRounding: PropTypes.number,
};

export const navigatorPropTypes = {
  navigationType: navigationTypeProptype,
  navigationPosition: navigationPositionProptype,
  navigationWidth: PropTypes.string,
  navigationSideMargin: PropTypes.number,
  navigationArrows: PropTypes.shape(arrowPropTypes),
  onNavigate: PropTypes.func,
  imagesLength: PropTypes.number,
  currentIndex: PropTypes.number,
  galleryMode: galleryModePropType,
};

export const blurEffectPropTypes = {
  blur: PropTypes.bool,
  blurAmount: PropTypes.number,
  src: PropTypes.string,
  effects: PropTypes.shape({
    opacity: PropTypes.number,
    transitionDuration: PropTypes.string,
  }),
};

export const imageProptypes = {
  imagesLength: PropTypes.number,
  currentIndex: PropTypes.number,
  index: PropTypes.number,
  imageBehavior: imageBehaviorPropType,
  effect: effectPropType,
  effectSpeed: PropTypes.number,
  imageBlur: PropTypes.shape({
    blur: PropTypes.bool.isRequired,
    blurAmount: PropTypes.number,
  }),
  images: imagesPropType,
};

export const galleryWrapperPropTypes = {
  imagesLength: PropTypes.number,
  currentIndex: PropTypes.number,
  effect: effectPropType,
  effectSpeed: PropTypes.number,
};

export const dotNavigatorpropTypes = {
  onClick: PropTypes.func,
  dotsNavigation: PropTypes.shape({
    areDotsSet: PropTypes.bool.isRequired,
    position: navigationPositionProptype,
    dotSize: PropTypes.number,
    dotColor: PropTypes.string,
    dotRadius: PropTypes.number,
    dotSpacing: PropTypes.number,
  }),
  imagesLength: PropTypes.number,
  setGalleryIndex: PropTypes.func,
  currentIndex: PropTypes.number,
};

export const dotPropTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  radius: PropTypes.number,
  margin: PropTypes.number,
  isSelected: PropTypes.bool,
};

export const galleryPropTypes = {
  effect: effectPropType,
  effectSpeed: PropTypes.number,
  mode: galleryModePropType,
  ratio: PropTypes.arrayOf(PropTypes.number),
  imageBehavior: imageBehaviorPropType,
  blur: PropTypes.bool,
  blurAmount: PropTypes.number,
  navigationType: navigationTypeProptype,
  navigationPosition: navigationPositionProptype,
  navigationWidth: PropTypes.string,
  navigationSideMargin: PropTypes.number,
  navigationArrows: PropTypes.shape({
    areArrowsSet: PropTypes.bool.isRequired,
    arrowIcon: PropTypes.func,
    arrowIconSize: PropTypes.number,
    arrowColor: PropTypes.string,
    arrowBackground: PropTypes.string,
    arrowSize: PropTypes.number,
    arrowRounding: PropTypes.number,
  }),
  dotsNavigation: dotsPropType,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
};
