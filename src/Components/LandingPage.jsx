import { motion } from "framer-motion";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      className="w-full h-fit bg-zinc-900 pt-1 overflow-hidden"
    >
      <div className="text-structure mt-52 px-12">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[9vw] h-[6.5vw] relative top-[0.5vw] mr-4 rounded-[10px] overflow-hidden"
                  >
                    <img
                      className="w-full h-full"
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className="font-['Test_Founders_Grotesk_X-Cond_SmBd'] uppercase text-[10vw] font-semibold leading-[7.7vw]">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-[4rem] flex justify-between items-center bg-zinc-900 px-12 py-3 pb-12">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md text-white">{item}</p>
        ))}
        <div className="start flex items-center gap-3">
          <div className="px-4 py-1 border-[1px] rounded-full border-zinc-500 font-light text-sm uppercase cursor-pointer">
            Start the project
          </div>
          <div className="w-8 h-8 rounded-full border-[1px] border-zinc-500 p-2 flex items-center justify-center text-[0.8rem] cursor-pointer">
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
