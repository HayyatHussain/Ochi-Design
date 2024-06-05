import React, { useEffect, useState } from "react";

function Video() {
  const [rotate, setRotate] = useState(0);
  const [mX, setMouseX] = useState(0);
  const [mY, setMouseY] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX,
        mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angleInDegrees = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
      setRotate(angleInDegrees - 180);
      setMouseX(mouseX);
      setMouseY(mouseY);
    });
  });

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className="relative cursor-pointer w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-cover bg-center">
        <div className="flex gap-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-center w-[11.35rem] h-[11.35rem] bg-[#F4F4F4] rounded-full">
            <div className="bg-[#212121] rounded-full w-[60.7%] h-[60.7%] relative">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute w-full h-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="bg-[#F4F4F4] rounded-full w-5 h-5"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[11.35rem] h-[11.35rem] bg-[#F4F4F4] rounded-full">
            <div className="bg-[#212121] rounded-full w-[60.7%] h-[60.7%] relative">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute w-full h-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="bg-[#F4F4F4] rounded-full w-5 h-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
