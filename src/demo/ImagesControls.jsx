import React from "react";

export const ImagesControls = ({ imageBehavior, setImageBehavior }) => {
  return (
    <div className="control">
      <h2>Images</h2>
      <label htmlFor="image-behavior">Behavior</label>
      <select
        id="image-behavior"
        defaultValue={imageBehavior}
        onChange={({ target }) => setImageBehavior(target.value)}
      >
        <option value="full">full</option>
        <option value="contained">contained</option>
      </select>
    </div>
  );
};
