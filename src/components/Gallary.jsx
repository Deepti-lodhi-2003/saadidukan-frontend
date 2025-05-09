import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Gallery = () => {
  const images = [
    {
      src: "https://www.shaadidukaan.com/view/images/gallery/bride-and-groom-entry.jpg",
      title: "Bride and Groom Entry",
    },
    {
      src: "https://www.shaadidukaan.com/view/images/gallery/wedding-planning.jpg",
      title: "Punjabi Wedding",
    },
    {
      src: "https://www.shaadidukaan.com/view/images/gallery/rajasthani-wedding.jpg",
      title: "Rajasthani Wedding",
    },
    {
      src: "https://www.shaadidukaan.com/view/images/gallery/punjabi-wedding.jpg",
      title: "Punjabi Wedding",
    },
    {
      src: "https://www.shaadidukaan.com/view/images/gallery/rituals.jpg",
      title: "Rituals",
    },
    {
      src: "https://www.shaadidukaan.com/view/images/gallery/wedding-videographers.jpg",
      title: "Wedding Videographers",
    },
    {
      src: "https://www.shaadidukaan.com/user_files/v_img_02_2025/SDIMG-17399510800.jpg",
      title: "Decor",
    },
    {
      src: "https://www.shaadidukaan.com/view/images/gallery/indian-wedding.jpg",
      title: "Indian Wedding",
    },
    {
      src: "https://www.shaadidukaan.com/view/images/gallery/wedding-photographers.jpg",
      title: "Wedding Photographers",
    },
    {
      src: "https://www.shaadidukaan.com/view/images/gallery/haldi-2.jpg",
      title: "Haldi Ceremony",
    },
    {
      src: "https://www.shaadidukaan.com/user_files/v_img_02_2025/SDIMG-17398797680.jpg",
      title: "Candid Shots",
    },
    {
      src: "https://www.shaadidukaan.com/view/images/gallery/photo-and-video-ideas.jpg",
      title: "Photo & Video Ideas",
    },
    {
      src: "https://www.shaadidukaan.com/view/images/gallery/wedding-day1.jpg",
      title: "Wedding Day",
    },
  ];

  return (
    <div>
      <Header />

      {/* Banner */}
      <div className="relative pt-16 pb-12 min-h-[35vh]">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.shaadidukaan.com/view/images/header/wedding-gallery.jpg')] bg-cover bg-center bg-no-repeat z-[-2]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[#3e342c]/60 z-[-1]" />
        <div className="relative z-10">
          <h1 className="text-white text-center text-3xl font-bold">
            Wedding Photos, Latest Trends & Ideas (36,000+ Photos)
          </h1>
          <p className="text-white text-center text-lg mt-2">
            Browse from latest Wedding Photos, Ideas & Inspiration
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="px-6 md:px-12 py-4 flex gap-2 text-sm font-medium">
        <a
          href="#"
          className="text-gray-700 text-base font-semibold hover:text-pink-600"
        >
          Home
        </a>
        <span className="text-gray-700">/</span>
        <a href="#" className="text-pink-600 text-base font-semibold">
          Gallery / Photos
        </a>
      </div>

      {/* Filter Section */}
      <div className="px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center text-gray-700 py-4 gap-4">
        <h4 className="font-normal text-lg">All Categories</h4>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <select className="border border-gray-400 px-3 py-2 w-full sm:w-48 text-sm font-normal">
            <option>Select City</option>
            <option>Bhind</option>
            <option>Gwalior</option>
            <option>Raisen</option>
            <option>Bhopal</option>
            <option>Indore</option>
          </select>
          <select className="border border-gray-400 px-3 py-2 w-full sm:w-48 text-sm font-normal">
            <option>Select Category</option>
            <option>Makeup Artist</option>
            <option>Photographers</option>
            <option>Wedding Planners</option>
            <option>Caterers</option>
            <option>Mehndi Artist</option>
          </select>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-12 py-8">
        {images.map((img, i) => (
          <div
            key={i}
            className="shadow-md rounded overflow-hidden bg-white hover:shadow-lg transition-all duration-300"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-2 text-center font-medium text-sm text-gray-700">
              {img.title}
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center py-4">
        <button className="bg-pink-600 text-white px-5 py-2 rounded hover:bg-pink-700 transition">
          Load More
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
