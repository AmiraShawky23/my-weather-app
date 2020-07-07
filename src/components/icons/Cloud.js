import React from "react";

const Cloud = () => {
  return (
    <svg
      width="330"
      height="237"
      viewBox="0 0 330 237"
      fill="none"
    >
      <g filter="url(#filter0_d)">
        <path
          d="M266.918 100.259C268.9 95.0766 270.012 89.4094 270.012 83.5C270.012 57.8281 249.222 37 223.598 37C214.074 37 205.178 39.9062 197.829 44.8469C184.436 21.5969 159.441 6 130.77 6C88.0309 6 53.4139 40.6812 53.4139 83.5C53.4139 84.8078 53.4622 86.1156 53.5106 87.4234C26.4358 96.9656 7 122.831 7 153.25C7 191.758 38.1843 223 76.6208 223H254.541C288.723 223 316.426 195.245 316.426 161C316.426 131.017 295.153 105.975 266.918 100.259Z"
          fill="url(#paint0_linear)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="329.426"
          height="237"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="3" dy="4" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.831373 0 0 0 0 0.858824 0 0 0 0 0.870588 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="55.1061"
          y1="53.2266"
          x2="250.984"
          y2="222.641"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D4DBDE" />
          <stop offset="1" stop-color="#FDFFFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Cloud;
