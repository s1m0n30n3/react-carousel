import React from "react";

import { useBlurEffect } from "hooks";
import { blurEffectPropTypes } from "proptypes/index";

export const BlurEffect = ({ effects, blur, blurAmount, src, ...props }) => {
  const blurProps = useBlurEffect({ blur, blurAmount, src });

  return (
    <div
      {...props}
      className="blur--base"
      style={{ ...effects, ...blurProps }}
    />
  );
};

BlurEffect.propTypes = blurEffectPropTypes;

BlurEffect.displayName = "Gallery.BlurEffect";
