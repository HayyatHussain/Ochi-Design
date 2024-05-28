import React from "react";

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
    </section>
  );
}

export default About;
