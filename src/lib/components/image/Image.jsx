import React from "react";

import { classNames } from "helpers";
import { ImageBehavior, TransitionEffect } from "constants";
import { imageProptypes } from "proptypes/index";
import { useImageTransition } from "hooks";

import {
  wrapperFade,
  wrapperSlide,
  base,
  fade,
  full,
  contained,
  inOutSlide,
} from "styles/image.module.css";

import { BlurEffect } from "./BlurEffect";

export const Image = ({
  effect,
  index,
  currentIndex,
  images,
  imageBehavior,
  effectSpeed,
  imageBlur,
  ...props
}) => {
  const isFullWidth = imageBehavior === ImageBehavior.FULL;
  const isContained = imageBehavior === ImageBehavior.CONTAINED;
  const isFadeEffect = effect === TransitionEffect.FADE;
  const isInOutSlideEffect = effect === TransitionEffect.IN_OUT_SLIDE;
  const isCurrentSlide = index === currentIndex;

  const effects = useImageTransition({ isCurrentSlide, effectSpeed });

  return (
    <div role="listitem" className={isFadeEffect ? wrapperFade : wrapperSlide}>
      {!isFullWidth && !!imageBlur.blur && (
        <BlurEffect
          effects={effects[effect]}
          src={images[index]?.src}
          {...imageBlur}
        />
      )}
      <figure
        {...props}
        data-cy={`image-slide-${index}`}
        className={classNames([
          base,
          isFadeEffect && fade,
          isFullWidth && full,
          isContained && contained,
          isInOutSlideEffect && inOutSlide,
          isCurrentSlide && "image-selected",
        ])}
        style={{ ...effects[effect] }}
      />
    </div>
  );
};

Image.propTypes = imageProptypes;

Image.displayName = "Gallery.Image";
