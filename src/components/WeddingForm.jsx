import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const WeddingForm = () => {
  return (
    <div>
        
     <Header />

      {/* Banner */}
      <div className="relative pt-16 pb-12 min-h-[35vh]">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.shaadidukaan.com/view/images/home-services.jpg')] bg-cover bg-center bg-no-repeat z-[-2]" />

        {/* Dark brownish overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#3e342c]/60 z-[-1]" />

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-white text-center pt-10 text-3xl font-bold">
              Submit Your Real Wedding
          </h1>
        </div>
      </div>

      {/* Wedding Form */}
      <div className="flex flex-col items-center px-5 py-10">
        <h1 className="text-3xl font-semibold text-center mb-6">Wedding Form</h1>
        <div className="w-full md:w-1/2">
          <form className="flex flex-col justify-center bg-[#FAEBD7] p-6 rounded-lg shadow-md">
            <label htmlFor="name" className="mt-2 font-medium">
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
              className="mt-1 w-full px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
            />

            <label htmlFor="partner" className="mt-2 font-medium">
              Partner's Name:
            </label>
            <input
              type="text"
              id="partner"
              name="partner"
              required
              placeholder="Enter your partner name"
              className="mt-1 w-full px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
            />

            <label htmlFor="date" className="mt-2 font-medium">
              Wedding Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              className="mt-1 w-full px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
            />

            <label htmlFor="email" className="mt-2 font-medium">
              Your Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="example@gmail.com"
              className="mt-1 w-full px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
            />

            <button
              type="submit"
              className="mt-5 p-2 rounded-lg border-none bg-[#ed4856] text-white font-semibold hover:opacity-90 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WeddingForm;
