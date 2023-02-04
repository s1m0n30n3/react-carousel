import React from "react";

import { classNames } from "helpers";
import { useDotStyles } from "hooks";
import { dotPropTypes } from "proptypes";

import { base, selected } from "styles/dot.module.css";

export const Dot = ({ size, color, radius, margin, isSelected, ...props }) => {
  const dotStyles = useDotStyles({
    size,
    color,
    radius,
    margin,
  });

  return (
    <button
      {...props}
      className={classNames([base, isSelected && selected])}
      {...dotStyles}
    />
  );
};

Dot.propTypes = dotPropTypes;

Dot.displayName = "Gallery.Dot";
