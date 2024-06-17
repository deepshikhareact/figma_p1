// src/SearchBar.js
// src/SearchBar.js
import React, { useState, useRef } from 'react';
import { BiSearchAlt } from "react-icons/bi";

const SearchBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchText, setSearchText] = useState('');
  const inputRef = useRef(null);

  const handleSearchClick = () => {
    setIsActive(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-transparent">
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          ref={inputRef}
          className={`w-full border-0 border-b-4 py-2 px-4 text-center text-lg duration-300 transition-colors ${
            isActive ? 'border-blue-700' : 'border-black'
          } focus:outline-none`}
          placeholder={isActive ? '' : 'Search'}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
        <button
          className="absolute text-2xl text-black transform -md:right-4 -translate-y-1/4 top-1/2 focus:outline-none"
          onClick={handleSearchClick}
        >
          <BiSearchAlt />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;



