const RightArrowIcon = ({
  fill = "currentColor",
  size = 24,
  width = size,
  height = size,
  className = "",
}) => {
  return (
    <svg
      fill={fill}
      width={width}
      height={height}
      className={className}
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.0269 24.6938L19.706 18L13.0269 11.3062L15.0831 9.25L23.8331 18L15.0831 26.75L13.0269 24.6938Z"
        fill="#21242C"
      />
    </svg>
  );
};

export default RightArrowIcon;
