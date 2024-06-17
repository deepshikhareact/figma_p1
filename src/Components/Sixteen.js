// import React, { useState } from "react";

// const Sixteen = () => {
//   const [dropdownVisible, setDropdownVisible] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   return (
//     <div className="flex items-start justify-center min-h-screen bg-white border-b-2">
//       <div className="w-full max-w-7xl">
//         <div
//           className="bg-white text-black h-[120px] py-4 flex items-center relative cursor-pointer"
//           onClick={toggleDropdown}
//         >
//           <div className="container flex items-center justify-between px-8 mx-auto md:px-14">
//             <div className="flex items-start">
//               <div className="w-8 h-8 bg-black rounded-full md:h-12 md:w-12 "></div>
//               <span className="text-lg font-semibold cursor-pointer md:text-2xl smooch-regular">
//                 LogoType
//               </span>
//             </div>

//             <div className="flex items-center">
//               <button className="mobile-menu-button">
//                 <svg
//                   className="w-8 h-10 p-1 text-black bg-yellow-400 rounded-full md:w-16 md:h-16 md:p-2"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   ></path>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//         {dropdownVisible && (
//           <div className="py-4 text-black bg-yellow-400 open-sans">
//             {/* Dropdown content goes here */}
//             <div className="bg-yellow-400 text-black flex flex-col justify-center items-end p-10 md:p-20  min-h-[calc(100vh-120px)]">
//               <div className="flex-1">
//                 <div className="w-full mb-8 text-end ">
//                   <h1 className="mb-4 text-2xl font-bold md:text-4xl">Home</h1>
//                 </div>
//                 <div className="w-full mb-8 text-end ">
//                   <h1 className="mb-4 text-2xl font-bold md:text-4xl">
//                     About Us
//                   </h1>
//                   <p className="text-lg md:text-xl">
//                     Company | People | Work With Us
//                   </p>
//                 </div>
//                 <div className="w-full mb-8 text-end ">
//                   <h1 className="mb-4 text-2xl font-bold md:text-4xl">
//                     Our Services
//                   </h1>
//                   <p className="text-lg md:text-xl">
//                     Consulting | Design | Digital & Tech | Marketing | CX
//                   </p>
//                 </div>
//                 <div className="w-full mb-8 text-end ">
//                   <h1 className="mb-4 text-2xl font-bold md:text-4xl">
//                     Our Work
//                   </h1>
//                   <p className="text-lg md:text-xl">
//                     Design | Digital & Tech | Production | Case Studies
//                   </p>
//                 </div>
//                 <div className="w-full mb-8 text-end ">
//                   <h1 className="mb-4 text-2xl font-bold md:text-4xl">
//                     Resources
//                   </h1>
//                 </div>
//                 <div className="w-full text-end">
//                   <h1 className="mb-4 text-2xl font-bold md:text-4xl">
//                     Contact Us
//                   </h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Sixteen;
import React, { useState } from "react";

const Sixteen = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-white border-b-2">
      <div className="w-full max-w-7xl">
        <div
          className="bg-white text-black h-[120px] py-4 flex items-center relative cursor-pointer"
          onClick={toggleDropdown}
        >
          <div className="container flex items-center justify-between px-8 mx-auto md:px-14">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-black rounded-full md:h-12 md:w-12"></div>
              <span className="ml-2 text-lg font-semibold cursor-pointer md:text-2xl smooch-regular">
                LogoType
              </span>
            </div>
            <div className="flex items-center">
              <button className="mobile-menu-button">
                <svg
                  className="w-8 h-10 p-1 text-black bg-yellow-400 rounded-full md:w-16 md:h-16 md:p-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {dropdownVisible && (
          <div className="py-4 text-black bg-yellow-400 open-sans">
            <div className="flex flex-col justify-center items-end p-10 md:p-20 min-h-[calc(100vh-120px)]">
              <div className="flex-1">
                <div className="w-full mb-8 text-end">
                  <a href="#" className="mb-4 text-2xl font-bold cursor-pointer md:text-4xl hover:text-white">
                    Home
                  </a>
                </div>
                <div className="w-full mb-8 text-end">
                  <a href="#" className="mb-4 text-2xl font-bold cursor-pointer md:text-4xl hover:text-white">
                    About Us
                  </a>
                  <a href="#" className="block mt-2 text-lg cursor-pointer md:text-xl hover:text-white">
                    Company | People | Work With Us
                  </a>
                </div>
                <div className="w-full mb-8 text-end">
                  <a href="#" className="mb-4 text-2xl font-bold cursor-pointer md:text-4xl hover:text-white">
                    Our Services
                  </a>
                  <a href="#" className="block mt-2 text-lg cursor-pointer md:text-xl hover:text-white">
                    Consulting | Design | Digital & Tech | Marketing | CX
                  </a>
                </div>
                <div className="w-full mb-8 text-end">
                  <a href="#" className="mb-4 text-2xl font-bold cursor-pointer md:text-4xl hover:text-white">
                    Our Work
                  </a>
                  <a href="#" className="block mt-2 text-lg cursor-pointer md:text-xl hover:text-white">
                    Design | Digital & Tech | Production | Case Studies
                  </a>
                </div>
                <div className="w-full mb-8 text-end">
                  <a href="#" className="mb-4 text-2xl font-bold cursor-pointer md:text-4xl hover:text-white">
                    Resources
                  </a>
                </div>
                <div className="w-full text-end">
                  <a href="#" className="mb-4 text-2xl font-bold cursor-pointer md:text-4xl hover:text-white">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sixteen;
