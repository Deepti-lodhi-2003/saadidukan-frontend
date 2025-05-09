import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const categories = [
  {
    title: 'Beauty Tips',
    image: 'https://www.shaadidukaan.com/view/images/blog-cat/cate_1.webp',
  },
  {
    title: 'Mehndi-Design',
    image: 'https://www.shaadidukaan.com/view/images/blog-cat/cate_2.webp',
  },
  {
    title: 'Wedding Ideas',
    image: 'https://www.shaadidukaan.com/view/images/blog-cat/cate_3.webp',
  },
  {
    title: 'Honeymoon',
    image: 'https://www.shaadidukaan.com/view/images/blog-cat/cate_6.webp',
  },
  {
    title: 'Wedding Fashion',
    image: 'https://www.shaadidukaan.com/view/images/blog-cat/cate_8.webp',
  },
  {
    title: 'Destination',
    image: 'https://www.shaadidukaan.com/view/images/blog-cat/cate_7.webp',
  },
];

const WeddingVogue = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div>
      <Header />

      {/* Banner */}
      <div className="relative pt-16 pb-12 min-h-[35vh]">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.shaadidukaan.com/view/images/blog-banner.webp')] bg-cover bg-center bg-no-repeat z-[-2]" />
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#3e342c]/60 z-[-1]" />
        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-white text-center text-3xl font-bold">
          Wedding vogue
          </h1>
          <p className="text-white text-center text-lg mt-2">
          Your ultimate guide for wedding planning - tips, Dos, Don'ts and everything in between
          </p>
        </div>
      </div>

      {/* Slider Section */}
      <section className="bg-white text-black py-12 px-6 text-center w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Getting married soon? Book Wedding Services Here!</h1>
        <p className="text-lg mb-10">Available At The Best Prices And With Our Trust.</p>

        <div className="max-w-6xl mx-auto">
          <Slider {...settings}>
            {categories.map((cat, index) => (
              <div key={index} className="px-2">
                <div className="bg-red-50 rounded-lg overflow-hidden shadow-md transition-transform duration-500 hover:scale-105">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-55 object-cover rounded-t-lg "
                  />
                  <h1 className="text-black text-base md:text-lg py-2 ">{cat.title}</h1>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <a href="/category.jsx">
          <button className="mt-10 px-6 py-2 bg-[#ED4856] text-white hover:bg-gray-800 transition">
            View All Categories
          </button>
        </a>

      </section>

      <Footer />
    </div>
  );
};

export default WeddingVogue;
