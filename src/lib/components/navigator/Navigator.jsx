import React from "react";

import { Arrow } from "components/arrow";
import { navigatorPropTypes } from "proptypes";
import { CarouselAction, GalleryMode } from "constants";
import { useNavPosition, useNavType } from "hooks";

import { base } from "styles/navigator.module.css";
import { isEmptyObject } from "helpers/isEmptyObject";

export const Navigator = ({
  navigationType: type,
  navigationPosition: position,
  navigationWidth: width,
  navigationSideMargin: margin,
  navigationArrows,
  onNavigate,
  imagesLength,
  currentIndex,
  galleryMode,
  ...props
}) => {
  const { arrowSize, areArrowsSet, ...arrowProps } = navigationArrows;
  const widthProp = `calc(${width} - ${margin}px)`;

  const { style: navPosition } = useNavPosition({ size: arrowSize, position });
  const { style: navType } = useNavType({ width: widthProp, type });

  if (!areArrowsSet) return null;

  const isLastSlide = imagesLength - 1 === currentIndex;
  const isFirstSlide = currentIndex === 0;

  const mergedProps = { ...navType, ...navPosition };
  const style = isEmptyObject({ ...navType, ...navPosition })
    ? {}
    : { style: mergedProps };

  return (
    <div {...props} role="group" className={base} {...style}>
      <Arrow
        {...arrowProps}
        data-cy="arrow-left"
        arrowSize={arrowSize}
        disabled={galleryMode === GalleryMode.BOUNDED && isFirstSlide}
        direction="left"
        onClick={() => onNavigate({ action: CarouselAction.PREV })}
      />
      <Arrow
        {...arrowProps}
        data-cy="arrow-right"
        arrowSize={arrowSize}
        disabled={galleryMode === GalleryMode.BOUNDED && isLastSlide}
        direction="right"
        onClick={() => onNavigate({ action: CarouselAction.NEXT })}
      />
    </div>
  );
};

Navigator.propTypes = navigatorPropTypes;

Navigator.displayName = "Gallery.Navigator";
