import React from "react";
import q1 from "../../img/q1.png";
import play from "../../img/play-button-arrowhead.png";

const Section4 = () => {
  return (
    <section>
      <div className="mx-auto my-8 flex max-w-4xl  flex-col items-center space-y-5 px-10 md:flex-row md:space-x-8 md:space-y-0">
        {/* Text Container */}
        <div className="flex relative max-w-sm flex-col items-center md:items-start space-y-4">
          <h4 className="  text-center text-xl font-semibold text-primary md:text-left">
            Everything you can do in a physical classroom,
            <span className="text-secondry"> you can do with Skilline</span>
          </h4>
            <div className="absolute w-10 -z-10 -translate-y-7 md:-translate-x-3 h-10 bg-[#dce2ee] top-0 left-0 rounded-full"></div>
            <div className="absolute w-5 -z-10  h-5 bg-[#dce2ee] bottom-16 right-0 rounded-full"></div>
          <p className="max-w-2xl text-center text-xs text-slate-600 md:text-left">
            Skilline’s school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classrooms all in one secure cloud-based system.
          </p>
          <p className="  text-xs text-slate-600 underline  cursor-pointer">
            Learn more
          </p>
        </div>

        {/* Photo Container */}
        <div className="relative flex p-5 cursor-pointer hover:-translate-y-1 transition duration-200">
          {/* Photo */}
          <div className="relative flex items-center justify-center">
            <img src={q1} alt="" />
            <div className="absolute ">
              <button className="w-10 rounded-full  bg-white p-3 shadow-lg transition-all  duration-150 hover:-translate-y-0.5   hover:opacity-80">
                <div className=""></div>
                <img src={play} alt="" className="w-[17px] pl-[1px]" />
              </button>
            </div>
          </div>
          {/* Degine */}
          <div className="absolute -z-10 h-16 w-16 -translate-x-3 -translate-y-3 rounded-xl bg-[#23bdee]"></div>
          <div className="absolute bottom-0 right-0 -z-10 h-28 w-28 -translate-x-2 -translate-y-2 rounded-xl bg-[#2f327d]"></div>
        </div>
        
      </div>
      {/* Another Text Container */}
      
      <div className="mx-auto my-14  flex max-w-4xl  flex-col items-center">
      <div className="flex relative max-w-sm md:max-w-xl flex-col items-center  space-y-4">
          <h4 className="  text-center text-2xl font-semibold text-primary ">
          Our  <span className="text-secondry">Features</span>
          </h4>
        
          <p className="max-w-2xl text-center text-sm text-slate-600 md:text-left">
          This very extraordinary feature, can make learning activities more efficient
          </p>
        
        </div>
      </div>
    </section>
  );
};

export default Section4;
