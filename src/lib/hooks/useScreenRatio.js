import { useEffect, useState } from "react";

import { setElementRatio } from "../helpers";

export const useScreenRatio = ({ ratio, ref }) => {
  const [heightRatio, setHeightRatio] = useState(800);

  useEffect(() => {
    if (ratio) {
      const resizeObserver = new ResizeObserver(([target]) => {
        return setElementRatio({ target, callback: setHeightRatio, ratio });
      });
      resizeObserver.observe(ref.current);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [ref, ratio]);

  return Math.round(heightRatio);
};
