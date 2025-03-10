import { useEffect, useRef, useState } from "react";
import Button from "./Button"; // Import your custom button

const Dropdown = ({
  label,
  options,
  icon,
  onSelect,
  btnType = "outline",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Button */}
      <Button
        btnType={btnType}
        className={`relative flex items-center text-white ${
          isOpen ? "bg-black-gray" : ""
        } ${className}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {icon && <span>{icon}</span>}
        <span className="flex items-center gap-2">{label}</span>
      </Button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-dark-gray text-white shadow-lg rounded-lg overflow-hidden z-50 animate-fadeIn">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-700 transition flex items-center gap-2"
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
            >
              {option.icon && <span>{option.icon}</span>}
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
