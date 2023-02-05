import { NavigationPosition } from "constants";
import { isEmptyObject } from "helpers";

export const useNavPosition = ({ size, position }) => {
  const navPosition = (position) => {
    switch (position) {
      case NavigationPosition.BOTTOM:
        return { bottom: `${size / 2 + 12}px` };
      case NavigationPosition.BOTTOM_OUTSIDE:
        return { bottom: `-${size + 12}px` };
      case NavigationPosition.CENTER:
        return { bottom: 0, top: 0 };
      case NavigationPosition.TOP:
        return { top: `${size / 2 + 12}px` };
      default:
        return {};
    }
  };

  return isEmptyObject(navPosition(position))
    ? {}
    : { style: navPosition(position) };
};
