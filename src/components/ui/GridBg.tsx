

import React from "react";

export function GridBackground() {
  return (
    <div className="absolute w-full inset-0 bg-background dark:bg-grid-white/[0.1] bg-grid-black/[0.1] flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
     
    </div>
  );
}
