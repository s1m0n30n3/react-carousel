import React from "react";

import { Gallery } from "../src/index";

import { ReactComponent as Arrow } from "../assets/icons/chevron-right.svg";

import slide1 from "../assets/images/slide-1.jpg";
import slide2 from "../assets/images/slide-2.jpg";
import slide3 from "../assets/images/slide-3.jpg";
import slide4 from "../assets/images/slide-4.jpg";
import slide5 from "../assets/images/slide-5.jpg";
import slide6 from "../assets/images/slide-6.jpg";

const images = [
  {
    src: "https://images.unsplash.com/photo-1661956602868-6ae368943878",
    alt: "Mac",
  },
];

export const Demo = () => {
  return (
    <Gallery
      images={images}
      width="100%"
      effect="slide"
      effectSpeed={300}
      mode="return"
      ratio={[16, 10]}
      imageBehavior="full"
      blur
      blurAmount={20}
      navigation={{
        type: "arrowsAndDots",
        position: "center",
        width: "100%",
        sideMargin: 32,
      }}
      arrows={{
        areSet: true,
        icon: Arrow,
        iconSize: 24,
        color: "#ffffff",
        background: "#000000",
        size: 32,
        radius: 16,
      }}
      dots={{
        areSet: true,
        color: "#ffffff",
        size: 12,
        radius: 6,
        spacing: 3,
        position: "bottom",
      }}
    />
  );
};
