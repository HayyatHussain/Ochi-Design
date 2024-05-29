import React from "react";
import { PiArrowUpRightBold } from "react-icons/pi";

function About() {
  return (
    <section className="w-full py-20 bg-[#CDEA68] rounded-[1.2rem] text-black neue">
      <h1 className="px-12 mb-12 text-[3rem] leading-[1]">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="flex border-y-[1px] border-[#a1b562] px-12 pt-4 pb-[6.3rem] text-[14.5px]">
        <p className="basis-[50%]">What you can expect:</p>
        <div className="basis-[23.7%] flex flex-col gap-7">
          <p>
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </p>
          <p>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className="flex flex-col basis-[26.3%] justify-end gap-3 pl-[7.3rem]">
          <p>S:</p>
          <div className="links flex flex-col">
            {["Instagram", "Behance", "Facebook", "linkedin"].map(
              (item, index) => (
                <a key={index} className={`text-[14.7px] cursor-pointer`}>
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
      <div className="pt-4 flex px-12">
        <div className="w-1/2 concon">
          <h1 className="text-[3rem] leading-[1]">Our approach:</h1>
          <button className="read-btn rounded-3xl bg-[#212121] text-[13.1px] text-white w-[9.7rem] h-[3.2rem] mt-5 flex items-center justify-between pl-5">
            READ MORE
            <div className="mr-5 read-logo w-[0.45rem] h-[0.45rem] rounded-full bg-white flex items-center justify-center text-[1rem]">
              <PiArrowUpRightBold />
            </div>
          </button>
        </div>
        <div className="w-1/2 overflow-hidden s-con">
          <img
            className="s-img rounded-xl relative left-[3px]"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="side-picture"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
