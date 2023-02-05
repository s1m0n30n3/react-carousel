import { renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { useNavPosition } from "hooks";

describe("useNavPosition", () => {
  test("should return `bottom: -44px` if passed props `size` is 32 and `position` is `bottomOutside`", () => {
    const { result } = renderHook(() =>
      useNavPosition({ size: 32, position: "bottomOutside" })
    );

    expect(result.current.style.bottom).toBe("-44px");
  });
  test("should return  `top: 28px` if passed props `size` is 32 and `position` is `top`", () => {
    const { result } = renderHook(() =>
      useNavPosition({ size: 32, position: "top" })
    );

    expect(result.current.style.top).toBe("28px");
  });
});
