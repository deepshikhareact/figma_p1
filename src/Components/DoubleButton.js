

import React from "react";

function DoubleButton() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-white border-b-2">
      <div className="flex flex-col w-full max-w-6xl p-6 md:flex-row">
        <div className="flex-1 mb-6 md:mb-0">
          <h1 className="mb-4 text-3xl font-bold leading-9 sm:text-4xl lg:text-6xl">
            Introduction line heading or value proposition.
          </h1>
        </div>
        <div className="flex-1 max-w-xl">
          <p className="hidden mb-6 text-base text-black md:block md:text-xl md:leading-9">
            Description text paragraph can go here in 200 words. This can be
            multi-line text. Description text paragraph can go here in 200
            words. This can be multi-line text. Description text paragraph can
            go here in 200 words. This can be multi-line text. Description text
            paragraph can go here in 200 words. This can be multi-line text.
          </p>
          <p className="block mb-4 text-base text-black md:hidden md:text-xl md:leading-9">
            Description text paragraph can go here in 200 words. This can be
            multi-line text. Description text paragraph can go here in 200
            words. This can be multi-line text.
          </p>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <button className="px-6 py-3 text-base font-bold text-white duration-200 bg-purple-600 rounded shadow-lg md:px-8 md:text-lg hover:bg-black hover:text-white focus:outline-none">
              View Services
            </button>
            <button className="px-6 py-3 text-base font-bold text-gray-800 duration-200 bg-gray-200 rounded shadow-lg md:px-8 md:text-lg hover:bg-gray-300 focus:outline-none">
              Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoubleButton;
