import React from "react";
import aa from "../../img/aa.png";
import r1 from "../../img/r1.svg";
import r2 from "../../img/r2.svg";
import r3 from "../../img/r3.svg";

const Section5 = () => {
  return (
    <section>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center space-y-8 px-8 pb-14  md:flex-row md:space-x-5 md:space-y-0">
        {/* Image Container */}
        <img src={aa} alt="" className="w-full md:w-3/5 " />
        {/* Text Container */}
        <div className="flex flex-col items-center justify-center space-y-7 md:w-2/5 max-w-sm">
          {/* Text */}
          <h4 className="text-xl font-semibold text-primary">
            A <temp className="text-secondry">user interface</temp> designed for
            the classroom
          </h4>
          {/* Item Container */}
          <div className="flex flex-col space-y-5  ">
            {/* Item 1 */}
            <div className="  flex flex-row items-center space-x-4">
              <div className="  flex h-12   w-12 items-center justify-center rounded-full border border-gray-200 shadow-lg">
                <img src={r1} alt="" width={20} height={20} />
              </div>
              <p className=" flex-1 text-sm">
                Teachers don’t get lost in the grid view and have a dedicated
                Podium space.
              </p>
            </div>
            {/* Item 1 */}
            <div className="  flex flex-row items-center space-x-4">
              <div className="  flex h-12   w-12 items-center justify-center rounded-full border border-gray-200 shadow-lg">
                <img src={r2} alt="" width={20} height={20} />
              </div>
              <p className=" flex-1 text-sm">
                Teachers don’t get lost in the grid view and have a dedicated
                Podium space.
              </p>
            </div>
            {/* Item 1 */}
            <div className="  flex flex-row items-center space-x-4">
              <div className="  flex h-12   w-12 items-center justify-center rounded-full border border-gray-200 shadow-lg">
                <img src={r1} alt="" width={20} height={20} />
              </div>
              <p className=" flex-1 text-sm">
                Teachers don’t get lost in the grid view and have a dedicated
                Podium space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
