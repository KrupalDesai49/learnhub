import React from "react";
import ll from "../../img/ll.png";

const Section6 = () => {
  return (
    <section>
      <div className="mx-auto flex max-w-6xl flex-col justify-center space-y-12 px-6 mb-[39rem] md:mb-[20rem] pt-10 md:flex-row md:space-x-8 md:space-y-0">
        {/* Main Text Container */}

        <div className=" flex flex-col space-y-6 md:w-1/2 lg:w-2/5">
          <div className="flex flex-row items-center space-x-3">
            <div className="h-[1px] w-20 bg-[#525596]"></div>
            <p className="text-sm uppercase tracking-widest text-primary">
              TESTIMONIAL
            </p>
          </div>
          <h2 className="text-3xl font-bold text-primary">What They Say?</h2>
          <div className="flex max-w-sm flex-col space-y-3">
            <p className="text-sm text-primary">
              Skilline has got more than 100k positive ratings from our users
              around the world.{" "}
            </p>
            <p className="text-sm text-primary">
              Some of the students and teachers were greatly helped by the
              Skilline.{" "}
            </p>
            <p className="text-sm text-primary">
              Are you too? Please give your assessment{" "}
            </p>
          </div>
          <div className="relative flex w-64 rounded-full border border-[#FF7A59] py-3 pl-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-[#FF7A59]/50">
            <button className="text-sm text-[#FF7A59]">
              Write your assessment
            </button>
            <div className="ro absolute -right-[1px] top-0 flex  h-[45px] w-[45px] items-center justify-center rounded-full border border-[#FF7A59] text-[#FF7A59] ">
              &rarr;
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative flex md:w-1/2 lg:w-3/5">
          <img src={ll} alt="" className="absolute left-0 top-0 -z-10 w-96" />
          <div className="absolute right-0 top-80 overflow-hidden rounded-lg  bg-white  shadow-xl ">
            <div className="absolute bottom-0 left-0 right-0 top-0 border-l-8  border-[#FF7A59]"></div>
            <div className="relative flex flex-col px-9 py-8">
              <p className="max-w-xs break-words border-l border-slate-400 pl-5 text-xs leading-relaxed tracking-wide text-[#5F5F7E]">
                "Thank you so much for your help. It's exactly what I've been
                looking for. You won't regret it. It really saves me time and
                effort. Skilline is exactly what our business has been lacking."
              </p>
            <div className="flex pl-5 pt-4  flex-row items-center justify-between">
              <p className="font-semibold text-sm text-[#5F5F7E]">Gloria Rose</p>
              <div className="flex flex-col space-y-1">
                <p className="text-primary text-right">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
<p className="text-[#5F5F7E] text-xs">12 reviews at Yelp</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
