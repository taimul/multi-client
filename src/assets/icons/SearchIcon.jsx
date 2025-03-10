const SearchIcon = ({
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
      viewBox="0 0 22 22"
    >
      <path
        id="Vector (Stroke)"
        fill="#F2FCF2"
        fillRule="evenodd"
        d="M.25 10C.25 4.615 4.615.25 10 .25s9.75 4.365 9.75 9.75a9.7 9.7 0 0 1-2.346 6.344l4.126 4.126a.75.75 0 1 1-1.06 1.06l-4.126-4.126A9.7 9.7 0 0 1 10 19.75C4.615 19.75.25 15.385.25 10M10 1.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default SearchIcon;
