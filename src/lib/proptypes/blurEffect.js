import PropTypes from "prop-types";

export const blurEffectPropTypes = {
  blur: PropTypes.bool,
  blurAmount: PropTypes.number,
  src: PropTypes.string,
  effects: PropTypes.shape({
    opacity: PropTypes.number,
    transitionDuration: PropTypes.string,
  }),
};
