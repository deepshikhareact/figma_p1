import React, { useState } from "react";

function Twelve() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex justify-center items-center bg-white min-h-screen px-4 border-b-2">
      <div className="max-w-6xl w-full flex flex-col p-6 bg-gray-200">
        <button
          onClick={toggleExpand}
          className={`p-6 cursor-pointer text-xl text-start mb-4  ${
            isExpanded ? "font-extrabold text-3xl" : "font-medium"
          } text-black`}
        >
          Click to expand and see the details
        </button>

        {isExpanded && (
          <div className="w-full p-6 bg-gray-200 flex flex-col text-justify">
            {/* <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-black mb-4 md:leading-9">
              Value Proposition Statement
            </h1> */}
            <p className="hidden md:block text-sm md:text-base lg:text-lg text-black mb-4 font-medium">
              Expended text goes here in paragraph. Expended text goes here in
              paragraph. Expended text goes here in paragraph. Expended text
              goes here in paragraph. Expended text goes here in paragraph.
              Expended text goes here in paragraph. Expended text goes here in
              paragraph. Expended text goes here in paragraph. Expended text
              goes here in paragraph. Expended text goes here in paragraph.
              Expended text goes here in paragraph. Expended text goes here in
              paragraph. Expended text goes here in paragraph. Expended text
              goes here in paragraph.
            </p>
            <p className="md:hidden block text-base md:text-xl md:leading-9 text-black font-medium">
              Expended text goes here in paragraph. Expended text goes here in
              paragraph. Expended text goes here in paragraph. Expended text
              goes here in paragraph. Expended text goes here in paragraph.
              Expended text goes here in paragraph. Expended text goes here in
              paragraph.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Twelve;
