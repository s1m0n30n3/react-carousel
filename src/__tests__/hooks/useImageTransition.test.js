import { renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { useImageTransition } from "hooks";

describe("useImageTransition", () => {
  test("should return `opacity: 0` for `fade` effect object, if prop `isCurrentSlide` is `false`", () => {
    const { result } = renderHook(() =>
      useImageTransition({ isCurrentSlide: false, effectSpeed: 300 })
    );

    expect(result.current.fade.opacity).toBe(0);
  });
  test("should return `transform: 'scale(.5)'` for `inOutSlide` effect object, if prop `isCurrentSlide` is `false`", () => {
    const { result } = renderHook(() =>
      useImageTransition({ isCurrentSlide: false, effectSpeed: 300 })
    );

    expect(result.current.inOutSlide.transform).toBe("scale(.5)");
  });
});
