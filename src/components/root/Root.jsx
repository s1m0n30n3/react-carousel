import React, { forwardRef } from "react";

export const Root = forwardRef(({ ...props }, ref) => (
  <div {...props} role="region" ref={ref} className="root--base" />
));

Root.displayName = "Gallery.Root";
