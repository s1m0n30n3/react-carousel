import React, { forwardRef } from "react";

import { base } from "styles/root.module.css";

export const Root = forwardRef(({ ...props }, ref) => (
  <div {...props} role="region" ref={ref} className={base} />
));

Root.displayName = "Gallery.Root";
