import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

const RealWedding = () => {
  return (
    <div>
      <Header />

      {/* Banner */}
      <div className="relative pt-16 pb-12 min-h-[35vh]">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.shaadidukaan.com/view/images/header/real-wedding.jpg')] bg-cover bg-center bg-no-repeat z-[-2]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[#3e342c]/60 z-[-1]" />
        <div className="relative z-10 px-4">
          <h1 className="text-white text-center text-3xl md:text-4xl font-bold">
            Real Wedding
          </h1>
          <p className="text-base md:text-lg mt-4 text-white max-w-2xl mx-auto text-center">
            We don’t know how love happens but you can feel it in these couples’ stories. How they met, where they first time saw each other, how the seed of love blossomed in their life that led them to marry. It is all about real weddings’ stories.
          </p>
        </div>
      </div>

      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 py-6 md:py-12">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1c355e] mb-6 md:mb-10">
          Find <span className="text-[#ed4856]">Trusted</span> Vendors
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="w-full lg:w-1/3 space-y-4">
            <h3 className="text-2xl md:text-3xl text-[#1c355e] font-bold">Filter</h3>

            {[
              {
                placeholder: "Select City",
                options: ["Ahmedabad", "Amritsar", "Bhopal", "Chandigarh", "Delhi", "Jaipur", "Mumbai", "Indore"],
              },
              {
                placeholder: "Select Culture",
                options: ["Hindu", "Bengali", "Marwari", "Sikh", "Punjabi", "Muslim", "Christian", "Jain", "Gujarati"],
              },
              {
                placeholder: "Select Vendor",
                options: ["Sony Fashion", "Kala Colour Lab", "Photography", "Fox Studio", "Frame Stories", "Vishal Studio", "Photo Vivah", "Photodezire", "JS Ramrhariy", "KJ Photoworks"],
              },
              {
                placeholder: "Select Customer",
                options: ["Aashna Weds Deepak", "Prateek Weds Etisha", "Naina Weds Arinjay", "Shivangi Weds Ankit", "Sona Weds Baibhav", "Roobi Weds Prashant", "Kavita Weds Rohan"],
              }
            ].map((select, idx) => (
              <select key={idx} className="w-full border border-[#ddd] p-3 bg-transparent text-base text-[#1c355e]">
                <option value="">{select.placeholder}</option>
                {select.options.map((opt, i) => (
                  <option key={i} value={opt.toLowerCase()}>{opt}</option>
                ))}
              </select>
            ))}

            <div className="bg-[#ebe3d8] p-6 text-center rounded-md">
              <p className="text-lg font-medium pb-4">
                Share your wedding and get featured on Shaadidukaan
              </p>
              <a href="#" className="text-white bg-[#ed4856] px-5 py-2 inline-block rounded font-semibold">
                Submit Wedding
              </a>
            </div>

            {/* Advertisement */}
            <div className="mb-5">
              <div className="flex items-center justify-center mb-3">
                <div className="h-[1.6px] bg-gray-400 w-1/2"></div>
                <span className="text-[#6D7179] text-base mx-3">Advertisement</span>
                <div className="h-[1.6px] bg-gray-400 w-1/2"></div>
              </div>
              <a href="#">
                <img
                  src="https://www.shaadidukaan.com/view/images/ads/ads-2.jpg"
                  alt="ad"
                  className="w-full rounded-md object-cover"
                />
              </a>
            </div>

            {/* Social Media Cards */}
            {[
              {
                bg: 'bg-[#ca2128]',
                icon: 'ri-pinterest-fill',
                text: 'More Inspiration on Pinterest',
              },
              {
                bg: 'bg-gradient-to-r from-[#f09433] via-[#E6683E] to-[#dc2743]',
                icon: 'ri-instagram-line',
                text: 'More Inspiration on Instagram',
              },
              {
                bg: 'bg-[#3b5998]',
                icon: 'ri-facebook-fill',
                text: 'Like us on Facebook',
              },
            ].map((item, i) => (
              <div key={i} className={`${item.bg} text-center p-6 rounded-md`}>
                <i className={`${item.icon} text-white text-3xl`}></i>
                <span className="block text-white text-xl font-bold py-2">{item.text}</span>
                <p className="text-white text-sm">@ Shaadidukaan</p>
                <a href="#" className="bg-white text-[#ed4856] px-6 py-1 mt-2 inline-block font-semibold rounded">
                  Follow
                </a>
              </div>
            ))}
          </div>

          {/* Right Grid */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
              {[
                'Accommodations', 'Venues', 'Wedding Planners', 'Corporate Event', 'Balloon Decorators', 'Photographers',
                'Caterers', 'Wedding Cake', 'Paan Vendors', 'Makeup Artists', 'Mehndi Artists', 'Bands',
                'FireWorks', 'Safe Wala', 'Tent House', 'Decorators', 'Dj Sound', 'Live Bands', 'Anchor host',
                'Rental wear', 'Accessories'
              ].map((category, index) => (
                <div
                  key={index}
                  className="rounded-md overflow-hidden shadow-md flex flex-col bg-white"
                >
                  <img
                    src={`https://www.shaadidukaan.com/view/images/cate_images/b/${index + 1}.webp`}
                    alt={category}
                    className="w-full h-[160px] object-cover"
                  />
                  <h2 className="text-center text-sm font-medium py-2 px-1">{category}</h2>
                </div>
              ))}
            </div>

            <div className="flex justify-center py-6">
              <button className="bg-[#ed4856] text-white px-6 py-2 rounded hover:bg-[#d93d4a] font-semibold">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RealWedding;
