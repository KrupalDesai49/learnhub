import React from "react";
import k1 from "../../img/k1.png";
import k2 from "../../img/k2.png";

const Section3 = () => {
  return (
    <section>
      <div className="mx-auto flex max-w-4xl flex-col px-8 pb-10 pt-2">
        {/* Text Container */}
        <div className="flex flex-col items-center justify-center space-y-5">
          <h4 className="text-2xl font-bold text-primary">
            What is <span className="text-secondry">Skilline?</span>
          </h4>
          <p className="max-w-2xl text-center text-sm text-slate-600">
            Skilline is a platform that allows educators to create online
            classes whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>
        {/* Images Container */}
        <div className="mt-14 flex flex-col space-y-8 sm:flex-row sm:space-x-6 sm:space-y-0">
          {/* item 1 */}
          <div className="relative w-full  overflow-hidden rounded-2xl transition duration-200 hover:-translate-y-0.5 hover:shadow-xl sm:w-1/2">
            {/* img */}
            <img src={k1} alt="" />
            {/* text Container */}
            <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center space-y-6 bg-slate-800/50">
              <h4 className="text-2xl uppercase  tracking-tight text-white ">
                FOR INSTRUCTORS
              </h4>
              <button className="rounded-full border border-white px-6 py-3 text-white hover:border-[#29b2dd] hover:bg-[#29b2dd]">
                {" "}
                Start a class today
              </button>
            </div>
          </div>
          {/* item 2 */}
          <div className="relative w-full  overflow-hidden rounded-2xl transition duration-200 hover:-translate-y-0.5 hover:shadow-xl sm:w-1/2">
            {/* img */}
            <img src={k2} alt="" />
            {/* text Container */}
            <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center space-y-6 bg-slate-800/50">
              <h4 className="text-2xl uppercase  tracking-tight text-white ">
              FOR STUDENTS
              </h4>
              <button className="rounded-full border border-white px-6 py-3 text-white hover:border-[#29b2dd] hover:bg-[#29b2dd]">
                {" "}
                Enter access code    
                          </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
