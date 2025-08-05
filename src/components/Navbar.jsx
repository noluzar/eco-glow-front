import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline, IoClose } from "react-icons/io5";
import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="fixed h-[10vh] top-0 left-0 w-full bg-[#f1e2c2] p-4 z-10 flex items-center justify-between">
        {/* Logo wrapper */}
        <div
          className={`text-xl font-bold hidden lg:block w-[8%] ${menuOpen ? "flex justify-center w-full" : ""}`}
        >
          <img src="/ec.png" alt="Logo" />
        </div>

        {/* Hamburger menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl text-[#afad55]"
        >
          ☰
        </button>

        {/* Menu items */}
        <div
          className={`absolute lg:static top-full left-0 w-full lg:w-auto bg-[#f1e2c2] lg:bg-transparent p-4 lg:p-0 space-y-4 lg:space-y-0 lg:space-x-10 lg:flex ${
            menuOpen ? "block" : "hidden"
          }`}
        >
           <div className="space-x-4 flex items-center md:hidden w-full">
            <Link to="/login">
              <button className="border-none bg-[#afad55] text-white px-4 py-2 md:w-[6vw]">
                Sign In
              </button>
            </Link>
            <Link to="/register">
              <button className="border border-black px-4 py-2 md:w-[6vw]">
                Sign Up
              </button>
            </Link>
          </div>
          <a href="/" className="block lg:inline hover:text-[#afad55]">
            Home
          </a>
          <a href="#about" className="block lg:inline hover:text-[#afad55]">
            About
          </a>
          <a href="#shop" className="block lg:inline hover:text-[#afad55]">
            Shop
          </a>
          <a href="#contact" className="block lg:inline hover:text-[#afad55]">
            Contact
          </a>
        </div>
          <div className="hidden space-x-4 md:flex items-center">
            <Link to="/login">
              <button className="border-none bg-[#afad55] text-white px-4 py-2 md:w-[6vw]">
                Sign In
              </button>
            </Link>
            <Link to="/register">
              <button className="border border-black px-4 py-2 md:w-[6vw]">
                Sign Up
              </button>
            </Link>
          </div>
      </nav>
    </div>
  );
};
