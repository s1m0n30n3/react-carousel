import React from "react";

export const GalleryControls = ({
  galleryWidth,
  setGalleryWidth,
  galleryMode,
  setGalleryMode,
  galleryRatio,
  setGalleryRatio,
}) => {
  return (
    <div className="control">
      <h2>Gallery</h2>
      <label htmlFor="gallery-width">Width</label>
      <input
        id="gallery-width"
        type="text"
        value={galleryWidth}
        onChange={({ target }) => setGalleryWidth(target.value)}
      />
      <label htmlFor="gallery-mode">Mode</label>
      <select
        id="gallery-mode"
        defaultValue={galleryMode}
        onChange={({ target }) => setGalleryMode(target.value)}
      >
        <option value="bounded">bounded</option>
        <option value="return">return</option>
      </select>
      <label htmlFor="gallery-ratio">Ratio</label>
      <select
        id="gallery-ratio"
        defaultValue={galleryRatio}
        onChange={({ target }) => {
          const value = target.value.split(",").map((number) => {
            return parseInt(number, 10);
          });
          setGalleryRatio(value);
        }}
      >
        <option value={[1, 1]}>[1,1]</option>
        <option value={[4, 1]}>[4,1]</option>
        <option value={[3, 2]}>[3,2]</option>
        <option value={[4, 3]}>[4,3]</option>
        <option value={[5, 4]}>[5,4]</option>
        <option value={[16, 10]}>[16,10]</option>
        <option value={[16, 9]}>[16,9]</option>
        <option value={[21, 9]}>[21,9]</option>
        <option value={[32, 9]}>[32,9]</option>
      </select>
    </div>
  );
};
