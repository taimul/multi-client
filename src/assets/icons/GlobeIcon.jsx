const GlobeIcon = ({
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m8.716 11.253a9.04 9.04 0 0 0-.873-6.671m.873 6.671A17.9 17.9 0 0 1 12 16.5a17.9 17.9 0 0 1-8.716-2.247m0 0A9 9 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418M12 3a9 9 0 0 1 7.843 4.582M12 3a9 9 0 0 0-7.843 4.582m15.686 0A11.95 11.95 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918"
        ></path>
      </g>
    </svg>
  );
};

export default GlobeIcon;
