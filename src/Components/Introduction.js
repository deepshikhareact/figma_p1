import React from "react";

function Introduction() {
  return (
    <div className="flex items-start justify-center min-h-screen px-4 bg-white border-b-2 ">
      <div className="max-w-4xl p-6 mt-16">
        <h1 className="text-2xl font-bold leading-tight text-left md:text-4xl lg:text-5xl">
          Introduction line heading or value
          <br />
          proposition goes here in 4 lines.
        </h1>
        <p className="mt-4 text-lg font-medium text-left text-black md:text-lg md:leading-7">
          Description text paragraph can go here in 200 words. This can be
          multi-line text. Description text paragraph can go here in 200 words.
          This can be multi-line text.
        </p>
        <div className="mt-6 text-left">
          <button className="px-6 py-3 text-base font-bold text-white duration-200 bg-purple-600 rounded shadow-lg md:px-8 md:text-lg hover:bg-black hover:text-white focus:outline-none">
            View Services
          </button>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
