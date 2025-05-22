
import React, { useEffect } from "react";
import { FaGlobe, FaHeart, FaStore, FaRing } from 'react-icons/fa';
import Header from "./Header";
import Footer from "./Footer";
import Whysadidukan from "./Whysadidukan";  
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const HomeSection = () => {

  const services = [
    {
      title: "Makeup Artist12",
      img: "https://www.shaadidukaan.com/view/images/cate_images/b/11.webp",
    },
    {
      title: "Photographer",
      img: "https://www.shaadidukaan.com/view/images/cate_images/b/5.webp",
    },
    {
      title: "Wedding",
      img: "https://www.shaadidukaan.com/view/images/cate_images/b/8.webp",
    },
    {
      title: "Caterers",
      img: "https://www.shaadidukaan.com/view/images/cate_images/b/7.webp",
    },
    {
      title: "Venues",
      img: "https://www.shaadidukaan.com/view/images/cate_images/b/3.webp",
    },
    {
      title: "Mehndi Artist",
      img: "https://www.shaadidukaan.com/view/images/cate_images/b/33.webp",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);


  const images = [
    "https://www.shaadidukaan.com/view/images/blog-cat/cate_3814.webp",
    "https://i.pinimg.com/736x/ce/0a/2a/ce0a2adb16f80296644cd9a230361925.jpg",
    "https://www.shaadidukaan.com/view/images/blog-cat/cate_3813.webp",
    "https://staticm247.kalkifashion.com/media/catalog/product/p/i/pink_opulence_sherwani_set_for_grooms-sg196219_7_.jpg?w=500",
    "https://images.meesho.com/images/products/34146070/1aj8k_512.webp",
    "https://i.pinimg.com/736x/3c/54/f1/3c54f1e44aa457df48aec603790321cb.jpg",
    "https://mymandap.in/wp-content/uploads/2022/04/Mehendi-Design-for-Engagement.jpg",
    "https://i.pinimg.com/236x/df/07/44/df0744c52df96e1e3d6699c71e34677d.jpg",
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1280, // large laptop
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // mobile
        settings: { slidesToShow: 2 },
      },
    ],
  };

 const  slider2 = [
    "https://www.shaadidukaan.com/view/images/logo_cj1.png",
      "https://www.shaadidukaan.com/view/images/story1.png",
      "https://www.shaadidukaan.com/view/images/ani1.png",
      "https://www.shaadidukaan.com/view/images/new-zee-5.png",
      "https://www.shaadidukaan.com/view/images/business-standard1.png",
      "	https://www.shaadidukaan.com/view/images/bw-logo1.png",
      "	https://www.shaadidukaan.com/view/images/delhilivenews1.png"
  ]


   
 const marque = [
  {
    src: "https://www.shaadidukaan.com/vogue/wp-content/uploads/2025/05/Wedding-Planners-in-Udaipur.webp",
    title: "Best Wedding Planners in Udaipur for Your Dream Celebration",
    subtitle: "Often hailed as the “Wedding Capital”,&nbsp;&nbsp;Udaipur is one of the most romanti...",
  },
  {
    src: "https://www.shaadidukaan.com/vogue/wp-content/uploads/2025/05/Bollywood_Bridal_Jewellery_-_Featured_Photo_.webp",
    title: "Bollywood Brides &amp; The Jewellery That Stole The Show",
    subtitle: "Bollywood divas don’t merely follow trends, they are the trendsetters, especia...",
  },
  {
    src: "https://www.shaadidukaan.com/vogue/wp-content/uploads/2025/05/Bridal_Hair_Accessories-e1747639747289.webp",
    title:"Spellbound Bridal Hair Accessories: From Veils To ...",
    subtitle: "It’s the delicate and sparkling details that cast quite the enchanting spell a...",
  },
  {
    src: "https://www.shaadidukaan.com/vogue/wp-content/uploads/2025/05/Bridal_Hacks.webp",
    title: "Bridal Hacks You Didn’t Know You Needed",
    subtitle: "Having cold feet before the wedding is pretty normal in brides &amp; some may tr...",
  },
  {
    src: "https://www.shaadidukaan.com/vogue/wp-content/uploads/2025/05/Lucknow-Wedding-Planners-2.webp",
    title: "10 Best Wedding Planners in Lucknow for Royal &amp; El...",
    subtitle: "Elegance whispers through centuries-old architecture,&nbsp;culture blooms in every c...",
  },
  {
    src: "https://www.shaadidukaan.com/vogue/wp-content/uploads/2025/05/Reception_Photoshoot_Ideas-e1747307702117.webp",
    title: "Best Reception Photoshoot Ideas for Every Couple: ...",
    subtitle: "With the beautiful sunset the vows are exchanged and 'I do’s' are said - and n...",
  },
];


    const marquesettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1580, // large laptop
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 700, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };
 
  const weddings = [
    {
      couple: "Shiv & Priya",
      image: "https://www.shaadidukaan.com/userfiles/wedding_story/1676710347Rahul_Kavita.jpg",
    },
    {
      couple: "Ram & Siya",
      image: "https://www.shaadidukaan.com/userfiles/wedding_story/1657002248main-image.jpg",
    },
    {
      couple: "Radha & Krishna",
      image: "https://www.shaadidukaan.com/userfiles/wedding_story/1676707418sahil_kareena.jpg",
    },
  ];

  return (

    <div>

      <Header />
      {/* main section-------------------------------- */}
      <section
  id="Home"
  className="w-full h-[80vh] bg-cover bg-center flex items-center justify-center text-center"
  style={{
    backgroundImage:
      "url('https://www.shaadidukaan.com/user_files/web_banner/1730706489main-sd-b-n.webp')",
  }}
>
  <div
    className="text-white mt-20 md:mt-52 px-4 w-full"
  >
    <h1
      className="mx-auto text-xl sm:text-2xl md:text-3xl w-full max-w-md bg-black/60 px-2 py-2 transition-transform duration-500 hover:scale-110"
    >
      A <span className="text-pink-400">Big Day</span> Celebrations!
    </h1>

    <p
      className="text-base sm:text-lg font-semibold mt-2"
    >
      Book Verified Wedding Vendors Here.
    </p>

    <div
      className="flex flex-col md:flex-row items-center justify-center mt-6 sm:space-x-0 space-y-3 sm:space-y-0 px-2  md:px-0"
    >
      <input
        type="text"
        placeholder="Search city"
        className="py-3.5 px-4 w-full md:w-75 bg-white text-black font-semibold border-r-2 border-gray-400"
      />
      <input
        type="text"
        placeholder="Search category"
       className="py-3.5 px-4 w-full md:w-75 bg-white text-black font-semibold"
      />
      <button className="w-full md:w-auto px-10 py-3.5 bg-rose-600 text-white font-semibold hover:bg-rose-700 transition duration-300">
        Find Now
      </button>
    </div>
  </div>
</section>

      {/* scrolling slide images ----------------------------------*/}
      <div className="py-10 overflow-x-hidden bg-gray-50">
        <div className="text-center mb-8  px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Our <span className="text-pink-600">Trusted</span> Vendors
          </h1>
          <p className="text-gray-500 mt-2">Handpicked vendors loved by couples</p>
        </div>

        <div className="max-w-7xl mx-auto  px-4">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="px-0 sm:px-1">
                <div className="w-[160px] sm:w-[200px] md:w-[220px] lg:w-full h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px] rounded-xl shadow-md bg-white overflow-hidden transition-transform duration-300 hover:scale-105">

                  <img
                    src={img}
                    alt={`vendor-${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* ------------------------------------------------ */}
      <div
        className="mt-4 flex flex-wrap justify-evenly text-center px-4 py-8 w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://marketplace.canva.com/EAGEnRQbujw/1/0/1600w/canva-beige-abstract-minimalist-flower-desktop-wallpaper-fya8CA5Rnq4.jpg')",
        }}
      >
        {/* Wedding Website */}
        <Link
          to="/wedding"
          className="w-[45%] sm:w-[22%] mb-6 text-blue-900 capitalize"
        >
          <FaGlobe className="mx-auto text-3xl sm:text-4xl" />
          <h5 className="text-base sm:text-lg font-bold pt-2 pb-2">wedding website</h5>
          <p className="text-sm sm:text-base">
            we connect your memories
            <br />
            with technology.
          </p>
        </Link>

        {/* Wedding Vogue */}
        <Link
          to="/weddingVogue"
          className="w-[45%] sm:w-[22%] mb-6 text-blue-900 capitalize"
        >
          <FaHeart className="mx-auto text-3xl sm:text-4xl" />
          <h5 className="text-base sm:text-lg font-bold pt-2 pb-2">wedding vogue</h5>
          <p className="text-sm sm:text-base">
            see the trending weddings
            <br />
            and get inspiration.
          </p>
        </Link>

        {/* Verified Vendors */}
        <Link
          to="/category"
          className="w-[45%] sm:w-[22%] mb-6 text-blue-900 capitalize"
        >
          <FaStore className="mx-auto text-3xl sm:text-4xl" />
          <h5 className="text-base sm:text-lg font-bold pt-2 pb-2">verified vendors</h5>
          <p className="text-sm sm:text-base">
            find the verified vendors with
            <br />
            within your budget.
          </p>
        </Link>

        {/* Real Wedding */}
        <Link
          to="/realwedding"
          className="w-[45%] sm:w-[22%] mb-6 text-blue-900 capitalize"
        >
          <FaRing className="mx-auto text-3xl sm:text-4xl" />
          <h5 className="text-base sm:text-lg font-bold pt-2 pb-2">real wedding</h5>
          <p className="text-sm sm:text-base">
            see the insight of real and
            <br />
            latest weddings.
          </p>
        </Link>
      </div>

      {/*------------------------------------------------ */}
      <div
       className="w-full text-white px-4 md:px-[8%] py-8 text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://www.shaadidukaan.com/view/images/home-getting.png')",
        }}
        >

        <h1 className="text-2xl md:text-3xl font-semibold md:pt-7">
          Getting married soon? Book <span className="text-[#ccb1b3]"> Wedding Services </span> Here!
        </h1>
        <p className="mt-2 text-base md:text-lg mb-8">
          Available At The Best Prices And With Our Trust.
        </p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden w-full transition-transform duration-700 hover:scale-105"
            >
              <img
                src={service.img}
                alt={service.title}
                className="h-32 md:h-30 w-full object-cover rounded-t-lg"
              />
              <h1 className="text-black text-sm md:text-base py-2">
                {service.title}
              </h1>
            </div>
          ))}
        </div>

        <Link to="/category">
          <button className="mt-8 bg-[rgb(237,72,86)] text-white px-6 py-2 hover:opacity-90">
            View All Categories
          </button>
        </Link>
      </div>

      {/* ---------------------------------------------------- */}
      <div
        className="w-full bg-cover bg-center text-center py-10 px-4 sm:px-6"
        style={{
          backgroundImage:
            "url('https://www.shaadidukaan.com/view/images/home-services.webp')",
        }}
      >
        <h5 className="text-lg font-semibold text-[rgb(27,50,95)]">
          KEEP YOURSELF UPDATED
        </h5>
        <p className="text-lg mt-2">Subscribe now.</p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center sm:space-x-0 space-y-3 sm:space-y-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-[350px] px-4 py-2 font-semibold border border-gray-400 bg-white text-black"
          />
          <button className="bg-red-500 text-white px-6 py-2 text-lg w-full sm:w-auto sm:ml-0">
            Subscribe
          </button>
        </div>
      </div>

<Whysadidukan />

      {/* ------------------------------------------------------------------ */}
      <div className="w-full text-center px-6 md:px-20 py-20 bg-[#EBE3D8]">
        <h1 className="text-3xl font-bold">
          <span className="text-red-600">Real Weddings'</span> Stories
        </h1>
        <p className="mt-2 text-gray-700 text-base max-w-xl mx-auto">
          See the real wedding pics & feel the customs and traditions of various cultures.
        </p>

        <div className="mt-16 flex flex-col md:flex-row items-center md:justify-center gap-6">
          {weddings.map((wedding, index) => (
            <div
              key={index}
              className="border border-gray-400 rounded-lg overflow-hidden w-full sm:w-[280px] md:w-[300px] lg:w-[320px] shadow-md"
            >
              <img
                src={wedding.image}
                alt={wedding.couple}
                className="w-full h-60 object-cover  transition-transform duration-300 hover:scale-110"
              />
              <h1 className="text-xl font-medium mt-4 mb-4 text-gray-800">
                {wedding.couple}
              </h1>
            </div>
          ))}
        </div>
      </div>

      {/* --------------------------------------------------------------- */}
      <div className="bg-[#1B325F] text-white py-12 px-6 md:px-20 flex flex-col md:flex-row gap-10">
        {/* Left Section */}
        <div className="w-full md:w-2/4 flex flex-col justify-between text-center md:text-left">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              <span className="text-[#CCB1B3]">Contact</span> with US
            </h1>
            <p className="text-base">📧 support@shaadidukaan.com</p>
            <p className="text-base mt-2">📱 8010-66-77-88</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-2">
            <Link to="/weddingForm">
              <button className="bg-[#ed4856] text-white w-[200px] py-2.5 hover:bg-white hover:text-[#ed4856] transition font-semibold whitespace-nowrap">
                Get Free Quotation
              </button>
            </Link>
            <Link to="/weddingForm">
              <button className="w-[200px] py-2.5 bg-white text-[#ed4856] hover:bg-[#ed4856] hover:text-white transition font-semibold whitespace-nowrap">
                Submit Wedding
              </button>
            </Link>
          </div>

          <div className="mt-4  ">  {/* Reduced margin top */}
            <h2 className="text-xl font-semibold mt-2">Subscribe for latest Blogs</h2>
            <div className="flex flex-col md:flex-row justify-center md:justify-start mt-2 sm:space-x-0 space-y-3 sm:space-y-0"> {/* Reduced gap */}
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full h-[50px] md:w-1/1 px-3 py-2.5 text-gray-900 bg-white font-semibold"
              />
              <button
                className="w-full h-[50px] md:w-auto bg-[#ed4856] text-white px-8 py-2.5 hover:bg-red-600 transition"
              >
                Submit
              </button>
            </div>
          </div>
        </div>


        {/* Right Section */}
        <div className="w-full md:w-3/5 text-base">
          <h1 className="text-2xl font-bold mb-4">Shaadidukaan - Your Online Wedding Market</h1>
          <p>
            Shaadidukaan, a name in which you can trust and believe. We are one of the fastest growing online wedding
            markets where you can find the country's best wedding vendors in an instant.
            At Shaadidukaan, you can search and book a vast selection of wedding-related services like catering,
            photography, makeup, and wedding planning from verified & top-notch vendors at an affordable cost.
            <br /><br />
            Our ultimate goal is to make your wedding as memorable as possible, which we do by offering unrivaled wedding
            planning services. Now, your dream wedding will not be a dream anymore!
          </p>
        </div>
      </div>

  {/* ----------------- slider 2 ------------ */}

       <div className="max-w-7xl mx-auto px-4">
  <Slider {...settings}>
    {slider2.map((img, index) => (
      <div key={index} className="px-0 sm:px-5">
        <div className="flex justify-center items-center w-[160px] sm:w-[200px] md:w-[220px] lg:w-full h-[80px] sm:h-[90px] md:h-[100px] lg:h-[10vh] bg-white overflow-hidden transition-transform duration-300 hover:scale-105 mt-10 mb-10">
          <img
            src={img}
            alt={`vendor-${index}`}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    ))}
  </Slider>
</div>


      {/* -------------------------------------- */}
  <div
  className="py-10 overflow-x-hidden relative z-[-2]"
  style={{
    backgroundImage: "url('https://www.shaadidukaan.com/view/images/line-bg.jpg')"
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-[#1c355eb3]/90 z-[-1]"></div>

  {/* Content */}
  <div className="relative z-10">
    <div className="text-center mb-8 px-4">
      <h1 className="text-3xl md:text-3xl font-extrabold text-gray-100">
        Wedding <span className="text-[#ccb1b3]">Vogue</span>
      </h1>
      <p className="text-gray-200 mt-2">Read Wedding Planning Tips, Know tos, How tos, Dos and Don'ts & Everything Related To Weddings</p>
    </div>

    <div className="max-w-7xl mx-auto px-4">
    <Slider {...marquesettings}>
  {marque.map((img, index) => (
    <div key={index} className="px-0 sm:px-1">
      <div className="w-[300px]] sm:w-[200px] md:w-[220px] lg:w-full h-[40vh] md:h-[390px] shadow-md bg-white overflow-hidden transition-transform duration-300 hover:scale-105 pb-5">
        {/* Image */}
        <img
          src={img.src}
          alt={`vendor-${index}`}
          className="w-full h-[240px] sm:h-[250px] object-cover"
        />
        {/* Title & Subtitle */}
        <div className="py-2 px-2">
          <h3 className="text-sm sm:text-base font-semibold text-[#1c355e] pt-2">{img.title}</h3>
          <p className="text-xs sm:text-sm text-gray-500 pt-2">{img.subtitle}</p>
        </div>
      </div>
    </div>
  ))}
</Slider>

<div className="flex justify-center">
  <Link to="/weddingVogue">
    <button className="mt-8 bg-[rgb(237,72,86)] text-white px-6 py-2 hover:opacity-90">
      View More Blogs
    </button>
  </Link>
</div>


    </div>
  </div>
</div>


{/*-------------------------------------------------------------- */}
<div id="our-app" className="w-full flex flex-col md:flex-row justify-center text-center px-6 md:px-12 py-20 bg-[#F5F5F5]">
  {/* Left Column */}
  <div className="w-full md:w-1/1 flex flex-col items-center gap-6"
  data-aos="fade-up-right"
  >
    <h1 className="text-2xl md:text-3xl font-bold">
      Download Our <span className="text-[#CCB1B3]">Wedding App</span> Today.
    </h1>
    <p className="text-sm">Book Wedding Vendors. Browse Wedding Ideas. Get Free Wedding Checklist.</p>

    <div className="flex flex-col md:flex-row items-center w-full md:w-2/3 sm:space-x-0 space-y-3 sm:space-y-0">
      <input
        type="text"
        placeholder="Enter your mobile number to get the link"
        className="w-full md:w-3/1 px-4 py-3 text-black bg-white border border-gray-300 rounded"
      />
      <button className="bg-[#ed4856] text-white px-8 py-3 hover:bg-red-600 transition whitespace-nowrap">
        Send Link
      </button>
    </div>

    <p className="text-base text-black mt-4">You will receive an SMS with a link to download the App</p>

    {/* Store Buttons */}
    <div className="flex flex-col sm:flex-row gap-2 mt-6 justify-center">
      <a href="https://www.apple.com/in/app-store/" target="_blank" rel="noreferrer">
        <img
          src="https://i.pinimg.com/474x/93/29/00/93290032b3ef8d8711b8bb97e80b1561.jpg"
          alt="App Store"
          className="rounded w-40 h-12 object-cover"
        />
      </a>
      <a href="https://play.google.com/store/games?device=windows" target="_blank" rel="noreferrer">
        <img
          src="https://i.pinimg.com/474x/a8/17/80/a81780392ce94b9051ee39afd01bf01a.jpg"
          alt="Google Play"
          className="rounded w-40 h-12 object-cover"
        />
      </a>
    </div>
  </div>

  {/* Right Column */}
  <div className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0"
  data-aos="flip-left"
  data-aos-easing="ease-out-cubic"
  data-aos-duration="2000"
  >
    <img
      src="https://www.shaadidukaan.com/view/images/sd-new-app.webp"
      alt="Wedding App"
      className="w-[80%] md:w-[55%] h-auto object-cover"
    />
  </div>
</div>

      <Footer />

    </div>
  );
};

export default HomeSection;
