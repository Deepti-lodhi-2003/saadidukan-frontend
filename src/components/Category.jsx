import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Category = () => {
  const categories = [
    { img: "https://www.shaadidukaan.com/view/images/cate_images/b/1.webp", title: "Accommodations" },
    { img: "https://www.shaadidukaan.com/view/images/cate_images/b/3.webp", title: "Veneus" },
    { img: "https://www.shaadidukaan.com/view/images/cate_images/b/8.webp", title: "Wedding Planners" },
    { img: "https://www.shaadidukaan.com/view/images/cate_images/b/29.webp", title: "Corporate Event" },
    { img: "https://www.shaadidukaan.com/view/images/cate_images/b/30.webp", title: "Balloon Decorators" },
    { img: "https://www.shaadidukaan.com/view/images/cate_images/b/5.webp", title: "Photographers" },
    { img: "https://www.shaadidukaan.com/view/images/cate_images/b/7.webp", title: "Caterers" },
    { img: "https://www.shaadidukaan.com/view/images/cate_images/b/31.webp", title: "Wedding Cake" },
    { img: "https://www.shaadidukaan.com/view/images/cate_images/b/32.webp", title: "Paan Vendors" },
    { img: "https://www.shaadidukaan.com/view/images/cate_images/b/11.webp", title: "Makeup Artists" },
    { img: "https://www.shaadidukaan.com/view/images/cate_images/b/33.webp", title: "Mehndi Artists" },
    { img: "https://www.shaadidukaan.com/view/images/cate_images/b/2.webp", title: "Bands" },
    { img: "https://www.shaadidukaan.com/view/images/cate_images/b/34.webp", title: "FireWorks" },
    { img: "https://www.shaadidukaan.com/view/images/cate_images/b/35.webp", title: "Safe Wala" },
    { img: "https://www.shaadidukaan.com/view/images/cate_images/b/4.webp", title: "Tent House" },
    { img: "https://www.shaadidukaan.com/view/images/cate_images/b/36.webp", title: "Decorators" },
    { img: "https://www.shaadidukaan.com/view/images/cate_images/b/15.webp", title: "More Coming..." }
  ];

  return (
    <div >
        <Header />

{/* Banner */}
<div className="relative pt-16 pb-12 min-h-[35vh]">
  <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.shaadidukaan.com/view/images/header/real-wedding.jpg')] bg-cover bg-center bg-no-repeat z-[-2]" />

  {/* Dark brownish overlay (with slight black tone) */}
  <div className="absolute top-0 left-0 w-full h-full bg-[#3e342c]/60 z-[-1]" />

  {/* Content */}
  <div className="relative z-10">
    <h1 className="text-white text-center text-3xl font-bold">
      Wedding Photos, Latest Trends & Ideas (36,000+ Photos)
    </h1>
    <p className="text-white text-center text-lg mt-2">
      Browse from latest Wedding Photos, Ideas & Inspiration
    </p>
  </div>
</div>



      <div className="w-full px-30 py-10">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="w-[200px] h-[210px] border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-[180px] object-cover"
              />
              <h2 className="text-center text-base font-medium mt-1">{cat.title}</h2>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Category;
