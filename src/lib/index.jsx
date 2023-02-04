import React, { useMemo, useRef } from "react";
import { nanoid } from "nanoid";

import { Root } from "components/root";
import { Carousel } from "components/carousel";
import { CarouselMask } from "components/carousel-mask";
import { GalleryWrapper } from "components/gallery-wrapper";
import { Image } from "components/image";
import { Navigator } from "components/navigator";
import { DotNavigator } from "components/dot-navigator";

import { useGallery, useScreenRatio } from "hooks";
import { galleryPropTypes } from "proptypes";
import { handleOnMouseDrag } from "helpers/handleOnMouseDrag";
import {
  GalleryMode,
  TransitionEffect,
  MouseEvent,
  ImageBehavior,
  GalleryRatio,
  NavigationType,
  NavigationPosition,
} from "constants";

import { ReactComponent as Arrow } from "assets/icons/chevron-right.svg";

export const Gallery = ({
  effect = TransitionEffect.FADE,
  effectSpeed = 400,
  mode = GalleryMode.RETURN,
  ratio = GalleryRatio.R16_10,
  imageBehavior = ImageBehavior.CONTAINED,
  blur = true,
  blurAmount = 20,
  navigationType = NavigationType.ONLY_ARROWS,
  navigationPosition = NavigationPosition.TOP,
  navigationWidth = "100%",
  navigationSideMargin = 32,
  navigationArrows = {
    areArrowsSet: true,
    arrowIcon: Arrow,
    arrowIconSize: 24,
    arrowColor: "#ffffff",
    arrowBackground: "#000000",
    arrowSize: 32,
    arrowRounding: 16,
  },
  dotsNavigation = {
    areDotsSet: true,
    dotColor: "#ffffff",
    dotSize: 12,
    dotRadius: 6,
    dotSpacing: 3,
    position: NavigationPosition.BOTTOM,
  },
  images = [],
  ...styleProps
}) => {
  const galleryRef = useRef(null);
  const imagesLength = images.length;
  const { handleNavigation, onMouseDrag, galleryIndex, setGalleryIndex } =
    useGallery({
      imagesLength,
      mode,
      effectSpeed,
    });

  const rootHeight = useScreenRatio({
    ref: galleryRef,
    ratio,
  });

  const memoImages = useMemo(() => {
    return images.map((image) => ({
      ...image,
      id: nanoid(),
    }));
  }, [images]);

  const areArrowsVisible =
    [NavigationType.ARROWS_AND_DOTS, NavigationType.ONLY_ARROWS].includes(
      navigationType
    ) &&
    navigationType !== NavigationType.NONE &&
    navigationArrows.areArrowsSet;

  const areDotsVisible =
    [NavigationType.ARROWS_AND_DOTS, NavigationType.ONLY_DOTS].includes(
      navigationType
    ) &&
    navigationType !== NavigationType.NONE &&
    dotsNavigation.areDotsSet;

  return (
    <Root style={{ height: rootHeight, ...styleProps }} ref={galleryRef}>
      <Carousel>
        <CarouselMask>
          <GalleryWrapper
            effect={effect}
            imagesLength={imagesLength}
            currentIndex={galleryIndex}
            effectSpeed={effectSpeed}
            onMouseDown={(event) =>
              handleOnMouseDrag({
                property: event,
                callback: onMouseDrag,
                action: MouseEvent.START,
              })
            }
            onMouseUp={(event) =>
              handleOnMouseDrag({
                property: event,
                callback: onMouseDrag,
                action: MouseEvent.END,
              })
            }
            onTouchStart={({ changedTouches = [] }) =>
              handleOnMouseDrag({
                property: changedTouches[0],
                callback: onMouseDrag,
                action: MouseEvent.START,
              })
            }
            onTouchEnd={({ changedTouches = [] }) =>
              handleOnMouseDrag({
                property: changedTouches[0],
                callback: onMouseDrag,
                action: MouseEvent.END,
              })
            }
          >
            {memoImages?.map(({ id, src, alt }, index) => {
              return (
                <Image
                  key={id}
                  effect={effect}
                  images={images}
                  index={index}
                  currentIndex={galleryIndex}
                  imageBehavior={imageBehavior}
                  effectSpeed={effectSpeed}
                  imageBlur={{ blur, blurAmount }}
                >
                  <img src={src} alt={alt} draggable={false} />
                </Image>
              );
            })}
          </GalleryWrapper>
        </CarouselMask>
        {areArrowsVisible && (
          <Navigator
            galleryMode={mode}
            imagesLength={imagesLength}
            currentIndex={galleryIndex}
            navigationType={navigationType}
            navigationPosition={navigationPosition}
            navigationWidth={navigationWidth}
            navigationSideMargin={navigationSideMargin}
            navigationArrows={navigationArrows}
            onNavigate={handleNavigation}
          />
        )}
        {areDotsVisible && (
          <DotNavigator
            dotsNavigation={dotsNavigation}
            imagesLength={memoImages.length}
            setGalleryIndex={setGalleryIndex}
            currentIndex={galleryIndex}
          />
        )}
      </Carousel>
    </Root>
  );
};

Gallery.propTypes = galleryPropTypes;

Gallery.defisplayName = "Gallery";
