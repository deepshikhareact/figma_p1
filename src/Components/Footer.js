import React from 'react';

const Footer = () => {
  return (

<>

    {/* <div className="py-10 text-center bg-gray-300">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="flex items-center space-x-2 text-black">
            <div className="w-8 h-8 bg-black rounded-full"></div>
            <span className="text-lg font-bold">LogoType</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-5 sm:grid-cols-3 md:grid-cols-4">
          <div>
            <h5 className="mb-2 font-semibold">Home</h5>
            <ul className="space-y-1">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Home</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h5 className="mb-2 font-semibold">Services</h5>
            <ul className="space-y-1">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Service 01</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Service 02</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Service 03</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Service 04</a></li>
            </ul>
          </div>
          <div>
            <h5 className="mb-2 font-semibold">Resources</h5>
            <ul className="space-y-1">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Blogs</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Articles</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Whitepapers</a></li>
            </ul>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>

 */}


{/* <div className="flex items-center justify-center px-4">
      <div className="w-full max-w-4xl p-6 rounded-lg shadow-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl md:mb-0">
            Subscribe to our Newsletter
          </h2>
          <div className="flex flex-col items-center md:flex-row">
            <input
              type="email"
              placeholder="Your Email ID"
              className="p-3 mb-4 text-base text-gray-700 rounded-full md:text-lg md:mb-0 md:mr-4 focus:outline-none"
            />
            <button className="px-6 py-3 text-base font-bold text-black bg-white rounded-full shadow-lg md:text-lg hover:bg-gray-200 focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div> */}



<div className="flex items-center justify-center p-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      <div className="w-full max-w-4xl p-8 rounded-lg shadow-lg bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 ">
        <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl md:mb-2 md:mr-6">
          Subscribe to our Newsletter
        </h2>
        <div className="flex flex-col items-center w-full md:flex-row md:w-auto">
          <input
            type="email"
            placeholder="Your Email ID"
            className="w-full p-4 mb-4 text-gray-700 rounded-full md:w-72 focus:outline-none focus:ring-2 focus:ring-purple-500 md:mb-0 md:mr-4"
          />
          <button className="px-6 py-3 font-bold text-black bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none">
            Subscribe
          </button>
        </div>
      </div>
    </div>

{/* <div className="flex items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ">
      <div className="w-full max-w-2xl p-8 rounded-lg shadow-lg bg-opacity-20">
        <h2 className="mb-4 text-2xl font-semibold text-center text-white md:text-3xl">
          Subscribe to our Newsletter
        </h2>
        <div className="flex flex-col items-center justify-center md:flex-row">
          <input
            type="email"
            placeholder="Your Email ID"
            className="w-full p-3 mb-4 text-black rounded-full shadow-md md:w-2/3 focus:outline-none md:mb-0 md:mr-4"
          />
          <button className="w-full px-8 py-3 font-bold text-black bg-white rounded-full shadow-md md:w-auto hover:bg-gray-200">
            Subscribe
          </button>
        </div>
      </div>
    </div> */}



    <div className="py-8 bg-white " >
      <div className=" px-4 mx-auto h-[200px] w-full  border-b-2">
        {/* <div className="mb-8 text-center">
          <input
            type="email"
            placeholder="Your Email ID"
            className="w-full max-w-md px-4 py-2 font-medium border rounded-full shadow"
          />
          <button className="px-6 py-2 ml-4 font-semibold text-black bg-white rounded-full shadow">
            Subscribe
          </button>
        </div> */}
        <div className="flex flex-wrap justify-between p-8 bg-gray-300 rounded-lg">
          <div className="w-full h-[200px]  mb-4 lg:w-1/4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 mr-2 bg-black rounded-full"></div>
              <span className="text-xl font-semibold">LogoType</span>
            </div>
            <p>All rights reserved</p>
          </div>
          <div className="flex flex-wrap justify-between w-full lg:w-3/4">
            <div className="w-full mb-4 sm:w-1/2 md:w-1/4">
              <h3 className="font-bold">Home</h3>
              <ul>
                <li><a href="/" className="hover:text-gray-700">About Us</a></li>
                <li><a href="/" className="hover:text-gray-700">Contact Us</a></li>
              </ul>
            </div>
            <div className="w-full mb-4 sm:w-1/2 md:w-1/4">
              <h3 className="font-bold">Services</h3>
              <ul>
                <li><a href="/" className="hover:text-gray-700">Service 01</a></li>
                <li><a href="/" className="hover:text-gray-700">Service 02</a></li>
                <li><a href="/" className="hover:text-gray-700">Service 03</a></li>
                <li><a href="/" className="hover:text-gray-700">Service 04</a></li>
              </ul>
            </div>
            <div className="w-full mb-4 sm:w-1/2 md:w-1/4">
              <h3 className="font-bold">Resources</h3>
              <ul>
                <li><a href="/" className="hover:text-gray-700">Blogs</a></li>
                <li><a href="/" className="hover:text-gray-700">Articles</a></li>
                <li><a href="/" className="hover:text-gray-700">Whitepapers</a></li>
              </ul>
            </div>
            {/* <div className="w-full mb-4 sm:w-1/2 md:w-1/4">
              <h3 className="font-bold">Social</h3>
              <ul className="flex pt-3 space-x-4">
                <li><a href="/" className="p-3 bg-white rounded-full shadow"><span className="sr-only">Social Link 1</span></a></li>
                <li><a href="/" className="p-3 bg-white rounded-full shadow"><span className="sr-only">Social Link 2</span></a></li>
                <li><a href="/" className="p-3 bg-white rounded-full shadow "><span className="sr-only">Social Link 3</span></a></li>
              </ul>
            </div> */}

<div className="w-full mb-4 sm:w-1/2 md:w-1/4">
  {/* <h3 className="font-bold">Social</h3> */}
  <ul className="flex pt-3 space-x-4">
    <li>
      <a href="/" className="block p-3 bg-white rounded-full shadow" style={{ width: '2px', height: '2px' }}>
        <span className="sr-only">Social Link 1</span>
      </a>
    </li>
    <li>
      <a href="/" className="block p-3 bg-white rounded-full shadow" style={{width: '2px', height: '2px' }}>
        <span className="sr-only">Social Link 2</span>
      </a>
    </li>
    <li>
      <a href="/" className="block p-3 bg-white rounded-full shadow" style={{ width: '2px', height: '2px' }}>
        <span className="sr-only">Social Link 3</span>
      </a>
    </li>
  </ul>
</div>

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
