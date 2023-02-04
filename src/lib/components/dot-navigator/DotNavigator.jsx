import React from "react";

import { Dot } from "components/dot";
import { useNavPosition } from "hooks";
import { dotNavigatorpropTypes } from "proptypes";

import { base } from "styles/dot-navigator.module.css";

export const DotNavigator = ({
  onClick,
  dotsNavigation,
  imagesLength,
  setGalleryIndex,
  currentIndex,
  ...props
}) => {
  const { areDotsSet, position, dotSize, dotColor, dotRadius, dotSpacing } =
    dotsNavigation;
  const navPosition = useNavPosition({ size: dotSize, position });

  if (!areDotsSet) return null;

  const dotsAmount = [...Array(imagesLength).keys()];

  return (
    <div {...props} className={base} onClick={onClick} {...navPosition}>
      {dotsAmount.map((index) => {
        return (
          <Dot
            key={index}
            data-cy={`dot-navigator-${index}`}
            color={dotColor}
            size={dotSize}
            radius={dotRadius}
            margin={dotSpacing}
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
