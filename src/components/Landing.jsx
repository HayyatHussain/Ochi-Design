import React from "react";
import { PiArrowUpRightBold } from "react-icons/pi";

function landing() {
  return (
    <section className="w-full min-h-screen bg-zinc-900 pt-1">
      <div className="textStructure mt-36 px-[3.35rem]">
        {["we create", "eye opening", "presentations"].map((item, index) => (
          <div className="masker founder">
            <div className="w-fit flex gap-3 overflow-hidden">
              {index === 1 && (
                <div className="w-[8rem] h-[5.4rem] self-end rounded-[8px] ani-pic"></div>
              )}
              <h1 key={index} className="text-9xl uppercase leading-[100px]">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="font-['Neue_Montreal'] font-regular text-md flex justify-between items-center border-t-[1px] mt-64 border-zinc-600 px-[3.35rem] py-3">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <div className="startBtns text-[13.6px] flex justify-center items-center gap-1 cursor-pointer">
          <div className="btn-1 px-[0.8rem] py-1 border-[1.8px] border-white rounded-3xl">
            START THE PROJECT
          </div>
          <div className="relative text-lg btn-2 flex justify-center items-center w-8 h-8 border-[1.8px] border-white rounded-full">
            <PiArrowUpRightBold className="absolute z-10 arr" />
            <div className="absolute btn-bg bg-white w-0 h-0 z-0 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default landing;
