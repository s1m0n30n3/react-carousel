import React from "react";
import renderer, { act } from "react-test-renderer";
import { describe, expect, test } from "vitest";

import { Gallery } from "../index";

import { NavigationType } from "constants";
import { handleOnMouseDrag } from "helpers/handleOnMouseDrag";

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;

describe("Gallery", () => {
  test("renders correctly by passing `navigationType='none'`", () => {
    const component = renderer.create(
      <Gallery
        navigation={{
          type: NavigationType.NONE,
        }}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders correctly by passing `navigationType='onlyArrows'`", () => {
    const component = renderer.create(
      <Gallery
        navigation={{
          type: NavigationType.ONLY_ARROWS,
        }}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders correctly by passing `navigationType='onlyArrows'`", () => {
    const component = renderer.create(
      <Gallery
        navigation={{
          type: NavigationType.ONLY_DOTS,
        }}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders correctly and call `onMouseDown` in the `GalleryWrapper`", () => {
    const component = renderer.create(
      <Gallery
        images={[
          { src: "this-is-a-picture.png", alt: "this is a alt desciption" },
        ]}
      />
    );

    const tree = component.toJSON();
    const { onMouseDown } = tree.children[0].children[0].children[0].props;

    act(() =>
      onMouseDown(() =>
        handleOnMouseDrag({
          property: new MouseEvent("mousedown", { screenX: 0 }),
        })
      )
    );

    expect(onMouseDown).toBeDefined();
    expect(onMouseDown).toBeInstanceOf(Function);
    expect(onMouseDown).toMatchSnapshot();
  });

  test("renders correctly and call `onMouseUp` in the `GalleryWrapper`", () => {
    const component = renderer.create(
      <Gallery
        images={[
          { src: "this-is-a-picture.png", alt: "this is a alt desciption" },
        ]}
      />
    );

    const tree = component.toJSON();
    const { onMouseUp } = tree.children[0].children[0].children[0].props;

    act(() =>
      onMouseUp(() =>
        handleOnMouseDrag({
          property: new MouseEvent("mouseup", { screenX: 0 }),
        })
      )
    );

    expect(onMouseUp).toBeDefined();
    expect(onMouseUp).toBeInstanceOf(Function);
    expect(onMouseUp).toMatchSnapshot();
  });

  test("renders correctly and call `onTouchStart` in the `GalleryWrapper`", () => {
    const component = renderer.create(
      <Gallery
        images={[
          { src: "this-is-a-picture.png", alt: "this is a alt desciption" },
        ]}
      />
    );

    const tree = component.toJSON();
    const { onTouchStart } = tree.children[0].children[0].children[0].props;

    act(() =>
      onTouchStart(() =>
        handleOnMouseDrag({
          property: new TouchList({
            changedTouches: [new Touch({ screenX: 0, screenY: 0 })],
          }),
        })
      )
    );

    expect(onTouchStart).toBeDefined();
    expect(onTouchStart).toBeInstanceOf(Function);
    expect(onTouchStart).toMatchSnapshot();
  });

  test("renders correctly and call `onTouchEnd` in the `GalleryWrapper`", () => {
    const component = renderer.create(
      <Gallery
        images={[
          { src: "this-is-a-picture.png", alt: "this is a alt desciption" },
        ]}
      />
    );

    const tree = component.toJSON();
    const { onTouchEnd } = tree.children[0].children[0].children[0].props;

    act(() =>
      onTouchEnd(() =>
        handleOnMouseDrag({
          property: new TouchList({
            changedTouches: [new Touch({ screenX: 0, screenY: 0 })],
          }),
        })
      )
    );

    expect(onTouchEnd).toBeDefined();
    expect(onTouchEnd).toBeInstanceOf(Function);
    expect(onTouchEnd).toMatchSnapshot();
  });
});
