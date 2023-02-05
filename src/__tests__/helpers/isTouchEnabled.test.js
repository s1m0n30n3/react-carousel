import { describe, expect, test, vi } from "vitest";

import { isTouchEnabled } from "helpers/isTouchEnabled";

describe("classNames function", () => {
  test("should return `false` if the `navigator.maxTouchPoints > 0`", () => {
    expect(isTouchEnabled(navigator.maxTouchPoints > 0)).toBe(false);
    expect(isTouchEnabled(navigator.msMaxTouchPoints > 0)).toBe(false);
  });

  test("should return `true` if the `ontouchstart` in `window`", () => {
    // eslint-disable-next-line
    window = {
      ontouchstart: vi.fn(),
    };
    expect(!!("ontouchstart" in window)).toBe(true);
  });
});
