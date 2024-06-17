// import React from "react";

// function Nine() {
//   return (
//     <>
//       <div className="flex justify-center items-center bg-white min-h-screen px-4 border-b-2">
//         <div className="max-w-6xl w-full flex flex-col items-center  p-6">
//           <div className="mb-4">
//             <p className="text-sm font-semibold text-gray-600">Testimonial</p>
//           </div>
//           <div className="mb-4 md:mb-0">
//             <h1 className="text-xl md:text-2xl lg:text-3xl text-center font-bold text-black ">
//               Great work! Love the way these guys approach a problem and come up
//               with a solution.
//             </h1>
//             <div className="hidden md:block">
//               <div className="flex justify-center items-center ">
//                 <div className="flex justify-between w-full max-w-4xl mt-4">
//                   <button className="text-black text-4xl">
//                     {String.fromCharCode(8592)}
//                   </button>
//                   <button className="text-black text-4xl">
//                     {String.fromCharCode(8594)}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="mb-6 max-w-2xl">
//             <p className="text-sm md:text-base lg:text-lg text-black">
//               Detailed testimonial content goes here, in multiple lines.
//               Detailed testimonial content goes here, in multiple lines.
//               Detailed testimonial content goes here, in multiple lines.
//               Detailed testimonial content goes here, in multiple lines.
//             </p>
//           </div>

//           <div className="mb-6">
//             <p className="text-sm font-semibold text-black">Steve Jobs</p>
//             <p className="text-xs text-gray-600">CEO - APPLE</p>
//           </div>
//           <div className="md:hidden flex justify-between w-full max-w-2xl">
//             <button className="text-black text-3xl">
//               {String.fromCharCode(8592)}
//             </button>
//             <button className="text-black text-3xl">
//               {String.fromCharCode(8594)}
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Nine;


import React, { useState } from "react";

function Nine() {
  // Define testimonials as an array of objects
  const testimonials = [
    {
      content:
        "Great work! Love the way these guys approach a problem and come up with a solution. Detailed testimonial content goes here, in multiple lines. Detailed testimonial content goes here, in multiple lines.",
      author: "Steve Jobs",
      position: "CEO - APPLE",
    },
    {
      content:
        "Another testimonial content. This is a shorter testimonial. It demonstrates the carousel feature.",
      author: "Elon Musk",
      position: "CEO - Tesla",
    },
    {
      content:
        "Yet another testimonial. This one has a different perspective on our work and service quality.",
      author: "Bill Gates",
      position: "Co-Founder - Microsoft",
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const goToPreviousTestimonial = () => {
    const newIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentTestimonialIndex(newIndex);
  };

  const goToNextTestimonial = () => {
    const newIndex = (currentTestimonialIndex + 1) % testimonials.length;
    setCurrentTestimonialIndex(newIndex);
  };

  return (
    <div className="flex justify-center items-center bg-white min-h-screen px-4 border-b-2">
      <div className="max-w-6xl w-full flex flex-col items-center p-6">
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-600">Testimonial</p>
        </div>
        <div className="mb-4 md:mb-0 max-w-2xl text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-black">
            {testimonials[currentTestimonialIndex].content}
          </h1>
          <div className="hidden md:flex justify-center items-center mt-4">
            <button
              className="text-black text-4xl"
              onClick={goToPreviousTestimonial}
            >
              {String.fromCharCode(8592)}
            </button>
            <button
              className="text-black text-4xl"
              onClick={goToNextTestimonial}
            >
              {String.fromCharCode(8594)}
            </button>
          </div>
        </div>
        <div className="mb-6 max-w-2xl">
          <p className="text-sm md:text-base lg:text-lg text-black">
            {testimonials[currentTestimonialIndex].content}
          </p>
        </div>
        <div className="mb-6">
          <p className="text-sm font-semibold text-black">
            {testimonials[currentTestimonialIndex].author}
          </p>
          <p className="text-xs text-gray-600">
            {testimonials[currentTestimonialIndex].position}
          </p>
        </div>
        <div className="md:hidden flex justify-between w-full max-w-2xl mt-4">
          <button
            className="text-black text-3xl"
            onClick={goToPreviousTestimonial}
          >
            {String.fromCharCode(8592)}
          </button>
          <button
            className="text-black text-3xl"
            onClick={goToNextTestimonial}
          >
            {String.fromCharCode(8594)}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nine;
