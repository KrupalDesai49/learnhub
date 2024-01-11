import React from "react";
import imgs from "../../img/hero-img.png";
import play from "../../img/play-button-arrowhead.png";

const HeroSection = () => {
  return (
    <>
      <section className=" bg-[#ffebe7]">
        {/* <div className=" "> */}
        <div className="  mx-auto flex  flex-col-reverse items-center  justify-center px-10  pb-7 md:flex-row md:space-x-20 md:space-y-0">
          {/* Hero Containt */}
          <div className="mt-14 flex  flex-col space-y-5 md:mt-0">
            <h2 className="text-primary max-w-sm text-center text-3xl font-bold md:text-left md:text-4xl lg:text-5xl">
              <temp className="text-secondry">Studying</temp> Online is now much
              easier
            </h2>

            <p className="max-w-sm text-center text-sm text-gray-500 md:text-left md:text-base">
              Skilline is an interesting platform that will teach you in more an
              interactive way
            </p>

            <div className="flex flex-col items-center md:items-start space-y-4 lg:flex-row lg:space-x-6 lg:space-y-0">
              {/* 1 buttom */}
              <div>
                <button className="bg-secondry rounded-full px-20 py-2 text-white shadow-lg transition-all  duration-150 hover:-translate-y-0.5 hover:opacity-80  lg:px-11">
                  Login
                </button>
              </div>
              {/* text */}
              <div className="flex items-center ">
                <button className="w-10 rounded-full  bg-white p-3 shadow-lg transition-all  duration-150 hover:-translate-y-0.5   hover:opacity-80">
                  <div className=""></div>
                  <img src={play} alt="" className="w-[17px] pl-[1px]" />
                </button>
                <p className="max-w-sm pl-4 text-center text-sm text-gray-500 md:text-left md:text-base">
                  Watch how it works
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="">
            <img src={imgs} alt="" className="w-96 md:w-[30rem] " />
          </div>
        </div>
        {/* Shape */}

        {/* </div> */}
      </section>
    </>
  );
};

export default HeroSection;
