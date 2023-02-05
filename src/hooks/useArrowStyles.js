import { useMemo } from "react";

import { isEmptyObject } from "helpers";

export const useArrowStyles = ({
  direction,
  size,
  radius,
  iconSize,
  background,
}) => {
  return useMemo(() => {
    const rotation = {
      top: "270deg",
      right: "0deg",
      bottom: "90deg",
      left: "180deg",
    };

    const backgroundColorProps = background ? { background } : {};
    const sizeProps = size ? { width: `${size}px`, height: `${size}px` } : {};
    const radiusProps = radius ? { borderRadius: `${radius}px` } : {};
    const fontSizeProps = iconSize ? { fontSize: `${iconSize}px` } : {};
    const directionProps = direction
      ? { transform: `rotate(${rotation[direction]})` }
      : {};

    const styleObject = {
      ...backgroundColorProps,
      ...sizeProps,
      ...radiusProps,
      ...fontSizeProps,
      ...directionProps,
    };

    return isEmptyObject(styleObject) ? {} : { style: { ...styleObject } };
  }, [background, size, radius, iconSize, direction]);
};
