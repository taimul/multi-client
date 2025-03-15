const PlusBagIcon = ({
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
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9688 6.25H14.5312V5.78125C14.5303 4.59918 14.068 3.46416 13.2428 2.61784C12.4176 1.77152 11.2946 1.28074 10.1129 1.25H9.88711C8.70544 1.28074 7.58244 1.77152 6.75721 2.61784C5.93197 3.46416 5.46967 4.59918 5.46875 5.78125V6.25H2.03125C1.98981 6.25 1.95007 6.26646 1.92076 6.29576C1.89146 6.32507 1.875 6.36481 1.875 6.40625V18.125C1.875 18.2908 1.94085 18.4497 2.05806 18.5669C2.17527 18.6842 2.33424 18.75 2.5 18.75H17.5C17.6658 18.75 17.8247 18.6842 17.9419 18.5669C18.0592 18.4497 18.125 18.2908 18.125 18.125V6.40625C18.125 6.36481 18.1085 6.32507 18.0792 6.29576C18.0499 6.26646 18.0102 6.25 17.9688 6.25ZM7.03125 5.82031C7.03125 4.18594 8.33633 2.82969 9.9707 2.8125C10.3629 2.80905 10.7519 2.88326 11.1153 3.03087C11.4787 3.17848 11.8093 3.39656 12.088 3.67253C12.3667 3.94851 12.588 4.27693 12.7392 4.63885C12.8903 5.00077 12.9684 5.38903 12.9688 5.78125V6.25H7.03125V5.82031ZM13.125 13.125H10.625V15.625H9.375V13.125H6.875V11.875H9.375V9.375H10.625V11.875H13.125V13.125Z"
        fill="white"
      />
    </svg>
  );
};

export default PlusBagIcon;
