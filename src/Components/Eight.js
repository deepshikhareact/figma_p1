import React from "react";

function Eight() {
  return (
    <div className="flex justify-center items-center bg-white min-h-screen px-4 border-b-2">
      <div className="max-w-6xl w-full flex flex-col items-center justify-center p-6">
        <div className="mb-4">
          <p className="text-sm font-semibold text-black">Small Category Tag</p>
        </div>
        <div className="mb-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black text-center">
            Big statement sentence goes here.
          </h1>
        </div>
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-black text-center">
            Sub-title goes here, which is 18 points smaller
          </h2>
        </div>

        <p className="text-sm md:text-base lg:text-lg text-black text-center md:max-w-prose">
          Description text paragraph can go here in 200 words. This can be
          multi-line text. Description text paragraph can go here in 200 words.
          This can be multi-line text. Description text paragraph can go here in
          200 words. This can be multi-line text. Description text paragraph can
          go here in 200 words. This can be multi-line text. Description text
          paragraph can go here in 200 words. This can be multi-line text.
          Description text paragraph can go here in 200 words. This can be
          multi-line text.
        </p>
      </div>
    </div>
  );
}

export default Eight;
