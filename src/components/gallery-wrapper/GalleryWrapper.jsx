import React from "react";

import { classNames } from "helpers";
import { TransitionEffect } from "constants";
import { useGalleryTransition } from "hooks";
import { galleryWrapperPropTypes } from "proptypes";

import { base, fade, slide } from "styles/gallery-wrapper.module.css";

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
        base,
        isFadeEffect && fade,
        isSlideEffect && slide,
      ])}
      style={effects[effect]}
    />
  );
};

GalleryWrapper.propTypes = galleryWrapperPropTypes;

GalleryWrapper.displayName = "Gallery.GalleryWrapper";
