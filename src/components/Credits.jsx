import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const team = [
  {
    name: "Ankesh Barhadiya",
    role: "Founder & Visionary",
    image:
      "https://res.cloudinary.com/dyvccryuz/image/upload/v1746259326/Anku_so4got.jpg",
    email: "ankeshbarahdiya05112002@gmail.com",
    linkedin: "https://www.linkedin.com/in/ankesh-barahdiya-8704142b6",
  },
  {
    name: "Deepti Lodhi",
    role: "Co-Founder & Tech Lead",
    image: "https://res.cloudinary.com/dn3r8txro/image/upload/v1747642921/WhatsApp_Image_2025-05-19_at_13.51.12_ca844e65_bq5ytm.jpg",
    email: "lodhideepti@gmail.com",
    linkedin: "https://www.linkedin.com/in/deeptee-lodhi-0881a0260"
  },
];

const MotionDiv = motion.div;

const Credits = () => {
  return (
   <>
    <Header/>
    <div className="min-h-screen bg-gradient-to-br from-[#e6ebf5] to-[#ed4856]/10 text-[#1d2d44] font-sans px-6 py-16">
      
        <MotionDiv
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Credits & Collaborations
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
           Grateful to all who made{" "}
          <span className="text-[#ed4856] font-semibold">Saadi Dukan</span> a reality — your vision, skills, and heart made it happen.
        </p>
      </div>
      </MotionDiv>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-18 sm:gap-4 max-w-4xl mx-auto pt-10">
        {team.map((member, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-2xl border-1 border-[#ed4856]/25 shadow-xl pt-16 pb-8 px-6 text-center overflow-visible max-w-sm w-full mx-auto transition-transform duration-300 hover:scale-105"
          >
            {/* Profile Image */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-28 h-28 rounded-full border-4 border-white shadow-md overflow-hidden bg-white">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <h3 className="mt-6 text-xl font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-500 mt-2 mb-5">{member.role}</p>

            <div className="flex justify-center gap-5 text-xl text-gray-600">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0077b5] transition"
              >
                <FaLinkedin />
              </a>
              <a
                href={`mailto:${member.email}`}
                className="hover:text-red-500 transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </MotionDiv>
        ))}
      </div>

    </div>
    <Footer/>
   </>
  );
};

export default Credits;
