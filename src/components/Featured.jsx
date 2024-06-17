import React from "react";
import { PiArrowUpRightBold } from "react-icons/pi";

function Featured() {
  return (
    <section className="w-full py-24 bg-white text-[#212121] rounded-t-[1.2rem]">
      <div className="w-full px-12 border-b-[1px] border-zinc-700 pb-[2.4rem] mb-10">
        <h1 className="text-[3rem] leading-[1] neue tracking-wide">
          Featured projects
        </h1>
      </div>
      <div className="cards px-12 neue text-sm flex gap-3 mb-11">
        <div className="card h-full w-1/2 flex flex-col gap-3 cursor-pointer">
          <div className="text flex gap-2 items-center text-left">
            <div className="rounded-full h-3 w-3 bg-black"></div>
            <p>FYDE</p>
          </div>
          <div className="card-content w-full h-[27.4rem] relative">
            <h1 className="absolute text-[#CDEA68] z-10 founder text-[7rem] tracking-tight left-full -translate-x-1/2 top-1/2 -translate-y-1/2">
              {"FYDE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="image rounded-lg">
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="pic"
              />
            </div>
          </div>
        </div>

        <div className="card h-full w-1/2 flex flex-col gap-3 cursor-pointer">
          <div className="text flex gap-2 items-center text-left">
            <div className="rounded-full h-3 w-3 bg-[#212121]"></div>
            <p>VISE</p>
          </div>
          <div className="card-content w-full h-[27.4rem] relative">
            <h1 className="absolute text-[#CDEA68] z-10 founder text-[7rem] tracking-tight -translate-x-1/2 top-1/2 -translate-y-1/2">
              {"VISE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="image rounded-lg">
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="pic"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="cards px-12 neue text-sm flex gap-3">
        <div className="card h-full w-1/2 flex flex-col gap-3 cursor-pointer">
          <div className="text flex gap-2 items-center text-left">
            <div className="rounded-full h-3 w-3 bg-[#212121]"></div>
            <p>TRAWA</p>
          </div>
          <div className="card-content w-full h-[27.4rem] relative">
            <h1 className="absolute text-[#CDEA68] z-10 founder text-[7rem] tracking-tight left-full -translate-x-1/2 top-1/2 -translate-y-1/2">
              {"TRAWA".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="image rounded-lg">
              <img
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt="pic"
              />
            </div>
          </div>
        </div>

        <div className="card h-full w-1/2 flex flex-col gap-3 cursor-pointer">
          <div className="text flex gap-2 items-center text-left">
            <div className="rounded-full h-3 w-3 bg-[#212121]"></div>
            <p>PREMIUM BLEND</p>
          </div>
          <div className="card-content w-full h-[27.4rem] relative">
            <h1 className="absolute text-[#CDEA68] z-10 founder text-[7rem] tracking-tight -translate-x-1/2 top-1/2 -translate-y-1/2">
              {"PREMIUM BLEND".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="image rounded-lg">
              <img
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt="pic"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="end px-12 mt-24 flex justify-center">
        <div className="button-op">
          <button className="btn-op rounded-3xl bg-[#212121] text-[13.1px] neue text-white flex items-center gap-9 px-5 py-[0.95rem]">
            VIEW ALL CASE STUDIES
            <div className="text-black op-logo w-[0.45rem] h-[0.45rem] rounded-full bg-white flex items-center justify-center">
              <div className="wrapper">
                <PiArrowUpRightBold />
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Featured;
