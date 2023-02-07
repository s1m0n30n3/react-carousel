import React from "react";

import { classNames } from "helpers";
import { ImageBehavior, TransitionEffect } from "constants";
import { imageProptypes } from "proptypes/index";
import { useImageTransition } from "hooks";

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
    <div
      role="listitem"
      className={
        isFadeEffect ? "wrapper--fade-effect" : "wrapper--slide-effect"
      }
    >
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
          "image--base",
          isFadeEffect && "image--fade-effect",
          isFullWidth && "image--full-format",
          isContained && "image--contained-format",
          isInOutSlideEffect && "image--inOutSlide-effect",
          isCurrentSlide && "image--selected",
        ])}
        style={{ ...effects[effect] }}
      />
    </div>
  );
};

Image.propTypes = imageProptypes;

Image.displayName = "Gallery.Image";
