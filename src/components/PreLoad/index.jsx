import React from "react";

function PreLoad() {
  return (
    <div className="preload">
      <svg className="preload__shape" version="1.1">
        <defs>
          <filter id="gooeyness">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="gooeyness"
            />
            <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
          </filter>
        </defs>
      </svg>
      <div className="preload-dots">
        <div className="preload__dot"></div>
        <div className="preload__dot"></div>
        <div className="preload__dot"></div>
        <div className="preload__dot"></div>
        <div className="preload__dot"></div>
      </div>
    </div>
  );
}

export default PreLoad;
