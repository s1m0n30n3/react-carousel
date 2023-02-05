import React from "react";

import { useBlurEffect } from "hooks";
import { blurEffectPropTypes } from "proptypes/index";

import { base } from "styles/blur-effect.module.css";

export const BlurEffect = ({ effects, blur, blurAmount, src, ...props }) => {
  const blurProps = useBlurEffect({ blur, blurAmount, src });

  return (
    <div {...props} className={base} style={{ ...effects, ...blurProps }} />
  );
};

BlurEffect.propTypes = blurEffectPropTypes;

BlurEffect.displayName = "Gallery.BlurEffect";
