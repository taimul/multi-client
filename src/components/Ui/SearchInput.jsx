import { useState } from "react";
import SearchIcon from "../../assets/icons/SearchIcon";

const SearchInput = ({ placeholder = "Search", onSearch, className = "" }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className={`flex relative w-full ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="flex-1 bg-dark-gray text-white px-4 py-2 rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <button
        onClick={() => onSearch(searchText)}
        className="ml-2 text-white hover:text-primary absolute right-4 top-1/2 -translate-y-1/2"
      >
        <SearchIcon fill="none" />
      </button>
    </div>
  );
};

export default SearchInput;
