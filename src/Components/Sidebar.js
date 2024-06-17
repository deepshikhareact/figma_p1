// src/components/Sidebar.js
import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-yellow-400 p-6 transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } z-20`}
    >
      <button
        className="absolute top-4 right-4 text-3xl font-bold focus:outline-none"
        onClick={toggleSidebar}
      >
        &times;
      </button>
      <ul className="mt-10 space-y-4 text-lg">
        <li className="font-bold">Home</li>
        <li className="font-bold">
          About Us
          <ul className="pl-4 mt-1 text-sm">
            <li>Company</li>
            <li>People</li>
            <li>Work With Us</li>
          </ul>
        </li>
        <li className="font-bold">
          Our Services
          <ul className="pl-4 mt-1 text-sm">
            <li>Consulting</li>
            <li>Design</li>
            <li>Digital & Tech</li>
            <li>Marketing</li>
            <li>CX</li>
          </ul>
        </li>
        <li className="font-bold">
          Our Work
          <ul className="pl-4 mt-1 text-sm">
            <li>Design</li>
            <li>Digital & Tech</li>
            <li>Production</li>
            <li>Case Studies</li>
          </ul>
        </li>
        <li className="font-bold">Resources</li>
        <li className="font-bold">Contact Us</li>
      </ul>
    </div>
  );
};

export default Sidebar;
