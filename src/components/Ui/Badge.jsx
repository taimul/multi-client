const Badge = ({ text, variant = "success" }) => {
  const colors = {
    success: "bg-primary text-white",
    warning: "bg-yellow-500 text-black",
    error: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
  };

  return (
    <span
      className={`px-3 py-1 text-sm font-semibold rounded-full ${colors[variant]}`}
    >
      {text}
    </span>
  );
};

export default Badge;
