import React, { useState } from "react";

const NavMenu = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  function menuHandler() {
    setMenuToggle((a) => !a);
  }
  return (
    <div>
      <div className="hidden items-center space-x-8 md:flex lg:space-x-14">
        {/* Menu Container */}
        <div className="flex space-x-6 lg:space-x-11 ">
          <div className="group">
            <a href="#" className="text-primary">
              Home
            </a>
            <div className="border-b-primary mx-1 scale-0 border-b transition-all duration-150 ease-out group-hover:scale-100"></div>
          </div>
          <div className="group">
            <a href="#" className="text-primary ">
              Carrers
            </a>
            <div className="border-b-primary mx-1 scale-0 border-b transition-all duration-150 ease-out group-hover:scale-100"></div>
          </div>
          <div className="group">
            <a href="#" className="text-primary ">
              Blog
            </a>
            <div className="border-b-primary mx-1 scale-0 border-b transition-all duration-150 ease-out group-hover:scale-100"></div>
          </div>
          <div className="group">
            <a href="#" className="text-primary ">
              About Us
            </a>
            <div className="border-b-primary mx-1 scale-0 border-b transition-all duration-150 ease-out group-hover:scale-100"></div>
          </div>
        </div>

        {/* Longin Container */}
        <div className="flex space-x-4 lg:space-x-6">
          <button className="bg-white rounded-full px-8 py-2 shadow-lg hover:-translate-y-0.5  transition-all duration-150 text-primary  hover:opacity-80">
            Login
          </button>
          <button className="bg-primary hover:-translate-y-0.5 transition-all duration-150 rounded-full px-8 py-2 shadow-lg  text-white hover:opacity-80">
            Sign Up
          </button>
        </div>
      </div>

      {/* Hamurger Button */}
      <div className="md:hidden" onClick={menuHandler}>
        <button
          className={` ${
            menuToggle ? "open" : ""
          } hamburger z-40 block md:hidden md:outline-none`}
          id="menu-btn"
          type="button"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div id="menu" className={`absolute top-0 left-0 bottom-0  ${menuToggle?'flex':'hidden'} flex-col self-end  w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black `}>
            <a href="#" className="hover:text-[#65DAFF]">Home</a>
            <a href="#" className="hover:text-[#65DAFF]">Careers</a>
            <a href="#" className="hover:text-[#65DAFF]">Blog</a>
            <a href="#" className="hover:text-[#65DAFF]">About Us</a>
          </div>
    </div>
  );
};

export default NavMenu;
