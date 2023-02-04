import React from "react";

export const TransitionControls = ({
  effect,
  setEffect,
  effectSpeed,
  setEffectSpeed,
}) => {
  return (
    <div className="control">
      <h2>Transition</h2>
      <label htmlFor="effect">Type</label>
      <select
        id="effect"
        defaultValue={effect}
        onChange={({ target }) => setEffect(target.value)}
      >
        <option value="fade">fade</option>
        <option value="slide">slide</option>
        <option value="inOutSlide">inOutSlide</option>
      </select>

      <label htmlFor="effect">Speed (in ms)</label>
      <select
        id="effect"
        defaultValue={effectSpeed}
        onChange={({ target }) => setEffectSpeed(target.value)}
      >
        <option value={100}>100</option>
        <option value={200}>200</option>
        <option value={300}>300</option>
        <option value={400}>400</option>
        <option value={500}>500</option>
        <option value={600}>600</option>
        <option value={700}>700</option>
        <option value={800}>800</option>
        <option value={900}>900</option>
        <option value={1000}>1000</option>
        <option value={1200}>1200</option>
        <option value={1400}>1400</option>
        <option value={1600}>1600</option>
        <option value={1800}>1800</option>
        <option value={2000}>2000</option>
        <option value={3000}>3000</option>
      </select>
    </div>
  );
};
