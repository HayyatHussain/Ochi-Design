import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <section className="w-full bg-[#004D43] py-[6.2rem] rounded-t-[1.2rem]">
      <div className="text text-[21.5rem] font-semibold founder flex items-center border-y-2 border-zinc-300 leading-[0.82] whitespace-nowrap overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 34 }}
          className="flex"
        >
          {[
            "WE ARE OCHI",
            "WE ARE OCHI",
            "WE ARE OCHI",
            "WE ARE OCHI",
            "WE ARE OCHI",
            "WE ARE OCHI",
          ].map((item, index) => (
            <h1 className={`-mt-[2.27rem] ${index != 5 && "pr-10"}`}>{item}</h1>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Marquee;
