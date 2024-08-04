import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-10">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo and Name */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            <span className="text-blue-500">Art</span> Gallery
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500">
            About Us
          </Link>
          <Link to="/art" className="text-gray-700 hover:text-blue-500">
            Art
          </Link>
          <Link
            to="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-500 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-3">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-500"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-500"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/art"
              className="text-gray-700 hover:text-blue-500"
              onClick={toggleMenu}
            >
              Art
            </Link>
            <Link
              to="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={toggleMenu}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
