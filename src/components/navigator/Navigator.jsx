import React from "react";

import { Arrow } from "components/arrow";
import { navigatorPropTypes } from "proptypes";
import { CarouselAction, GalleryMode } from "constants";
import { useNavPosition, useNavType } from "hooks";

import { isEmptyObject } from "helpers/isEmptyObject";

export const Navigator = ({
  navigation = {},
  arrows = {},
  onNavigate,
  imagesLength,
  currentIndex,
  galleryMode,
  ...props
}) => {
  const { type, position, width, sideMargin } = navigation;
  const { size, areSet, ...arrowProps } = arrows;

  const widthProp = `calc(${width} - ${sideMargin}px)`;

  const { style: navPosition } = useNavPosition({ size, position });
  const { style: navType } = useNavType({ width: widthProp, type });

  if (!areSet) return null;

  const isLastSlide = imagesLength - 1 === currentIndex;
  const isFirstSlide = currentIndex === 0;

  const mergedProps = { ...navType, ...navPosition };
  const style = isEmptyObject({ ...navType, ...navPosition })
    ? {}
    : { style: mergedProps };

  return (
    <div {...props} role="group" className="navigator--base" {...style}>
      <Arrow
        {...arrowProps}
        data-cy="arrow-left"
        size={size}
        disabled={galleryMode === GalleryMode.BOUNDED && isFirstSlide}
        direction="left"
        onClick={() => onNavigate({ action: CarouselAction.PREV })}
      />
      <Arrow
        {...arrowProps}
        data-cy="arrow-right"
        size={size}
        disabled={galleryMode === GalleryMode.BOUNDED && isLastSlide}
        direction="right"
        onClick={() => onNavigate({ action: CarouselAction.NEXT })}
      />
    </div>
  );
};

Navigator.propTypes = navigatorPropTypes;

Navigator.displayName = "Gallery.Navigator";
