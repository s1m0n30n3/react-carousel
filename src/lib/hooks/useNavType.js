import { NavigationType } from "constants";
import { isEmptyObject } from "helpers";

export const useNavType = ({ width, type }) => {
  const navType = (typeOfNav) => {
    switch (typeOfNav) {
      case NavigationType.NONE:
        return {
          display: "none",
        };
      case NavigationType.ARROWS_AND_DOTS:
      case NavigationType.ONLY_ARROWS:
      case NavigationType.ONLY_DOTS:
        return {
          width,
        };
      default:
        return {};
    }
  };

  return isEmptyObject(navType(type)) ? {} : { style: navType(type) };
};
