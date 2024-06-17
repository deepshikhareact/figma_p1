// // // ServiceSelection.js
// // import React, { useState } from 'react';
// // import { FaCheck } from 'react-icons/fa'; // Ensure you have react-icons installed

// // const ServiceSelection = () => {
// //   const services = [
// //     { id: 1, icon: '🎮', label: 'Gaming' },
// //     { id: 2, icon: '📻', label: 'Radio' },
// //     { id: 3, icon: '🚑', label: 'Healthcare' },
// //     { id: 4, icon: '📲', label: 'Apps' },
// //     { id: 5, icon: '📶', label: 'Networking' }
// //   ];

// //   const [selectedServices, setSelectedServices] = useState([]);

// //   const handleClick = (service) => {
// //     setSelectedServices(prevSelected => 
// //       prevSelected.includes(service.id)
// //         ? prevSelected.filter(id => id !== service.id)
// //         : [...prevSelected, service.id]
// //     );
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
// //       <p className="mb-4 text-lg font-semibold text-center md:text-xl lg:text-2xl">
// //         Think we can support you? <br /> Please select the services you are interested in.
// //       </p>
// //       <div className="flex space-x-4">
// //         {services.map(service => (
// //           <div 
// //             key={service.id} 
// //             className="relative flex flex-col items-center cursor-pointer"
// //             onClick={() => handleClick(service)}
// //           >
// //             <div className="text-4xl md:text-5xl lg:text-6xl">
// //               {service.icon}
// //             </div>
// //             {selectedServices.includes(service.id) && (
// //               <FaCheck className="absolute top-0 right-0 text-xl text-green-500 md:text-2xl lg:text-3xl" />
// //             )}
// //             <p className="mt-2 text-sm text-center md:text-base lg:text-lg">
// //               {service.label}
// //             </p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default ServiceSelection;


// import React, { useState } from 'react';
// import { FaCheck } from 'react-icons/fa'; // Ensure you have react-icons installed

// const ServiceSelection = () => {
//   const services = [
//     { id: 1, icon: '🎮', label: 'Gaming' },
//     { id: 2, icon: '📻', label: 'Radio' },
//     { id: 3, icon: '🚑', label: 'Healthcare' },
//     { id: 4, icon: '📲', label: 'Apps' },
//     { id: 5, icon: '📶', label: 'Networkiicon'},

//     // { id: 1, icon: "bg12.png", label: 'Gaming' },
//     // { id: 2, icon: "bg122.png", label: 'Radio'  },
//     // { id: 3, icon: "bg123.png", label: 'Healthcare' },
//     // { id: 3, icon: "bg124.png", label: "Apps" },
//     // { id: 2, icon: "bg125.png", label: "Networkin" },
    
    
//   ];

//   const [selectedServices, setSelectedServices] = useState([]);

//   const handleClick = (service) => {
//     setSelectedServices(prevSelected =>
//       prevSelected.includes(service.id)
//         ? prevSelected.filter(id => id !== service.id)
//         : [...prevSelected, service.id]
//     );
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
//       <p className="mb-4 text-lg font-semibold text-center md:text-xl lg:text-2xl">
//         Think we can support you? <br /> Please select the services you are interested in.
//       </p>
//       <div className="flex flex-wrap justify-center">
//         {services.map(service => (
//           <div
//             key={service.id}
//             className="relative flex flex-col items-center w-24 mx-2 mb-4 cursor-pointer md:w-32 lg:w-40" // Adjust width for different screen sizes
//             onClick={() => handleClick(service)}
//           >
//             <div className="text-4xl md:text-5xl lg:text-6xl">
//               {service.icon}
//             </div>
//             {selectedServices.includes(service.id) && (
//               <FaCheck className="absolute top-0 right-0 text-xl text-green-500 md:text-2xl lg:text-3xl" />
//             )}
//             <p className="mt-2 text-sm text-center md:text-base lg:text-lg">
//               {service.label}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ServiceSelection;
import React, { useState } from 'react';

const ServiceSelection = () => {
  const services = [
    { id: 1, icon: 'bg12.png', label: 'Gaming' },
    { id: 2, icon: 'bg122.png', label: 'Radio' },
    { id: 3, icon: 'bg123.png', label: 'Healthcare' },
    { id: 4, icon: 'bg124.png', label: 'Apps' },
    { id: 5, icon: 'bg125.png', label: 'Networking' },
  ];

  const [selectedServices, setSelectedServices] = useState([]);

  const handleClick = (service) => {
    setSelectedServices(prevSelected =>
      prevSelected.includes(service.id)
        ? prevSelected.filter(id => id !== service.id)
        : [...prevSelected, service.id]
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
      <p className="mb-4 text-lg font-semibold text-center md:text-xl lg:text-2xl">
        Think we can support you? <br /> Please select the services you are interested in.
      </p>
      <div className="flex flex-wrap justify-center">
        {services.map(service => (
           <div
                        key={service.id}
                       className={`relative flex flex-col items-center w-24 mx-2 mb-4 cursor-pointer md:w-32 lg:w-30   ${selectedServices.includes(service.id) ? 'shadow-lg' : ''}`}
           onClick={() => handleClick(service)}
                     >
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
              <img
                src={service.icon}
                alt={service.label}
                className="object-contain w-full h-full "
              />
            </div>
            {selectedServices.includes(service.id) && (
               <div className="absolute top-0 right-0 text-xl text-white bg-green-600 rounded-full shadow-md md:text-4xl lg:text-5xl" style={{ width: '40px', height: '40px' }}>
                               ✓
                             </div>
            )}
            <p className="mt-2 text-sm text-center md:text-base lg:text-lg">
              {service.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceSelection;

