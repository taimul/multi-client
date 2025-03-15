const CartIcon = ({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5024 16L5.50039 2.00006L1.99805 2"
        stroke="#F2FCF2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5039 22C11.3329 22 12.0049 21.3284 12.0049 20.5C12.0049 19.6716 11.3329 19 10.5039 19C9.67495 19 9.00293 19.6716 9.00293 20.5C9.00293 21.3284 9.67495 22 10.5039 22Z"
        stroke="#F2FCF2"
        strokeWidth="1.5"
      />
      <path
        d="M17.5088 22C18.3378 22 19.0098 21.3284 19.0098 20.5C19.0098 19.6716 18.3378 19 17.5088 19C16.6798 19 16.0078 19.6716 16.0078 20.5C16.0078 21.3284 16.6798 22 17.5088 22Z"
        stroke="#F2FCF2"
        strokeWidth="1.5"
      />
      <path
        d="M6.51451 6.50781H21.9924C21.9977 6.50781 22.0021 6.51177 22.0024 6.5171C22.0024 11.1591 20.7235 16.1351 15.5265 16.0076H9.59022C8.5821 15.949 6.50977 16.5678 6.50977 18.9967H17.3138"
        stroke="#F2FCF2"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CartIcon;
