import { Link } from "react-router-dom";

const Button = ({
  isCustom = false,
  btnType = "primary",
  colorScheme = "default",
  className = "",
  children,
  href = null,
  loading = false,
  loadingText = "Loading...",
  disabled = false,
  spinnerColor = "#FFFCFB",
  active = false, // <-- Accepts active state
  ...restProps
}) => {
  // Spinner component
  const Spinner = () => (
    <div
      className={`h-4 w-4 border-b-2 border-r-2 rounded-full animate-spin`}
      style={{ borderColor: spinnerColor }}
    ></div>
  );

  // Define button styles based on btnType and colorScheme
  const getButtonClasses = () => {
    let baseClasses =
      "text-center px-3 py-2 md:px-4 md:py-2 rounded-full flex items-center justify-center gap-2 font-[600]";

    const primaryColors = {
      default: `bg-primary text-white hover:bg-opacity-90 transition-all duration-300 ${
        active ? "bg-opacity-90" : ""
      }`, // <-- Fix: Active state should change bg for primary
    };

    const secondaryColors = {
      default: `bg-secondary text-black hover:bg-opacity-90 transition-all duration-300 ${
        active ? "bg-dark-gray" : ""
      }`,
    };

    const outlineStyles = `border border-border hover:bg-dark-gray active:bg-dark-gray disabled:opacity-40 ${
      active ? "bg-dark-gray" : ""
    }`;

    switch (btnType) {
      case "primary":
        return `${baseClasses} ${primaryColors[colorScheme]} ${className}`;
      case "secondary":
        return `${baseClasses} ${secondaryColors[colorScheme]} ${className}`;
      case "outline":
        return `${baseClasses} ${outlineStyles} ${className}`;
      default:
        return `${baseClasses} ${className}`;
    }
  };

  // If href is an internal anchor link, use scrollIntoView
  const handleClick = (e) => {
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (isCustom)
    return (
      <button className={className} {...restProps} disabled={disabled}>
        <span className="flex gap-2 items-center">
          {loading && <Spinner />}
          {loading ? loadingText : children}
        </span>
      </button>
    );

  if (href && href.startsWith("#")) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={`${getButtonClasses()} ${
          disabled ? "pointer-events-none cursor-not-allowed opacity-60" : ""
        }`}
        {...restProps}
      >
        {loading && <Spinner />}
        {loading ? loadingText : children}
      </a>
    );
  }

  if (href) {
    return (
      <Link to={href}>
        <button
          className={`${getButtonClasses()} ${
            disabled ? "pointer-events-none cursor-not-allowed opacity-60" : ""
          }`}
          {...restProps}
        >
          {loading && <Spinner />}
          {loading ? loadingText : children}
        </button>
      </Link>
    );
  }

  // Otherwise, render a regular button
  return (
    <button
      type="button"
      className={`${getButtonClasses()} ${
        children ? "flex gap-2 items-center" : ""
      } disabled:cursor-not-allowed`}
      disabled={disabled || loading}
      {...restProps}
    >
      {loading && <Spinner />}
      {loading ? loadingText : children}
    </button>
  );
};

export default Button;
