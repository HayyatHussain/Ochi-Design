import React from "react";

function Cards() {
  return (
    <div className="w-full h-[70vh] bg-white px-12 flex gap-3 items-center pb-20">
      <div className="card-con w-1/2 h-[20.5rem]">
        <div className="relative flex items-center justify-center card w-full h-full bg-[#004D43] rounded-lg">
          <img
            className="w-[8.6rem]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="svg"
          />
          <button
            disabled="true"
            className="absolute left-7 bottom-7 neue text-[#cdea68] text-[13px] border-[1px] border-[#cdea68] rounded-2xl py-[0.1rem] px-2"
          >
            ©2019-2022
          </button>
        </div>
      </div>
      <div className="card-con w-1/2 h-[20.5rem]">
        <div className="cards w-full h-full rounded-lg flex gap-3">
          <div className="card relative w-1/2 h-full bg-[#212121] rounded-lg flex items-center justify-center">
            <img
              className="w-[8.6rem]"
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt="svg"
            />
            <button className="absolute left-7 bottom-7 neue text-[#e7e7e7] text-[13px] border-[1px] border-[#e7e7e7] rounded-2xl py-[0.1rem] px-2">
              RATING 5.0 ON CLUTCH
            </button>
          </div>
          <div className="card relative w-1/2 h-full bg-[#212121] rounded-lg flex items-center justify-center">
            <img
              className="w-[6.05rem]"
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt="svg"
            />
            <button className="absolute left-7 bottom-7 neue text-[#e7e7e7] text-[13px] border-[1px] border-[#e7e7e7] rounded-3xl py-[0.28rem] px-8 leading-[14px]">
              BUSINESS BOOTCAMP <br></br> ALUMNI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
