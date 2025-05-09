import React from "react";
import { Link } from 'react-router-dom';

const FreeListingPage = () => {
  return (
    <section className="bg-gray-300 px-4 md:px-12">
      <div className="bg-white pb-20 mb-[-10px]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-6 bg-gray-100 border-b border-gray-200">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <img
              src="https://www.shaadidukaan.com/view/images/the-logo.svg"
              alt="Logo"
              className="w-36 md:w-[150px]"
            />
            <h1 className="text-2xl md:text-3xl text-gray-700 font-bold">Free listing</h1>
          </div>
          <div className="pt-4 md:pt-2 flex items-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Login Icon"
              className="w-6 h-6"
            />
            <a href="/login.html" className="text-black flex items-center gap-1">
              <i className="fa-solid fa-user text-lg"></i>
              <Link to="/login"><h1 className="text-base font-semibold">Login</h1></Link>
            </a>
          </div>
        </div>

        {/* Select City & Category Section */}
        <div className="max-w-screen-lg mx-auto mt-12 p-6 bg-gray-100 rounded">
          <h1 className="text-xl md:text-2xl font-light">Select City & Category</h1>
          <p className="text-gray-600 my-2 text-sm font-semibold">
            Just select the right city and category to list your business at the right position.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <select className="border border-gray-400 p-2 w-full bg-white text-sm">
              <option value="">Select Category*</option>
              <option value="">Accommodations</option>
              <option value="">Venues</option>
              <option value="">Wedding Planners</option>
              <option value="">Corporate Event Companies</option>
            </select>
            <select className="border border-gray-400 p-2 w-full bg-white text-sm">
              <option value="">Select State*</option>
              <option value="">Andhra Pradesh</option>
              <option value="">Assam</option>
              <option value="">Bihar</option>
              <option value="">Madhya Pradesh</option>
            </select>
            <select className="border border-gray-400 p-2 w-full bg-white text-sm">
              <option value="">Select City*</option>
              <option value="">Agra</option>
              <option value="">Bhopal</option>
              <option value="">Indore</option>
              <option value="">Mumbai</option>
            </select>
          </div>
        </div>

        {/* Business Details Form Section */}
        <div className="max-w-screen-lg mx-auto mt-12 p-6 bg-gray-100 rounded">
          <h1 className="text-xl md:text-2xl font-light">Fill Business Details</h1>
          <p className="text-gray-600 my-2 text-sm font-semibold">
            Fill all the essential business details rightly so that we can give your business online visibility in no time.
          </p>
          <div className="flex flex-col md:flex-row gap-6 mt-4">
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <input
                type="text"
                placeholder="Company Name *"
                className="border p-2 text-sm border-gray-400 bg-white"
              />
              <input
                type="email"
                placeholder="Email *"
                className="border p-2 text-sm border-gray-400 bg-white"
              />
              <textarea
                placeholder="Address *"
                className="border p-2 text-sm border-gray-400 bg-white"
              ></textarea>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <input
                type="tel"
                placeholder="Mobile No *"
                className="border p-2 text-sm border-gray-400 bg-white"
              />
              <input
                type="text"
                placeholder="Website"
                className="border p-2 text-sm border-gray-400 bg-white"
              />
              <textarea
                placeholder="Location *"
                className="border p-2 text-sm border-gray-400 bg-white"
              ></textarea>
            </div>
          </div>
          <button className="bg-[#ed4856] text-white px-8 py-3 text-lg mt-6 mx-auto block">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default FreeListingPage;
