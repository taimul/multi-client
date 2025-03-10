const InputField = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  ...rest
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label className="text-white text-sm font-semibold">{label}</label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="px-3 py-2 rounded-md bg-dark-gray text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
        {...rest}
      />
    </div>
  );
};

export default InputField;
