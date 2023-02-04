import React from "react";

export const BlurControls = ({
  useBlur,
  setUseBlur,
  blurAmount,
  setBlurAmount,
}) => {
  return (
    <div className="control">
      <h2>Blur Effect</h2>
      <label htmlFor="blur">Active</label>
      <select
        id="blur"
        defaultValue={useBlur}
        onChange={({ target }) => {
          if (target.value === "true") {
            return setUseBlur(true);
          }
          return setUseBlur(false);
        }}
      >
        <option value={true}>true</option>
        <option value={false}>false</option>
      </select>
      <label htmlFor="blur-amount">Amount</label>
      <input
        id="blur-amount"
        type="number"
        value={blurAmount}
        onChange={({ target }) => setBlurAmount(parseInt(target.value, 10))}
      />
    </div>
  );
};
