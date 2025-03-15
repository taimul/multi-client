const WalletIcon = ({
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
      <g
        id="Frame"
        stroke="#F2FCF2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path
          id="Vector"
          d="M10 7h8m0 0h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8m6-14V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7"
        ></path>
        <path id="Vector_2" d="M11 16.5H6.5m0 0H2m4.5 0V21m0-4.5V12"></path>
      </g>
    </svg>
  );
};

export default WalletIcon;
