import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1b325f] text-white px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0 mb-8">
          <img
            src="https://www.shaadidukaan.com/view/images/logo-w.png"
            alt="Logo"
            className="w-40 md:w-56"
          />
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Planning & Inspiration */}
          <div>
            <h3 className="text-lg font-semibold">Planning & Inspiration</h3>
            <ul className="pt-3 space-y-1 text-sm text-white/80">
              {[
                "Astrologer Packages",
                "Destination Wedding Packages",
                "Intimate Wedding",
                "Real Wedding",
                "Reviews - Vendor",
                "Reviews - Vendor Video",
                "Reviews - Customer Video",
                "Travels Packages",
                "Vendors",
                "Wedding Board",
                "Wedding Gallery",
                "Wedding Vogue",
              ].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="pt-3 space-y-1 text-sm text-white/80">
              {[
                "Advertise With Us",
                "Become Our Agent",
                "Become Our Franchisee",
                "E - Invite",
                "Free Listing",
                "Refer A Friend",
                "Watch Commercial",
                "Feedback/Complaints",
                "Testimonials",
                "Terms & Conditions",
                "Privacy Policy",
                "DMCA",
                "Sitemap",
              ].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* About Company */}
          <div>
            <h3 className="text-lg font-semibold">About Company</h3>
            <ul className="pt-3 space-y-1 text-sm text-white/80">
              {[
                "The Company",
                "Our Values",
                "The Logo",
                "Certification",
                "The Board",
                "Leadership Team",
                "Community",
                "Press & Media",
                "Career",
                "Internship Opportunities",
                "Life @ Shaadidukaan",
                "Locate Us",
              ].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Payment Section */}
          <div>
            <h3 className="text-lg font-semibold">Pay Now</h3>
            <div className="pt-3 flex flex-col gap-4">
              <Link to="/highlights">
              <button className="bg-pink-600 text-white px-4 py-2 text-sm w-max">
                Pay Now
              </button>
              </Link>

              {/* <div className="flex flex-wrap gap-2">
                {[
                  "https://i.pinimg.com/474x/3d/d3/de/3dd3de3c0ea439adcd71d4531e0e181c.jpg",
                  "https://i.pinimg.com/474x/e9/9c/11/e99c1127e426501bddeb9968ffa99223.jpg",
                  "https://i.pinimg.com/474x/e1/38/b7/e138b7ed5f21ba151bcc6fd2a875fe80.jpg",
                  "https://i.pinimg.com/474x/b6/e6/1a/b6e61a9597b648e1eebe3b599030c9e6.jpg",
                ].map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt=""
                    className="w-12 h-8 object-contain"
                  />
                ))}
              </div> */}

              <h3 className="pt-4 text-base font-semibold">
                We Are Available On :
              </h3>
              <div className="flex gap-2 pt-2">
                <img
                  className="w-32 h-12 rounded object-contain"
                  src="https://i.pinimg.com/474x/93/29/00/93290032b3ef8d8711b8bb97e80b1561.jpg"
                  alt=""
                />
                <img
                  className="w-32 h-12 rounded object-contain"
                  src="https://i.pinimg.com/474x/6c/cd/df/6ccddf264b4ce7082b5ebf250f4bd8f2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
