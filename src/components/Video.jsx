import React from "react";

function Video() {
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className="relative w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-cover bg-center">
        <div className="flex gap-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-center w-[11.35rem] h-[11.35rem] bg-[#F4F4F4] rounded-full">
            <div className="bg-[#212121] rounded-full w-[60.7%] h-[60.7%] flex items-center justify-center">
              <div className="bg-[#F4F4F4] rounded-full w-[15%] h-[15%]"></div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[11.35rem] h-[11.35rem] bg-[#F4F4F4] rounded-full">
            <div className="bg-[#212121] rounded-full w-[60.7%] h-[60.7%] flex items-center justify-center">
              <div className="bg-[#F4F4F4] rounded-full w-[15%] h-[15%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
