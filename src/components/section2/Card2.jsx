import React from "react";

const Card2 = ({text1, text2,img,color}) => {
  return (
    <div>
      <div className=" relative  mb-14 flex flex-col items-center justify-center space-y-3 rounded-lg px-7 pt-14 shadow-lg border border-neutral-200 pb-6 ">
        <h4 className=" line-clamp-2  text-center flex  h-[3rem] max-w-[12rem] items-center font-semibold text-primary break-words ">
{text1}
        </h4>
        <p className="max-w-[12rem] text-center text-xs text-slate-600 break-words">
          {" "}
        {text2}
        </p>
        <div className={`absolute w-14 h-14 -top-10  rounded-full flex items-center justify-center`} style={{ backgroundColor: color }}>
            <img src={img} alt="" width={20} height={10}/>
        </div>
      </div>
      {/* <div className="flex-1 sm:w-[350px]
sm:min-w-[350px] w-full rounded-[20px] shadow-2xl px-10 py-16"> </div> */}
    </div>
  );
};

export default Card2;
