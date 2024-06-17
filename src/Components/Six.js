// import React from "react";
// import image from "../Assets/img1.jpg";

// function Six() {
//   return (
//     <div className="flex justify-center items-center bg-white min-h-screen px-4 border-b-2">
//       <div className="max-w-6xl w-full flex flex-col md:flex-row p-6">
//         <div className="w-full md:w-1/2 p-4">
//           <img
//             src={image}
//             alt="Description"
//             className="  w-[364px] h-[364px] rounded-lg "
//           />
//         </div>
//         <div className="w-full md:w-1/2 p-4">
//           <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-black mb-4 md:leading-9">
//             Value Proposition Statement
//           </h1>
//           <p className="hidden md:block     text-sm md:text-base lg:text-lg text-black">
//             Description text paragraph can go here in 200 words. This can be
//             multi-line text. Description text paragraph can go here in 200
//             words. This can be multi-line text. Description text paragraph can
//             go here in 200 words. This can be multi-line text. Description text
//             paragraph can go here in 200 words. This can be multi-line text.
//             Description text paragraph can go here in 200 words. This can be
//             multi-line text.
//           </p>
//           <p className="md:hidden block text-base md:text-xl md:leading-9 text-black">
//             Description text paragraph can go here in 200 words. This can be
//             multi-line text. Description text paragraph can go here in 200
//             words. This can be multi-line text.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Six;
import React from "react";
import image from "../Assets/img1.jpg";

function Six() {
  return (
    <div className="flex justify-center items-center bg-white min-h-screen px-4 border-b-2">
      <div className="max-w-6xl w-full flex flex-col md:flex-row p-6">
        <div className="w-full md:w-1/2 p-4 flex justify-center">
          <img
            src={image}
            alt="Description"
            className="max-w-full md:max-w-[364px] h-auto rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-black mb-4 md:leading-9">
            Value Proposition Statement
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-black">
            Description text paragraph can go here in 200 words. This can be
            multi-line text. Description text paragraph can go here in 200
            words. This can be multi-line text. Description text paragraph can
            go here in 200 words. This can be multi-line text. Description text
            paragraph can go here in 200 words. This can be multi-line text.
            Description text paragraph can go here in 200 words. This can be
            multi-line text.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Six;

