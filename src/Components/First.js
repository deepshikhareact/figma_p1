import React from "react";

function First() {
  return (
    <div className="flex justify-start items-center w-[1500px] h-[601px] bg-black mx-auto border">
      <div className="flex flex-col text-white gap-32 ml-24">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-lg leading-9">CATEGORY</h1>
          <p className="font-bold text-lg leading-[54px]">
            Introduction line heading or value proposition goes here in 4 lines.
          </p>
        </div>

        <button className="w-[228px] h-[56px] p-3 bg-[#FFDD2C] text-black font-bold text-lg leading-9">
          KNOW MORE
        </button>
      </div>
    </div>
  );
}

export default First;
