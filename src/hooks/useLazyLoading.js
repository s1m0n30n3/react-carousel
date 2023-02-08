import { useCallback, useState } from "react";

export const useLazyLoading = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const onImageLoad = useCallback(
    (image) => {
      image.onload = () => {
        return setIsLoaded(true);
      };
      return setIsLoaded(false);
    },
    [setIsLoaded]
  );

  return { onImageLoad, isLoaded };
};
