import React from "react";

function Five() {
  return (
    <>
      <div className="flex justify-end items-center bg-white min-h-screen px-4 border-b-2">
        <div className="max-w-6xl w-full flex flex-col md:flex-row p-6 ">
          <div className="border-l-4 border-purple-600 pl-4 ">
            <h1 className="text-3xl md:text-6xl font-semibold text-black mb-4">
              Value Proposition Statement
            </h1>
            <p className="hidden md:block text-base md:text-xl md:leading-9 text-black">
              Description text paragraph can go here in 200 words. This can be
              multi-line text. Description text paragraph can go here in 200
              words. This can be multi-line text. Description text paragraph can
              go here in 200 words. This can be multi-line text. Description
              text paragraph can go here in 200 words. This can be multi-line
              text. Description text paragraph can go here in 200 words. This
              can be multi-line text.
            </p>
            <p className="md:hidden block text-base md:text-xl md:leading-9 text-black">
              Description text paragraph can go here in 200 words. This can be
              multi-line text. Description text paragraph can go here in 200
              words. This can be multi-line text.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Five;
