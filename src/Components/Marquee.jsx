import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".2"
      className="w-full py-[8vw] pt-[7vw] bg-[#004D43] overflow-hidden rounded-tl-3xl rounded-tr-3xl"
    >
      <div className="text border-t-[1px] border-b-[1px] border-[#dadada56] flex whitespace-nowrap items-center">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 13,
            delay: 2,
          }}
          className="text-[23vw] font-['Test_Founders_Grotesk_X-Cond_SmBd'] uppercase leading-none -mb-[8vw] -mt-[10.5vw]"
        >
          We are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 13,
            delay: 2,
          }}
          className="text-[23vw] font-bold font-['Test_Founders_Grotesk_X-Cond_SmBd'] uppercase -mb-[8vw] -mt-[10.5vw]"
        >
          We are Ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
