import React from "react";

export const NavigatorControls = ({
  navigationType,
  setNavigationTypes,
  navigationPosition,
  setNavigationPosition,
  navigationWidth,
  setNavigationWidth,
  navigationSideMargin,
  setNavigationSideMargin,
}) => {
  return (
    <div className="control">
      <h2>Navigator</h2>
      <label htmlFor="navigation-type">Type</label>
      <select
        id="navigation-type"
        defaultValue={navigationType}
        onChange={({ target }) => setNavigationTypes(target.value)}
      >
        <option value="onlyArrows">onlyArrows</option>
        <option value="onlyDots">onlyDots</option>
        <option value="arrowsAndDots">arrowsAndDots</option>
        <option value="none">none</option>
      </select>
      {/*  */}
      <label htmlFor="navigation-position">Position</label>
      <select
        id="navigation-position"
        defaultValue={navigationPosition}
        onChange={({ target }) => setNavigationPosition(target.value)}
      >
        <option value="top">top</option>
        <option value="center">center</option>
        <option value="bottom">bottom</option>
        <option value="bottomOutside">bottomOutside</option>
      </select>
      <label htmlFor="navigator-width">Width (%, px, em, rem)</label>
      <input
        id="navigator-width"
        type="text"
        value={navigationWidth}
        onChange={({ target }) => setNavigationWidth(target.value)}
      />
      <label htmlFor="navigator-margins">Side Margins (number)</label>
      <input
        id="navigator-margins"
        type="number"
        value={navigationSideMargin}
        onChange={({ target }) =>
          setNavigationSideMargin(parseInt(target.value, 10))
        }
      />
    </div>
  );
};
