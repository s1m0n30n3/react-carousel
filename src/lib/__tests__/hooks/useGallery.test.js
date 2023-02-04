import { renderHook, act } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { useGallery } from "hooks";

describe("useGallery", () => {
  test("should set the gallery index to the given number", () => {
    const { result } = renderHook(() =>
      useGallery({ imagesLength: 10, mode: "return" })
    );

    const { setGalleryIndex } = result.current;
    expect(result.current.galleryIndex).toBe(0);
    act(() => setGalleryIndex(2));
    expect(result.current.galleryIndex).toBe(2);
    act(() => setGalleryIndex(1));
    expect(result.current.galleryIndex).toBe(1);
  });

  test("should increase/decrease `galleryIndex` by passing action `prev` or `next` to `handleNavigation`", () => {
    const { result } = renderHook(() =>
      useGallery({ imagesLength: 10, mode: "return" })
    );

    const { handleNavigation } = result.current;
    expect(result.current.galleryIndex).toBe(0);
    act(() => handleNavigation({ action: "next" }));
    expect(result.current.galleryIndex).toBe(1);
    act(() => handleNavigation({ action: "prev" }));
    expect(result.current.galleryIndex).toBe(0);
  });

  test("should increase/decrease `galleryIndex` by passing action `prev` or `next` to `handleNavigation` also if is lastindex or firstindex in mode return", () => {
    const { result } = renderHook(() =>
      useGallery({ imagesLength: 10, mode: "return" })
    );

    const { handleNavigation } = result.current;
    expect(result.current.galleryIndex).toBe(0);
    act(() => handleNavigation({ action: "prev" }));
    expect(result.current.galleryIndex).toBe(9);
    act(() => handleNavigation({ action: "next" }));
    expect(result.current.galleryIndex).toBe(0);
  });

  test("should not increase `galleryIndex` by passing action `next` to `handleNavigation` if in lastindex and in mode bounded", () => {
    const { result } = renderHook(() =>
      useGallery({ imagesLength: 10, mode: "bounded" })
    );

    const { handleNavigation, setGalleryIndex } = result.current;
    act(() => setGalleryIndex(9));
    expect(result.current.galleryIndex).toBe(9);
    act(() => handleNavigation({ action: "next" }));
    expect(result.current.galleryIndex).toBe(9);
    act(() => handleNavigation({ action: "next" }));
    expect(result.current.galleryIndex).toBe(9);
  });

  test("should not descrease `galleryIndex` by passing action `prev` to `handleNavigation` if in firstindex and in mode bounded", () => {
    const { result } = renderHook(() =>
      useGallery({ imagesLength: 10, mode: "bounded" })
    );

    const { handleNavigation } = result.current;
    expect(result.current.galleryIndex).toBe(0);
    act(() => handleNavigation({ action: "prev" }));
    expect(result.current.galleryIndex).toBe(0);
    act(() => handleNavigation({ action: "prev" }));
    expect(result.current.galleryIndex).toBe(0);
  });

  test("should return previous value if `action` passed as argument to `handleNavigation` is `undefined`", () => {
    const { result } = renderHook(() =>
      useGallery({ imagesLength: 10, mode: "bounded" })
    );

    const { handleNavigation } = result.current;
    expect(result.current.galleryIndex).toBe(0);
    act(() => handleNavigation({ action: undefined }));
    expect(result.current.galleryIndex).toBe(0);
  });

  test("should `increment` by 1 if `galleryIndex > 0` && `galleryIndex < carouselLength` in `mode='bounded'` and `action='next'`", () => {
    const { result } = renderHook(() =>
      useGallery({ imagesLength: 10, mode: "bounded" })
    );

    const { handleNavigation, setGalleryIndex } = result.current;
    act(() => setGalleryIndex(5));
    act(() => handleNavigation({ action: "next" }));
    expect(result.current.galleryIndex).toBe(6);
  });

  test("should `increment` by 1 if `galleryIndex === 0` in `mode='bounded'` and `action='next'`", () => {
    const { result } = renderHook(() =>
      useGallery({ imagesLength: 10, mode: "bounded" })
    );

    const { handleNavigation } = result.current;
    act(() => handleNavigation({ action: "next" }));
    expect(result.current.galleryIndex).toBe(1);
  });

  test("should `decrement` by 1 if `galleryIndex === maxIndex` in `mode='bounded'` and `action='prev'`", () => {
    const { result } = renderHook(() =>
      useGallery({ imagesLength: 10, mode: "bounded" })
    );

    const { handleNavigation, setGalleryIndex } = result.current;
    act(() => setGalleryIndex(9));
    act(() => handleNavigation({ action: "prev" }));
    expect(result.current.galleryIndex).toBe(8);
  });

  test("should `decrement` by 1 if `galleryIndex === maxIndex` in `mode='return'` and `action='prev'`", () => {
    const { result } = renderHook(() =>
      useGallery({ imagesLength: 10, mode: "return" })
    );

    const { handleNavigation, setGalleryIndex } = result.current;
    act(() => setGalleryIndex(9));
    act(() => handleNavigation({ action: "prev" }));
    expect(result.current.galleryIndex).toBe(8);
  });

  test("should `increment` by 1 `onMouseDrag` if `mousedown.screenX - mouseup.screenX > 50`", () => {
    const { result } = renderHook(() =>
      useGallery({ imagesLength: 10, mode: "return" })
    );

    const { onMouseDrag } = result.current;
    expect(result.current.galleryIndex).toBe(0);
    act(() =>
      onMouseDrag({
        action: "start",
        property: new MouseEvent("mousedown", { screenX: 0 }),
      })
    );
    act(() =>
      onMouseDrag({
        action: "end",
        property: new MouseEvent("mouseup", { screenX: -51 }),
      })
    );
    expect(result.current.galleryIndex).toBe(1);
  });

  test("should `decrement` by 1 `onMouseDrag` if `mousedown.screenX - mouseup.screenX < 50`", () => {
    const { result } = renderHook(() =>
      useGallery({ imagesLength: 10, mode: "return" })
    );

    const { onMouseDrag, setGalleryIndex } = result.current;
    act(() => setGalleryIndex(9));
    expect(result.current.galleryIndex).toBe(9);
    act(() =>
      onMouseDrag({
        action: "start",
        property: new MouseEvent("mousedown", { screenX: 0 }),
      })
    );
    act(() =>
      onMouseDrag({
        action: "end",
        property: new MouseEvent("mouseup", { screenX: 51 }),
      })
    );
    expect(result.current.galleryIndex).toBe(8);
  });

  test("shouldn't `decrement` or `increment` `onMouseDrag` if `mousedown.screenX - mouseup.screenX` is not `< -50` or `> 50`", () => {
    const { result } = renderHook(() =>
      useGallery({ imagesLength: 10, mode: "return" })
    );

    const { onMouseDrag, setGalleryIndex } = result.current;
    act(() => setGalleryIndex(9));
    expect(result.current.galleryIndex).toBe(9);
    act(() =>
      onMouseDrag({
        action: "start",
        property: new MouseEvent("mousedown", { screenX: 0 }),
      })
    );
    act(() =>
      onMouseDrag({
        action: "end",
        property: new MouseEvent("mouseup", { screenX: 20 }),
      })
    );
    expect(result.current.galleryIndex).toBe(9);
  });
});
