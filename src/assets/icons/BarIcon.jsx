const BarIcon = ({
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
      <g id="Frame" fill="#fff" fillRule="evenodd" clipRule="evenodd">
        <path
          id="Vector"
          d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
        ></path>
        <path
          id="Vector_2"
          d="M3 12a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
        ></path>
        <path
          id="Vector_3"
          d="M3 19a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
        ></path>
      </g>
    </svg>
  );
};

export default BarIcon;
