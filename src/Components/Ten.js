

import React from "react";

function Ten() {
  return (
    <div className="flex items-center justify-center min-h-screen px-2 bg-white border-b-2">
      <div className="flex flex-col w-full max-w-3xl lg:flex-row ">
        {/* Left Content Area */}
        <div className="p-16 bg-gray-200 lg:h-screen lg:flex-1">
          <h2 className="mb-4 text-lg font-bold md:text-xl lg:text-2xl">
            Sub-title goes here, which is 18 points smaller
          </h2>
          <div className="max-w-fit">
            <p className="hidden text-sm text-justify text-black lg:block md:text-base lg:text-lg">
              This is the text for larger screens. It can be 200 words long.
              This can be multi-line text. Continue with your text
              here.Description text paragraph can go here in 200 words. This can
              be multi-line text. Description text paragraph can go here in 200
              words. This can be multi-line text. Description text paragraph can
              go here in 200 words. This can be multi-line text. Description
              text paragraph can go here in 200 words. This can be multi-line
              text. Description text paragraph can go here in 200 words. This
              can be multi-line text. 
              {/* Description text paragraph can go here in
              200 words. This can be multi-line text. Description text paragraph
              can go here in 200 words. This can be multi-line text. Description
              text paragraph can go here in 200 words. This can be multi-line
              text.Description text paragraph can go here in 200 words. This can
              be multi-line text. Description text paragraph can go here in 200
              words. This can be multi-line text. */}
            </p>
            <p className="block text-sm text-justify text-black lg:hidden">
              This is the text for smaller screens. It should be concise and
              adapted for mobile view.
            </p>
          </div>
        </div>
        
        {/* Right Content Area (Empty flex-1 for spacing or future content) */}
        <div className="flex-1"></div>
      </div>
    </div>
  );
}

export default Ten;

