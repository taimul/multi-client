import React from "react";

const WishlistIcon = ({
  fill = "currentColor",
  size = 24,
  width = size,
  height = size,
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 24"
    >
      <g id="Frame">
        <path
          id="Vector"
          stroke="#F2FCF2"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M2 9.248C2 5.91 4.164 3 7.68 3 9.643 3 11 3.999 12 5.499 13 3.999 14.357 3 16.32 3 19.836 3 22 5.91 22 9.248c0 5.812-5.358 9.429-10 11.75C7.358 18.678 2 15.06 2 9.249Z"
        ></path>
      </g>
    </svg>
  );
};

export default WishlistIcon;
