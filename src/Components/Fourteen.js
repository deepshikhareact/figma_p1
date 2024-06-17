import React from "react";

const Fourteen = () => {
  return (
    <div className="flex justify-center items-start bg-white min-h-screen border-b-2">
      <div className="max-w-7xl w-full">
        <div className="bg-black text-white h-[120px] py-4 flex items-center relative group cursor-pointer">
          <div className="container mx-auto flex items-center justify-between md:justify-around px-4 md:px-0">
            <div className="flex items-center">
              <div className="md:h-12 md:w-12 h-8 w-8 bg-white rounded-full mr-4"></div>
            </div>
            <div className="flex items-center">
              <span className="text-lg md:text-2xl font-semibold cursor-pointer smooch-regular ">
                LogoType
              </span>
            </div>
            <div className="absolute left-0 top-full w-full bg-black text-white overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0 group-hover:max-h-screen group-hover:opacity-100">
              <div className="w-full h-[450px]"></div>
            </div>
            <ul className="hidden md:flex space-x-6 text-lg cursor-pointer">
              <li className="relative group">
                <a href="/" className="hover:text-gray-400">
                  Services
                </a>
                <div className="absolute left-0 top-full  w-full  text-white overflow-hidden transition-all duration-1000 ease-in-out max-h-0 opacity-0 group-hover:max-h-screen group-hover:opacity-100">
                  <div className="">
                    <p>Services</p>
                    <p>Services</p>
                    <p>Services</p>
                    <p>Services</p>
                    <p>Services</p>
                    <p>Services</p>
                    <p>Services</p>
                    <p>Services</p>
                    <p>Services</p>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <a href="/" className="hover:text-gray-400">
                  Products
                </a>
                <div className="absolute left-0 top-full  w-full  text-white overflow-hidden transition-all duration-1000 ease-in-out max-h-0 opacity-0 group-hover:max-h-screen group-hover:opacity-100">
                  <div className="">
                    <p>Product</p>
                    <p>Product</p>
                    <p>Product</p>
                    <p>Product</p>
                    <p>Product</p>
                    <p>Product</p>
                    <p>Product</p>
                    <p>Product</p>
                    <p>Product</p>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <a href="/" className="hover:text-gray-400">
                  Resources
                </a>
                <div className="absolute left-0 top-full  w-full  text-white overflow-hidden transition-all duration-1000 ease-in-out max-h-0 opacity-0 group-hover:max-h-screen group-hover:opacity-100">
                  <div className="">
                    <p>Resource</p>
                    <p>Resource</p>
                    <p>Resource</p>
                    <p>Resource</p>
                    <p>Resource</p>
                    <p>Resource</p>
                    <p>Resource</p>
                    <p>Resource</p>
                    <p>Resource</p>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <a href="/" className="hover:text-gray-400">
                  About Us
                </a>
                <div className="absolute left-0 top-full w-full  text-white overflow-hidden transition-all duration-1000 ease-in-out max-h-0 opacity-0 group-hover:max-h-screen group-hover:opacity-100">
                  <div className="">
                    <p>About Us</p>
                    <p>About Us</p>
                    <p>About Us</p>
                    <p>About Us</p>
                    <p>About Us</p>
                    <p>About Us</p>
                    <p>About Us</p>
                    <p>About Us</p>
                    <p>About Us</p>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <a href="/" className="hover:text-gray-400">
                  Contact
                </a>
                <div className="absolute left-0 top-full  w-full  text-white overflow-hidden transition-all duration-1000 ease-in-out max-h-0 opacity-0 group-hover:max-h-screen group-hover:opacity-100">
                  <div className="">
                    <p>Contact</p>
                    <p>Contact</p>
                    <p>Contact</p>
                    <p>Contact</p>
                    <p>Contact</p>
                    <p>Contact</p>
                    <p>Contact</p>
                    <p>Contact</p>
                    <p>Contact</p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button">
                <svg
                  className="w-8 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourteen;
