import React from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

const Nav = () => {
  return (
    <>
        <header id="header f">
          <div className="flex-1 top-0 bottom-0 left-0 right-0 bg-[#ffebe7]">
          {/* Navbar Container */}
          <div className="mx-auto flex items-center max-w-7xl justify-between bg-[#ffebe7] py-3 pl-8  pr-10 text-sm lg:pl-12 lg:text-base ">
            <Logo />
            <NavMenu />
          </div></div>
        </header>
    </>
  );
};

export default Nav;
