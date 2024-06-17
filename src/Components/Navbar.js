// src/components/Navbar.js
import React from 'react';

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <div className="bg-black w-8 h-8 rounded-full"></div>
        <span className="ml-2 font-bold text-xl">LogoType</span>
      </div>
      <button
        className="bg-yellow-400 w-10 h-10 flex items-center justify-center rounded-full focus:outline-none"
        onClick={toggleSidebar}
      >
        <div className="space-y-1.5">
          <div className="w-5 h-0.5 bg-black"></div>
          <div className="w-5 h-0.5 bg-black"></div>
          <div className="w-5 h-0.5 bg-black"></div>
        </div>
      </button>
    </div>
  );
};

export default Navbar;
