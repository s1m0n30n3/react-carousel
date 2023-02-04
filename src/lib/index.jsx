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
  navigation = {
    type: NavigationType.ONLY_ARROWS,
    position: NavigationPosition.TOP,
    width: "100%",
    sideMargin: 32,
  },
  arrows = {
    areSet: true,
    size: 32,
    color: "#ffffff",
    background: "#000000",
    radius: 16,
    icon: Arrow,
    iconSize: 24,
  },
  dots = {
    areSet: true,
    color: "#ffffff",
    size: 12,
    radius: 6,
    spacing: 3,
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
      navigation.type
    ) &&
    navigation.type !== NavigationType.NONE &&
    arrows.areSet;

  const areDotsVisible =
    [NavigationType.ARROWS_AND_DOTS, NavigationType.ONLY_DOTS].includes(
      navigation.type
    ) &&
    navigation.type !== NavigationType.NONE &&
    dots.areSet;

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
            arrows={arrows}
            navigation={navigation}
            galleryMode={mode}
            imagesLength={imagesLength}
            currentIndex={galleryIndex}
            onNavigate={handleNavigation}
          />
        )}
        {areDotsVisible && (
          <DotNavigator
            dots={dots}
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
