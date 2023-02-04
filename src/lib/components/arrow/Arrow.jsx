import React from "react";

import { useArrowStyles } from "hooks";
import { arrowPropTypes } from "proptypes";

import { base } from "styles/arrow.module.css";

export const Arrow = ({
  direction,
  icon: Icon,
  iconSize,
  color,
  background,
  size,
  radius,
  ...props
}) => {
  const buttonStyles = useArrowStyles({
    background,
    size,
    iconSize,
    radius,
    direction,
  });

  return (
    <button {...props} className={base} {...buttonStyles}>
      <Icon fill={color} />
    </button>
  );
};

Arrow.propTypes = arrowPropTypes;

Arrow.displayName = "Gallery.Arrow";
