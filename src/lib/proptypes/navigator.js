import PropTypes from "prop-types";

import { navigationPropTypes, galleryModeProps } from "./common";

export const navigatorPropTypes = {
  navigation: PropTypes.shape(navigationPropTypes),
  arrows: PropTypes.shape({
    direction: PropTypes.oneOf(["top", "right", "bottom", "left"]),
    icon: PropTypes.func,
    iconSize: PropTypes.number,
    color: PropTypes.string,
    background: PropTypes.string,
    size: PropTypes.number,
    radius: PropTypes.number,
  }),
  onNavigate: PropTypes.func,
  imagesLength: PropTypes.number,
  currentIndex: PropTypes.number,
  galleryMode: PropTypes.oneOf(galleryModeProps),
};
