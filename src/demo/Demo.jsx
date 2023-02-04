import React, { useState } from "react";

import { Gallery } from "../lib";
import { GalleryControls } from "./GalleryControls";
import { TransitionControls } from "./TransitionControls";
import { NavigatorControls } from "./NavigatorControls";
import { ImagesControls } from "./ImagesControls";
import { BlurControls } from "./BlurControls";
import { ArrowControls } from "./ArrowsControls";

import { ReactComponent as Arrow } from "../assets/icons/chevron-right.svg";

import slide1 from "../assets/images/slide-1.jpg";
import slide2 from "../assets/images/slide-2.jpg";
import slide3 from "../assets/images/slide-3.jpg";
import slide4 from "../assets/images/slide-4.jpg";
import slide5 from "../assets/images/slide-5.png";
import slide6 from "../assets/images/slide-6.jpg";
import { DotControls } from "./DotsControl";

const images = [
  { src: slide1, alt: "Mac" },
  { src: slide2, alt: "Mac" },
  { src: slide3, alt: "Mac" },
  { src: slide4, alt: "Mac" },
  { src: slide5, alt: "Mac" },
  { src: slide6, alt: "Mac" },
];

export const Demo = () => {
  const [navigationType, setNavigationTypes] = useState("onlyArrows");
  const [navigationPosition, setNavigationPosition] = useState("center");
  const [effect, setEffect] = useState("slide");
  const [effectSpeed, setEffectSpeed] = useState(300);
  const [galleryWidth, setGalleryWidth] = useState("100%");
  const [galleryMode, setGalleryMode] = useState("return");
  const [galleryRatio, setGalleryRatio] = useState([16, 9]);
  const [imageBehavior, setImageBehavior] = useState("full");
  const [useBlur, setUseBlur] = useState(true);
  const [blurAmount, setBlurAmount] = useState(20);
  const [navigationWidth, setNavigationWidth] = useState("100%");
  const [navigationSideMargin, setNavigationSideMargin] = useState(32);
  const [arrowProps, setArrowProps] = useState({
    areArrowsSet: true,
    arrowIcon: Arrow,
    arrowIconSize: 24,
    arrowColor: "#ffffff",
    arrowBackground: "#000000",
    arrowSize: 32,
    arrowRounding: 16,
  });
  const [dotsProps, setDotsProps] = useState({
    areDotsSet: true,
    dotColor: "#ffffff",
    dotSize: 12,
    dotRadius: 6,
    dotSpacing: 3,
    position: "bottom",
  });

  return (
    <>
      <Gallery
        images={images}
        effect={effect}
        effectSpeed={effectSpeed}
        mode={galleryMode}
        ratio={galleryRatio}
        imageBehavior={imageBehavior}
        blur={useBlur}
        blurAmount={blurAmount}
        navigationType={navigationType}
        navigationPosition={navigationPosition}
        navigationWidth={navigationWidth}
        navigationSideMargin={navigationSideMargin}
        navigationArrows={arrowProps}
        dotsNavigation={dotsProps}
        width={galleryWidth}
        margin="auto"
      />
      <div className="controls">
        <GalleryControls
          setGalleryMode={setGalleryMode}
          setGalleryRatio={setGalleryRatio}
          setGalleryWidth={setGalleryWidth}
          galleryMode={galleryMode}
          galleryRatio={galleryRatio}
          galleryWidth={galleryWidth}
        />
        <TransitionControls
          setEffect={setEffect}
          setEffectSpeed={setEffectSpeed}
          effect={effect}
          effectSpeed={effectSpeed}
        />
        <NavigatorControls
          setNavigationPosition={setNavigationPosition}
          setNavigationSideMargin={setNavigationSideMargin}
          setNavigationTypes={setNavigationTypes}
          setNavigationWidth={setNavigationWidth}
          navigationWidth={navigationWidth}
          navigationPosition={navigationPosition}
          navigationSideMargin={navigationSideMargin}
          navigationType={navigationType}
        />
        <ImagesControls
          setImageBehavior={setImageBehavior}
          imageBehavior={imageBehavior}
        />
        <BlurControls
          setBlurAmount={setBlurAmount}
          setUseBlur={setUseBlur}
          blurAmount={blurAmount}
          useBlur={useBlur}
        />
        <ArrowControls setArrowProps={setArrowProps} arrowProps={arrowProps} />
        <DotControls setDotsProps={setDotsProps} dotsProps={dotsProps} />
      </div>
    </>
  );
};
