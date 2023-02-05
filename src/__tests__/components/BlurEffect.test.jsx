import React from "react";
import renderer from "react-test-renderer";
import { describe, expect, test } from "vitest";

import { BlurEffect } from "../../components/image/BlurEffect";

describe("BlurEffect", () => {
  test("renders correctly without props", () => {
    const component = renderer.create(<BlurEffect />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
