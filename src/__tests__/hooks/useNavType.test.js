import { renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { useNavType } from "hooks";

describe("useNavType", () => {
  test("should return `display: none` if passed props `type` is `none`", () => {
    const { result } = renderHook(() => useNavType({ type: "none" }));

    expect(result.current.style.display).toBe("none");
  });
});
