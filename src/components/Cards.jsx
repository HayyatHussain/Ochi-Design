import React from "react";

function Cards() {
  return (
    <div className="w-full h-[70vh] bg-white px-12 flex gap-3 items-center pb-20">
      <div className="card-con w-1/2 h-[20.5rem]">
        <div className="relative flex items-center justify-center card w-full h-full bg-[#004D43] rounded-lg">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="svg"
          />
          <button className="absolute left-10 bottom-8 neue">©2019-2022</button>
        </div>
      </div>
      <div className="card-con w-1/2 h-[20.5rem]">
        <div className="cards w-full h-full rounded-lg flex gap-3">
          <div className="cards w-1/2 h-full bg-[#212121] rounded-lg"></div>
          <div className="cards w-1/2 h-full bg-[#212121] rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
