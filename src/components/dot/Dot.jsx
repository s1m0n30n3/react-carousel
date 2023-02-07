import React from "react";

import { classNames } from "helpers";
import { useDotStyles } from "hooks";
import { dotPropTypes } from "proptypes";

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
      className={classNames(["dot--base", isSelected && "dot--selected"])}
      {...dotStyles}
    />
  );
};

Dot.propTypes = dotPropTypes;

Dot.displayName = "Gallery.Dot";
