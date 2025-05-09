import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { Link } from 'react-router-dom';

const Wedding = () => {
  const features = [
    {
      img: "https://www.shaadidukaan.com/view/images/careate-website.svg",
      title: "Quick to Create",
      description:
        "Just select your preferred design, add details, and get a stunning website in no time.",
    },
    {
      img: "https://www.shaadidukaan.com/view/images/add-details.svg",
      title: "Easy to Add Details",
      description:
        "Let your guests know about your wedding location, schedule, and other wedding info.",
    },
    {
      img: "https://www.shaadidukaan.com/view/images/guist-list.svg",
      title: "Sync RSVP with Guest List",
      description: "Because we believe collecting RSVPs should be this simple.",
    },
  ];

  return (
    <div>
        <Header />

 {/* Banner */}
<div className="relative pt-16 pb-12 min-h-[35vh]">
  {/* Background Image */}
  <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.shaadidukaan.com/view/images/header/e-invite.jpg')] bg-cover bg-center bg-no-repeat z-[-2]" />

  {/* Overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-[#3e342c]/60 z-[-1]" />

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center text-center px-4">
    <h1 className="text-white text-3xl font-bold">
      Create Your Stunning Wedding Website for Free
    </h1>
    <p className="text-white text-lg mt-2 max-w-[700px]">
      Share all the significant details related to the wedding ceremony with your guests through a beautifully designed website.
    </p>
   <Link to="/register"><button
      type="submit"
      className="mt-5 px-6 py-2 bg-[#ed4856] text-white font-semibold hover:opacity-90 transition duration-200">
      Sign Up
    </button></Link>
  </div>
</div>



      {/* Hassle Section */}
      <div className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1c355e]">
              Personalize Your Free Wedding Website Without Any Hassle
            </h2>
            <p className="text-base md:text-lg mt-4 text-gray-700 max-w-2xl mx-auto">
              Enchanting customizable designs, alluring colour options. A single place for wedding schedule, RSVP, hotels, meals, and other crucial wedding info.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="border border-gray-400 rounded-lg shadow-sm hover:shadow-md transition w-full md:w-1/3 p-6 text-center bg-white"
              >
                <img src={item.img} alt={item.title} className="w-20 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#1c355e]">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* App Download Section */}
      <div className="flex flex-col md:flex-row items-center justify-between py-12 px-8 bg-white">
  <div className="md:w-1/2 text-center mb-8 md:mb-0">
    <h3 className="text-2xl md:text-3xl font-bold text-[#1c355e] mb-3">
      Still Can't Get Enough?
    </h3>
    <p className="text-base text-gray-700 mb-6">
      Download our app to save all of your guest snaps at one single place.
    </p>
    <div className="flex justify-center gap-4">
      <a href="#">
        <img
          src="https://i.pinimg.com/474x/93/29/00/93290032b3ef8d8711b8bb97e80b1561.jpg"
          alt="App Store"
          className="w-35 h-12 object-contain"
        />
      </a>
      <a href="#">
        <img
          src="https://i.pinimg.com/474x/6c/cd/df/6ccddf264b4ce7082b5ebf250f4bd8f2.jpg"
          alt="Play Store"
          className="w-39 h-12 object-contain"
        />
      </a>
    </div>
  </div>

  <div className="md:w-1/2 flex justify-center">
    <img
      src="https://www.shaadidukaan.com/view/images/gadget-app-new_2.png"
      alt="App Preview"
      className="w-2/3 md:w-1/2"
    />
  </div>
</div>

      <Footer />
    </div>
  );
};

export default Wedding;
