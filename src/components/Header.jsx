import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook, faInstagram, faTwitterSquare, faYoutube, faPinterest, faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import {
  faMagnifyingGlass, faUser, faPhone, faBars, faXmark
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = localStorage.getItem('token');

  return (
    <header className="w-full">
      {/* Top Info */}
      <div className="bg-[#EBE3D8] flex flex-wrap md:flex-nowrap justify-between items-center px-4 md:px-12 py-2 text-sm font-semibold text-black">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
          <span>India's Best Online Wedding Planning.</span>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} />
            <span>+91 8010-66-77-88</span>
          </div>
        </div>
        <div className="flex gap-3 text-[#1b325f] mt-2 md:mt-0">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitterSquare} />
          <Link to="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} /></Link>
          <Link to="https://in.pinterest.com/"><FontAwesomeIcon icon={faPinterest} /></Link>
          <Link to="https://www.linkedin.com/in/deeptee-lodhi-0881a0260"><FontAwesomeIcon icon={faLinkedin} /></Link>
        </div>
      </div>

      {/* Logo Section */}
      <div className="bg-[#1c355e] flex flex-col md:flex-row justify-between items-center px-4 md:px-12 py-3">
        <img
          src="https://www.shaadidukaan.com/view/images/logo-w.png"
          alt="Logo"
          className="w-[150px] max-w-full mb-2 md:mb-0"
        />
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center text-white text-sm">
          <select className="bg-white border px-3 py-1 text-black">
            <option value="">Select City</option>
            <option>Gwalior</option>
            <option>Raisen</option>
            <option>Bhopal</option>
            <option>Indore</option>
            <option>Bhind</option>
            <option>Mumbai</option>
            <option>Delhi</option>
          </select>
          <Link to="/freeListingPage">
            <h4 className="cursor-pointer font-bold">Free Listing</h4>
          </Link>
          <Link to="/login">
            <h4 className="cursor-pointer font-bold">Login</h4>
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-[#ed4856] px-4 md:px-12 py-3 flex justify-between items-center text-white relative">
        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-bold">
          <Link to="/" className="hover:text-blue-900">Home</Link>
          <Link to="/wedding" className="hover:text-blue-900">Vendors</Link>
          <Link to="/weddingVogue" className="hover:text-blue-900">Wedding Vogue</Link>
          <Link to="/realwedding" className="hover:text-blue-900">Real Wedding</Link>
          <Link to="/gallary" className="hover:text-blue-900">Gallery</Link>
        </nav>

        {/* Icons */}
        <div className="flex gap-4 text-base items-center">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="hover:text-blue-900" />
          {isLoggedIn ? (
            <Link to="/profile">
              <FontAwesomeIcon icon={faUser} className="hover:text-blue-900" />
            </Link>
          ) : (
            <Link to="/login">
              <FontAwesomeIcon icon={faUser} className="hover:text-blue-900" />
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed top-0 left-0 w-3/4 sm:w-1/2 h-90 bg-white text-black p-6 flex flex-col gap-4 z-50 shadow-lg rounded-br-4xl transition-all duration-300">
            <div className="flex justify-end">
              <button onClick={() => setMenuOpen(false)}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-900 text-sm font-semibold">Home</Link>
            <Link to="/wedding" onClick={() => setMenuOpen(false)} className="hover:text-blue-900 text-sm font-semibold">Vendors</Link>
            <Link to="/weddingVogue" onClick={() => setMenuOpen(false)} className="hover:text-blue-900 text-sm font-semibold">Wedding Vogue</Link>
            <Link to="/realwedding" onClick={() => setMenuOpen(false)} className="hover:text-blue-900 text-sm font-semibold">Real Wedding</Link>
            <Link to="/gallary" onClick={() => setMenuOpen(false)} className="hover:text-blue-900 text-sm font-semibold">Gallery</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
