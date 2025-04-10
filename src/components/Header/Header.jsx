import React, { useState } from "react";
import logo from "/logo.png";

const Header = () => {
  
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-[1496px] mx-auto px-4 py-4 flex justify-between items-center">

        <div className="text-2xl font-bold text-blue-600">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </div>

        <nav className="hidden md:flex space-x-8 text-lg font-medium text-[#303031] font-['DM Sans']">
          <a href="#about" className="hover:text-blue-500 transition duration-200">
            About
          </a>
          <a href="#become_a_mentor" className="hover:text-blue-500 transition duration-200">
            Become a Mentor
          </a>
        </nav>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <span className="text-3xl font-bold">&times;</span> 
          ) : (
            <span className="text-3xl">&#9776;</span> 
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-2 text-lg font-medium text-[#303031] font-['DM Sans']">
            <a
              href="#about"
              className="hover:text-blue-500 transition duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#become_a_mentor"
              className="hover:text-blue-500 transition duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Become a Mentor
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
