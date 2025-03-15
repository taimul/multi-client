import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({
  label,
  value,
  onChange,
  className = "",
  required = false,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleValidation = (e) => {
    if (required && !e.target.value.trim()) {
      setError("Password is required");
    } else {
      setError("");
    }
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={`flex flex-col gap-1 relative ${className}`}>
      {label && (
        <label className="text-white text-sm font-semibold">{label}</label>
      )}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={handleValidation}
          className={`px-3 py-2 rounded-md bg-dark-gray text-white border ${
            error ? "border-red-500" : "border-gray-600"
          } focus:outline-none focus:ring-2 focus:ring-primary w-full pr-10`}
          {...rest}
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      {error && (
        <span className="text-red-500 text-xs absolute -bottom-4">{error}</span>
      )}
    </div>
  );
};

export default PasswordInput;
