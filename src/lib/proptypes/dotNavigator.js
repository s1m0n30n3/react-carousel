import PropTypes from "prop-types";

import { dotsProps } from "./common";

export const dotNavigatorpropTypes = {
  onClick: PropTypes.func,
  dots: PropTypes.shape(dotsProps),
  imagesLength: PropTypes.number,
  setGalleryIndex: PropTypes.func,
  currentIndex: PropTypes.number,
};
