// TabSection.js
import React, { useState } from "react";

const Thirteen = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <div className="flex justify-center items-center bg-white min-h-screen px-4 border-b-2">
        <div className="max-w-6xl w-full flex flex-col md:flex- p-6">
          <div className="flex flex-col md:flex-row w-full">
            <div
              className={`p-4 cursor-pointer flex-grow text-center ${
                activeTab === 1
                  ? "bg-gray-200 text-black"
                  : "bg-black text-yellow-500"
              }`}
              onClick={() => setActiveTab(1)}
            >
              Tab Heading 01
            </div>
            <div
              className={`p-4 cursor-pointer flex-grow text-center ${
                activeTab === 2
                  ? "bg-gray-200 text-black"
                  : "bg-black text-yellow-500"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Tab Heading 02
            </div>
          </div>

          <div className="p-6 md:p-12 lg:p-16 bg-black text-white min-h-[450px] h-auto">
            <div className={`${activeTab === 1 ? "block" : "hidden"}`}>
              <div className="space-y-12 mt-4 md:mt-6 lg:mt-8">
                <p className="text-xs md:text-sm uppercase mb-2">Category</p>
                <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
                  Introduction line heading or value proposition goes here in 4
                  lines.
                </h1>
                <button className="bg-yellow-500 text-black px-4 py-2 md:px-6 md:py-3 rounded-md text-sm md:text-lg hover:bg-yellow-600">
                  Know More
                </button>
              </div>
            </div>
            <div className={`${activeTab === 2 ? "block" : "hidden"}`}>
              <div className="space-y-8 md:space-y-10 lg:space-y-12 mt-4 md:mt-6 lg:mt-8">
                <p className="text-xs md:text-sm uppercase mb-2">Services</p>
                <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
                  All about services will be presented here.
                </h1>
                <button className="bg-yellow-500 text-black px-4 py-2 md:px-6 md:py-3 rounded-md text-sm md:text-lg hover:bg-yellow-600">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thirteen;
