import React from "react";
import renderer from "react-test-renderer";
import { describe, expect, test } from "vitest";

import { LazyImage } from "components/lazy-image";
import { ReactComponent as LoadingSpinner } from "assets/icons/spinner.svg";

describe("LazyImage", () => {
  test("renders correctly", () => {
    const component = renderer.create(
      <LazyImage
        imageLoad={{
          icon: LoadingSpinner,
          size: 24,
        }}
        src="image.png"
        alt="alt text"
        draggable={false}
      />
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
