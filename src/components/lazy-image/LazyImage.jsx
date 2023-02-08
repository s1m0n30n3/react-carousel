import React, { useLayoutEffect } from "react";

import { useLazyLoading } from "hooks";
import { lazyImagepropTypes } from "proptypes/index";

export const LazyImage = ({ src, imageLoad, ...props }) => {
  const { icon: Icon, size } = imageLoad;
  const { onImageLoad, isLoaded } = useLazyLoading({ src });

  useLayoutEffect(() => {
    const initialImage = new Image();
    initialImage.src = src;
    onImageLoad(initialImage);
  }, [src, onImageLoad]);

  if (!isLoaded) return <Icon fontSize={size} />;
  return <img src={src} {...props} />;
};

LazyImage.propTypes = lazyImagepropTypes;
LazyImage.displayName = "Gallery.LazyImage";
