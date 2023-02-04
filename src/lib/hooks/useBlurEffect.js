import { useMemo } from "react";

export const useBlurEffect = ({ blur, blurAmount, src }) => {
  return useMemo(
    () => ({
      filter: blur ? `blur(${blurAmount}px)` : "initial",
      backgroundImage: blur && src ? `url(${src})` : "initial",
      width: blur ? `calc(100% + ${blurAmount * 2}px)` : "100%",
      height: blur ? `calc(100% + ${blurAmount * 2}px)` : "100%",
      top: blur && blurAmount !== 0 ? `-${blurAmount}px` : 0,
      left: blur && blurAmount !== 0 ? `-${blurAmount}px` : 0,
      zIndex: 0,
    }),
    [blur, blurAmount, src]
  );
};
