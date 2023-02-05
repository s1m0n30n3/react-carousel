import React, { useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";

export const LazyImage = ({ src, loading, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useLayoutEffect(() => {
    const initialImage = new Image();
    initialImage.onload = () => {
      return setIsLoaded(true);
    };
    initialImage.src = src;
    return setIsLoaded(false);
  }, [src]);

  if (!isLoaded) {
    return <loading.icon fontSize={loading.size} />;
  }

  return <img src={src} {...props} />;
};

LazyImage.propTypes = {
  src: PropTypes.string,
  loading: PropTypes.shape({
    icon: PropTypes.func,
    size: PropTypes.number,
  }),
};
