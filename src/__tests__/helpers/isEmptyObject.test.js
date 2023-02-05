import { describe, expect, test } from "vitest";

import { isEmptyObject } from "helpers/isEmptyObject";

describe("classNames function", () => {
  test("should return `true` if the input is an empty object", () => {
    const input = {};
    expect(isEmptyObject(input)).toBe(true);
  });
  test("should return `false` if the input is an object with property inside", () => {
    const input = { property: "i am a property doo bee doo" };
    expect(isEmptyObject(input)).toBe(false);
  });
});
