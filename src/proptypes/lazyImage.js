import PropTypes from "prop-types";

export const lazyImagepropTypes = {
  src: PropTypes.string,
  imageLoad: PropTypes.shape({
    icon: PropTypes.func,
    size: PropTypes.number,
  }),
};
