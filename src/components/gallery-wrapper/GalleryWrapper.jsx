import React from "react";

import { classNames } from "helpers";
import { TransitionEffect } from "constants";
import { useGalleryTransition } from "hooks";
import { galleryWrapperPropTypes } from "proptypes";

export const GalleryWrapper = ({
  imagesLength,
  currentIndex,
  effect,
  effectSpeed,
  ...props
}) => {
  const isFadeEffect = effect === TransitionEffect.FADE;
  const isSlideEffect = effect === TransitionEffect.SLIDE;

  const effects = useGalleryTransition({
    imagesLength,
    currentIndex,
    effectSpeed,
  });

  return (
    <div
      {...props}
      role="listbox"
      className={classNames([
        "gallery-wrapper--base",
        isFadeEffect && "gallery-wrapper--fade-effect",
        isSlideEffect && "gallery-wrapper--slide-effect",
      ])}
      style={effects[effect]}
    />
  );
};

GalleryWrapper.propTypes = galleryWrapperPropTypes;

GalleryWrapper.displayName = "Gallery.GalleryWrapper";
