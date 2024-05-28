import React from "react";

function Marquee() {
  return (
    <div className="black bg-zinc-900">
      <div className="w-full bg-[#004D43] py-20 rounded-t-[1.2rem]">
        <div className="text text-[21.5rem] font-semibold founder flex items-center gap-10 border-y-2 border-zinc-300 leading-[0.82] whitespace-nowrap overflow-hidden">
          <h1 className="-mt-[2.27rem]">WE ARE OCHI</h1>
          <h1 className="-mt-[2.27rem]">WE ARE OCHI</h1>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
