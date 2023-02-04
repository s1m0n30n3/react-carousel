import PropTypes from "prop-types";

export const arrowPropTypes = {
  direction: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  icon: PropTypes.func,
  iconSize: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
  size: PropTypes.number,
  radius: PropTypes.number,
};
