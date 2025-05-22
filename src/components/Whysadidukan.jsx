import React, { useState, useEffect, useRef } from 'react';

const statsData = [
  {
    title: "Vendors",
    icon: "https://www.shaadidukaan.com/view/images/w-vendors-icon.webp",
    value: 70,
    suffix: "k+",
    description: "Trusted Vendors",
  },
  {
    title: "Cities",
    icon: "https://www.shaadidukaan.com/view/images/w-cities-icon.webp",
    value: 176,
    suffix: "",
    description: "Servicing Cities.",
  },
  {
    title: "Customers",
    icon: "https://www.shaadidukaan.com/view/images/w-customers-icon.webp",
    value: 50,
    suffix: "k+",
    description: "Happy Customers.",
  },
];



const WhyShaadidukaan = () => {
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCounting();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const startCounting = () => {
    let i = 0;
    const max = Math.max(...statsData.map((item) => item.value));
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) =>
          i < statsData[index].value ? i + 1 : count
        )
      );
      if (i >= max) {
        clearInterval(interval);
      }
      i++;
    }, 20);
  };

  return (
    <div
      ref={sectionRef}
      className="w-full py-20 px-4 text-center"
      style={{
        backgroundImage:
          "url('https://www.shaadidukaan.com/view/images/why-choose-bg.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-3xl font-bold text-[rgb(27,50,95)] mt-[-62px]">
        <span className="text-red-600">Why</span> Shaadidukaan?
      </h1>

      <div className="mt-16 flex flex-col md:flex-row items-center md:justify-center gap-6">
        {statsData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-2xl w-[300px] h-[270px] shadow-lg border-2 border-gray-400 relative hover:rotate-6 transition-all duration-300"
          >
            <h1 className="text-xl font-bold mb-2 text-[rgb(27,50,95)]">
              {item.title}
            </h1>

            <div className="h-20 w-20 mx-auto mb-4 mt-2 shadow-md rounded-full flex items-center justify-center bg-white">
              <img src={item.icon} alt={item.title} className="h-12 w-12" />
            </div>

            <h2 className="text-xl text-red-600 font-bold">
              {counts[idx]}
              {item.title === 'Vendors' ? 'k+' : ''}
              {item.title === 'Customers' ? 'k+' : ''}
            </h2>
            <p className="text-base mt-1 text-gray-600 font-semibold">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyShaadidukaan;
