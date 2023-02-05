import { useMemo } from "react";

import { isEmptyObject } from "helpers";

export const useDotStyles = ({ size, radius, color, margin }) => {
  return useMemo(() => {
    const dotSize = size ? { width: `${size}px`, height: `${size}px` } : {};
    const dotRadius = radius ? { borderRadius: `${radius}px` } : {};
    const dotColor = color ? { backgroundColor: color } : {};
    const dotMargin = margin
      ? { marginLeft: `${margin}px`, marginRight: `${margin}px` }
      : {};

    const styleObject = {
      ...dotSize,
      ...dotRadius,
      ...dotColor,
      ...dotMargin,
    };

    return isEmptyObject(styleObject) ? {} : { style: { ...styleObject } };
  }, [size, radius, color, margin]);
};
