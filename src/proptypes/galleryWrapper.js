import PropTypes from "prop-types";

import { effectProps } from "./common";

export const galleryWrapperPropTypes = {
  imagesLength: PropTypes.number,
  currentIndex: PropTypes.number,
  effect: PropTypes.oneOf(effectProps),
  effectSpeed: PropTypes.number,
};
