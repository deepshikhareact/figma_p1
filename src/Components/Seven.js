import React from "react";

function Seven() {
  return (
    <div className="flex flex-col justify-center items-center bg-white min-h-screen px-4 border-b-2">
      <div className="max-w-6xl w-full flex flex-col justify-end md:flex-row p-6">
        <div className="flex flex-col items-start justify-center min-h-screen bg-white p-6 ">
          <p className="text-sm md:text-base font-medium md:font-semibold text-black mb-2">
            Small Category Tag
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
            Big statement sentence goes here in one or two lines.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Seven;
