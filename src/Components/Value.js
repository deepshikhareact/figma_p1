import React from "react";

function Value() {
  return (
    <div className="flex items-center justify-start min-h-screen mx-auto bg-white border-b-2">
      <div className="flex flex-col w-full max-w-6xl p-6 md:flex-row">
        {/* Left Column */}
        <div className="">
          
            <h1 className="text-left text-4xl md:text-6xl lg:text-5xl lg:mt-[-2.75rem] lg:ml-[15rem] font-bold leading-tight">
              Value <br /> proposition.
            </h1>
          
        </div>
        {/* Divider */}
        {/* <div className="hidden md:block w-[2px] bg-purple-600 mx-8"></div> */}

        {/* Right Column */}
        <div className="flex mt-4 md:mt-[52px]">
          <div className="pl-4 border-l-4 border-purple-600">
            <p className="text-base text-left text-black md:text-lg">
              Description text paragraph can go here in 200 words. This can be
              multi-line text. Description text paragraph can go here in 200
              words. This can be multi-line text.
            </p>
            <div className="mt-6 text-left">
              <button className="px-6 py-3 text-base font-bold text-white duration-200 bg-purple-600 rounded shadow-lg md:px-8 md:text-lg hover:bg-black hover:text-white focus:outline-none">
                View Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Value;


