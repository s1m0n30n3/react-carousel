import React from "react";

import { Dot } from "components/dot";
import { useNavPosition } from "hooks";
import { dotNavigatorpropTypes } from "proptypes";

import { base } from "styles/dot-navigator.module.css";

export const DotNavigator = ({
  onClick,
  dots = {},
  imagesLength,
  setGalleryIndex,
  currentIndex,
  ...props
}) => {
  const { areSet, position, size, color, radius, spacing } = dots;
  const navPosition = useNavPosition({ size, position });

  if (!areSet) return null;

  const dotsAmount = [...Array(imagesLength).keys()];

  return (
    <div {...props} className={base} onClick={onClick} {...navPosition}>
      {dotsAmount.map((index) => {
        return (
          <Dot
            key={index}
            data-cy={`dot-navigator-${index}`}
            color={color}
            size={size}
            radius={radius}
            margin={spacing}
            isSelected={currentIndex === index}
            onClick={() => setGalleryIndex(index)}
          />
        );
      })}
    </div>
  );
};

DotNavigator.propTypes = dotNavigatorpropTypes;

DotNavigator.displayName = "Gallery.DotNavigator";
