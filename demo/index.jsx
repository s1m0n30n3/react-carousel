import React, { useState } from "react";

import { Gallery } from "../src/index";
import {
  TransitionEffect,
  GalleryMode,
  ImageBehavior,
  NavigationType,
  NavigationPosition,
} from "constants";
import "./styles.css";

import { ReactComponent as Arrow } from "../assets/icons/chevron-right.svg";

import slide1 from "../assets/images/slide-1.jpg";
import slide2 from "../assets/images/slide-2.jpg";
import slide3 from "../assets/images/slide-3.jpg";
import slide4 from "../assets/images/slide-4.jpg";
import slide5 from "../assets/images/slide-5.jpg";
import slide6 from "../assets/images/slide-6.jpg";

const images = [
  {
    src: slide1,
    alt: "Mac",
  },
  {
    src: slide2,
    alt: "Mac",
  },
  {
    src: slide3,
    alt: "Mac",
  },
  {
    src: slide4,
    alt: "Mac",
  },
  {
    src: slide5,
    alt: "Mac",
  },
  {
    src: slide6,
    alt: "Mac",
  },
];

export const Demo = () => {
  const [width, setWidth] = useState("100%");
  const [effect, setEffect] = useState("slide");
  const [effectSpeed, setEffectSpeed] = useState(300);
  const [mode, setMode] = useState("return");
  const [ratio, setRatio] = useState([16, 9]);
  const [imageBehavior, setImageBehavior] = useState("contained");
  const [blur, setBlur] = useState(false);
  const [blurAmount, setBlurAmount] = useState(20);
  const [navType, setNavType] = useState("arrowsAndDots");
  const [navPosition, setNavPosition] = useState("center");
  const [navWidth, setNavWidth] = useState("100%");
  const [navSideMargin, setNavSideMargin] = useState(32);
  const [arrowSet, setArrowSet] = useState(true);
  const [arrowIcon, setArrowIcon] = useState(() => Arrow);
  const [arrowIconSize, setArrowIconSize] = useState(24);
  const [arrowColor, setArrowColor] = useState("#ffffff");
  const [arrowBackground, setArrowBackground] = useState("#000000");
  const [arrowSize, setArrowSize] = useState(32);
  const [arrowRadius, setArrowRadius] = useState(16);
  const [dotsSet, setDotsSet] = useState(true);
  const [dotColor, setDotColor] = useState("#ffffff");
  const [dotSize, setDotSize] = useState(12);
  const [dotRadius, setDotRadius] = useState(6);
  const [dotSpacing, setDotSpacing] = useState(3);
  const [dotPosition, setDotPosition] = useState("bottom");

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [openBoxes, setOpenBoxes] = useState({});

  const handleTextField = (event, callback) => {
    if (event.key === "Enter") return callback(event.target.value);
  };

  const handleNumberField = (event, callback) => {
    if (event.key === "Enter")
      return callback(parseInt(event.target.value, 10));
  };

  const handleSelectField = (event, callback) => {
    return callback(event.target.value);
  };

  const handleBooleanSelectField = (event, callback) => {
    if (event.target.value === "true") return callback(true);
    else return callback(false);
  };

  const handleRatioField = (event, callback) => {
    if (event.key === "Enter") {
      if (event.target.name === "1")
        return callback((prev) => [prev[0], parseInt(event.target.value, 10)]);
      else
        return callback((prev) => [parseInt(event.target.value, 10), prev[1]]);
    }
  };

  const handleColorField = (event, callback) => {
    return callback(event.target.value);
  };

  const renderOptions = (array) => {
    return array.map((value, index) => {
      return (
        <option key={index} value={value}>
          {value}
        </option>
      );
    });
  };

  const onBlockTrigger = (event) => {
    setOpenBoxes((previous) => ({
      ...previous,
      [event.target.id]: !previous[event.target.id],
    }));
  };

  const computeClassName = (boxId) =>
    `setting-block--${openBoxes[boxId] ? "expanded" : "collapsed"}`;

  const onCopyToClipboard = async () => {
    const code = document.querySelector("code");
    const text = code.innerText;

    console.log(text);

    await navigator.clipboard.writeText(text);
  };

  return (
    <div className="demo--base">
      <div
        className={`control-sidebar--base ${
          isSidebarOpen ? "control-sidebar--open" : ""
        }`}
      >
        <div className="sidebar-scroll-body--base">
          <ul>
            {/* <--- GALLERY EFFECTS ---> */}
            <div className={computeClassName("gallery-effects-settings")}>
              <button id="gallery-effects-settings" onClick={onBlockTrigger}>
                Gallery Effects
                <span>
                  {openBoxes["gallery-effects-settings"] ? <>&times;</> : "+"}
                </span>
              </button>
              <li>
                <label htmlFor="effectValue">Effect</label>
                <select
                  id="effectValue"
                  onChange={(event) => handleSelectField(event, setEffect)}
                  defaultValue={width}
                >
                  {renderOptions(Object.values(TransitionEffect))}
                </select>
              </li>
              <li>
                <label htmlFor="widthValue">Effect speed (in ms)</label>
                <input
                  id="widthValue"
                  type="number"
                  step="10"
                  min={0}
                  onKeyDown={(event) =>
                    handleNumberField(event, setEffectSpeed)
                  }
                  defaultValue={effectSpeed}
                />
              </li>
            </div>
            {/* <--- GALLERY SETTINGS ---> */}
            <div className={computeClassName("gallery-settings")}>
              <button id="gallery-settings" onClick={onBlockTrigger}>
                Gallery Settings
                <span>
                  {openBoxes["gallery-settings"] ? <>&times;</> : "+"}
                </span>
              </button>
              <li>
                <label htmlFor="width-value">Gallery Width</label>
                <input
                  id="width-value"
                  type="text"
                  onKeyDown={(event) => handleTextField(event, setWidth)}
                  defaultValue={width}
                />
              </li>
              <li>
                <label htmlFor="effectValue">Gallery Mode</label>
                <select
                  id="effectValue"
                  onChange={(event) => handleSelectField(event, setMode)}
                  defaultValue={mode}
                >
                  {renderOptions(Object.values(GalleryMode))}
                </select>
              </li>
              <li className="ratio-field--base">
                <label>Aspect Ratio</label>
                <div>
                  <input
                    id="aspect-ratio-w"
                    type="number"
                    name="0"
                    onKeyDown={(event) => handleRatioField(event, setRatio)}
                    defaultValue={ratio[0]}
                  />
                  <input
                    id="aspect-ratio-h"
                    type="number"
                    name="1"
                    onKeyDown={(event) => handleRatioField(event, setRatio)}
                    defaultValue={ratio[1]}
                  />
                </div>
              </li>
              <li>
                <label htmlFor="image-behavior">Image behavior</label>
                <select
                  id="image-behavior"
                  onChange={(event) =>
                    handleSelectField(event, setImageBehavior)
                  }
                  defaultValue={imageBehavior}
                >
                  {renderOptions(Object.values(ImageBehavior))}
                </select>
              </li>
            </div>
            {/* <--- BACKGROUND ---> */}
            <div className={computeClassName("image-settings")}>
              <button id="image-settings" onClick={onBlockTrigger}>
                Image Background
                <span>{openBoxes["image-settings"] ? <>&times;</> : "+"}</span>
              </button>
              <li>
                <label htmlFor="image-behavior">Background Blur</label>
                <select
                  id="image-behavior"
                  onChange={(event) => handleBooleanSelectField(event, setBlur)}
                  defaultValue={blur}
                >
                  {renderOptions(["false", "true"])}
                </select>
              </li>
              <li>
                <label htmlFor="blur-amount">Blur amount</label>
                <input
                  id="blur-amount"
                  type="number"
                  min={0}
                  onKeyDown={(event) => handleNumberField(event, setBlurAmount)}
                  defaultValue={blurAmount}
                />
              </li>
            </div>
            {/* <--- NAVIGATION ---> */}
            <div className={computeClassName("nav-settings")}>
              <button id="nav-settings" onClick={onBlockTrigger}>
                Navigation Settings
                <span>{openBoxes["nav-settings"] ? <>&times;</> : "+"}</span>
              </button>
              <li>
                <label htmlFor="navigation-type">Navigation type</label>
                <select
                  id="navigation-type"
                  onChange={(event) => handleSelectField(event, setNavType)}
                  defaultValue={navType}
                >
                  {renderOptions(Object.values(NavigationType))}
                </select>
              </li>
              <li>
                <label htmlFor="navigation-type">Navigation type</label>
                <select
                  id="navigation-type"
                  onChange={(event) => handleSelectField(event, setNavPosition)}
                  defaultValue={navPosition}
                >
                  {renderOptions(Object.values(NavigationPosition))}
                </select>
              </li>
              <li>
                <label htmlFor="navigation-width">Navigation Width</label>
                <input
                  id="navigation-width"
                  type="text"
                  onKeyDown={(event) => handleTextField(event, setNavWidth)}
                  defaultValue={navWidth}
                />
              </li>
              <li>
                <label htmlFor="navigation-side-margin">
                  Navigation side margin
                </label>
                <input
                  id="navigation-side-margin"
                  type="number"
                  min={0}
                  onKeyDown={(event) =>
                    handleNumberField(event, setNavSideMargin)
                  }
                  defaultValue={navSideMargin}
                />
              </li>
            </div>
            {/* <--- ARROWS ---> */}
            <div className={computeClassName("arrow-settings")}>
              <button id="arrow-settings" onClick={onBlockTrigger}>
                Arrows Settings
                <span>{openBoxes["arrow-settings"] ? <>&times;</> : "+"}</span>
              </button>
              <li>
                <label htmlFor="show-arrows">Show Arrows</label>
                <select
                  id="show-arrows"
                  onChange={(event) =>
                    handleBooleanSelectField(event, setArrowSet)
                  }
                  defaultValue={arrowSet}
                >
                  {renderOptions(["false", "true"])}
                </select>
              </li>
              <li>
                <label htmlFor="arrow-icon-size">Arrow Icon Size</label>
                <input
                  id="arrow-icon-size"
                  type="number"
                  min={0}
                  onKeyDown={(event) =>
                    handleNumberField(event, setArrowIconSize)
                  }
                  defaultValue={arrowIconSize}
                />
              </li>
              <li>
                <label htmlFor="arrow-color">Arrow Icon Color</label>
                <input
                  id="arrow-color"
                  type="color"
                  onChange={(event) => handleColorField(event, setArrowColor)}
                  defaultValue={arrowColor}
                />
              </li>
              <li>
                <label htmlFor="arrow-background-color">
                  Arrow Background Color
                </label>
                <input
                  id="arrow-background-color"
                  type="color"
                  onChange={(event) =>
                    handleColorField(event, setArrowBackground)
                  }
                  defaultValue={arrowBackground}
                />
              </li>
              <li>
                <label htmlFor="arrow-size">Arrow Size</label>
                <input
                  id="arrow-size"
                  type="number"
                  onKeyDown={(event) => handleNumberField(event, setArrowSize)}
                  defaultValue={arrowSize}
                />
              </li>
              <li>
                <label htmlFor="arrow-border-radius">Arrow Border Radius</label>
                <input
                  id="arrow-border-radius"
                  type="number"
                  onKeyDown={(event) =>
                    handleNumberField(event, setArrowRadius)
                  }
                  defaultValue={arrowRadius}
                />
              </li>
            </div>
            {/* <--- DOTS ---> */}
            <div className={computeClassName("dots-settings")}>
              <button id="dots-settings" onClick={onBlockTrigger}>
                Dots Settings
                <span>{openBoxes["dots-settings"] ? <>&times;</> : "+"}</span>
              </button>
              <li>
                <label htmlFor="dots-set">Show Dots</label>
                <select
                  id="dots-set"
                  onChange={(event) =>
                    handleBooleanSelectField(event, setDotsSet)
                  }
                  defaultValue={dotsSet}
                >
                  {renderOptions(["false", "true"])}
                </select>
              </li>
              <li>
                <label htmlFor="dots-color">Dots Color</label>
                <input
                  id="dots-color"
                  type="color"
                  onChange={(event) => handleColorField(event, setDotColor)}
                  defaultValue={dotColor}
                />
              </li>
              <li>
                <label htmlFor="dots-size">Dots Size</label>
                <input
                  id="dots-size"
                  type="number"
                  onKeyDown={(event) => handleNumberField(event, setDotSize)}
                  defaultValue={dotSize}
                />
              </li>
              <li>
                <label htmlFor="dots-radius">Dots Radius</label>
                <input
                  id="dots-radius"
                  type="number"
                  onKeyDown={(event) => handleNumberField(event, setDotRadius)}
                  defaultValue={dotRadius}
                />
              </li>
              <li>
                <label htmlFor="dots-spacing">Dots spacing</label>
                <input
                  id="dots-spacing"
                  type="number"
                  onKeyDown={(event) => handleNumberField(event, setDotSpacing)}
                  defaultValue={dotSpacing}
                />
              </li>
              <li>
                <label htmlFor="dots-position">Dots position</label>
                <select
                  id="dots-position"
                  onChange={(event) => handleSelectField(event, setDotPosition)}
                  defaultValue={dotPosition}
                >
                  {renderOptions(Object.values(NavigationPosition))}
                </select>
              </li>
            </div>
          </ul>
        </div>
        <button
          type="button"
          className="sidebar-trigger--base"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        >
          {isSidebarOpen ? "close" : "open"}
        </button>
      </div>
      <div
        className={`gallery-container--base
          ${isSidebarOpen ? "gallery-container--sidebar-open" : ""}`}
      >
        <Gallery
          images={images}
          width={width}
          effect={effect}
          effectSpeed={effectSpeed}
          mode={mode}
          ratio={ratio}
          imageBehavior={imageBehavior}
          blur={blur}
          blurAmount={blurAmount}
          navigation={{
            type: navType,
            position: navPosition,
            width: navWidth,
            sideMargin: navSideMargin,
          }}
          arrows={{
            areSet: arrowSet,
            icon: arrowIcon,
            iconSize: arrowIconSize,
            color: arrowColor,
            background: arrowBackground,
            size: arrowSize,
            radius: arrowRadius,
          }}
          dots={{
            areSet: dotsSet,
            color: dotColor,
            size: dotSize,
            radius: dotRadius,
            spacing: dotSpacing,
            position: dotPosition,
          }}
        />
        <div className="code-print--base">
          <button className="copy-clipboard" onClick={onCopyToClipboard}>
            Copy
          </button>
          <pre>
            <code>
              {`
    <Gallery
      images={[
        {
          src: 'https://your.url/image.ext',
          alt: 'alt description',
        },
      ]}
      ${width && `width="${width}"`}
      ${effect && `effect="${effect}"`}
      ${effectSpeed && `effectSpeed={${effectSpeed}}`}
      ${mode && `mode="${mode}"`}
      ${ratio && `ratio={[${ratio}]}`}
      ${imageBehavior && `imageBehavior="${imageBehavior}"`}
      blur={${blur}}
      ${blurAmount && `blurAmount={${blurAmount}}`}
      navigation={{
        ${navType && `type: "${navType}",`}
        ${navPosition && `position: "${navPosition}",`}
        ${width && `width: "${width}",`}
        ${navSideMargin && `sideMargin: ${navSideMargin},`}
      }}
      arrows={{
        ${arrowSet && `areSet: ${arrowSet},`}
        ${arrowIcon && `icon: <ReactSVGRIcon />,`}
        ${arrowIconSize && `iconSize: ${arrowIconSize},`}
        ${arrowColor && `color: "${arrowColor}",`}
        ${arrowBackground && `background: "${arrowBackground}",`}
        ${arrowSize && `size: ${arrowSize},`}
        ${arrowRadius && `radius: ${arrowRadius},`}
      }}
      dots={{
        ${dotsSet && `areSet: ${dotsSet},`}
        ${dotColor && `color: "${dotColor}",`}
        ${dotSize && `size: ${dotSize},`}
        ${dotRadius && `radius: ${dotRadius},`}
        ${dotSpacing && `spacing: ${dotSpacing},`}
        ${dotPosition && `position: "${dotPosition}",`}
      }}
    />
`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};
