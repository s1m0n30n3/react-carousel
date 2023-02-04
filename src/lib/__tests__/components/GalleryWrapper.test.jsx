import React from "react";
import renderer from "react-test-renderer";
import { describe, expect, test } from "vitest";

import { TransitionEffect } from "constants";

import { GalleryWrapper } from "components/gallery-wrapper";

describe("GalleryWrapper", () => {
  test("renders correctly without props", () => {
    const component = renderer.create(<GalleryWrapper />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("renders correctly with props", () => {
    const component = renderer.create(
      <GalleryWrapper
        imagesLength={10}
        currentIndex={1}
        effect={TransitionEffect.FADE}
        effectSpeed={300}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("renders correctly if `effect` is `slide`", () => {
    const component = renderer.create(
      <GalleryWrapper
        imagesLength={10}
        currentIndex={1}
        effect={TransitionEffect.SLIDE}
        effectSpeed={300}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
