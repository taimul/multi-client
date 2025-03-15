import { useState } from "react";

const TextInput = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  required = false,
  disabled = false,
  errorMessage = "This field is required",
  ...rest
}) => {
  const [error, setError] = useState("");

  const handleValidation = (e) => {
    if (required && !e.target.value.trim()) {
      setError(errorMessage);
    } else {
      setError("");
    }
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={`flex flex-col gap-1 ${className} relative`}>
      {label && (
        <label className="text-white text-sm font-semibold">{label}</label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleValidation}
        disabled={disabled}
        className={`px-3 py-2 rounded-md bg-dark-gray text-white border ${
          error ? "border-red-500" : "border-gray-600"
        } focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed`}
        {...rest}
      />
      {error && (
        <span className="text-red-500 text-xs absolute -bottom-4">{error}</span>
      )}
    </div>
  );
};

export default TextInput;
