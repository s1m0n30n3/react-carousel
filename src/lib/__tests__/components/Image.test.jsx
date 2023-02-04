import React from "react";
import renderer from "react-test-renderer";
import { describe, expect, test } from "vitest";

import { ImageBehavior, TransitionEffect } from "constants";
import { Image } from "components/image";

describe("Image", () => {
  test("renders correctly without other props, if `imageBlur.blur` is `false`", () => {
    const component = renderer.create(<Image imageBlur={{ blur: false }} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("renders correctly if `imageBlur.blur` is `true` and images are set", () => {
    const component = renderer.create(
      <Image
        imageBlur={{ blur: true }}
        images={[
          { src: "a.png", alt: "alt image" },
          { src: "b.png", alt: "alt image" },
        ]}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("renders correctly if `imageBlur.blur` is `true` and images are set along with other props", () => {
    const component = renderer.create(
      <Image
        imageBlur={{ blur: true, blurAmount: 20 }}
        effect={TransitionEffect.FADE}
        index={1}
        currentIndex={1}
        imageBehavior={ImageBehavior.CONTAINED}
        effectSpeed={300}
        images={[
          { src: "a.png", alt: "alt image" },
          { src: "b.png", alt: "alt image" },
        ]}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("renders correctly if `imageBehaviour` is `full` and `effect` is `inOutSlide`", () => {
    const component = renderer.create(
      <Image
        imageBlur={{ blur: true, blurAmount: 20 }}
        effect={TransitionEffect.IN_OUT_SLIDE}
        index={1}
        currentIndex={1}
        imageBehavior={ImageBehavior.FULL}
        effectSpeed={300}
        images={[
          { src: "a.png", alt: "alt image" },
          { src: "b.png", alt: "alt image" },
        ]}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
