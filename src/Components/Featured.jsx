import { FlatTree, motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { Power4 } from "gsap/all";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handelHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handelHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full pb-[12vw] overflow-hidden">
      <div className="w-full pt-3 pb-10 mb-[3vw] px-12 border-b-[1px] border-zinc-700">
        <h1 className="text-[3.8vw] font-['Neue_Montreal']">
          Featured projects
        </h1>
      </div>
      <div className="px-12">
        <div className="cards w-full flex gap-3">
          <div className="w-1/2 h-[80vh]">
            <div className="flex items-center gap-3 pb-6">
              <div className="w-3 h-3 bg-[#fff] rounded-full"></div>
              <div>
                <p className="uppercase">fyde</p>
              </div>
            </div>
            {/* Cards Container */}
            <motion.article
              onHoverStart={() => handelHover(0)}
              onHoverEnd={() => handelHoverEnd(0)}
              className="cardContainer relative w-full h-full bg-red-100 rounded-lg cursor-pointer"
            >
              <h1 className="text-9xl text-[#CDEA68] left-full z-[9] absolute font-['Test_Founders_Grotesk_X-Cond_SmBd'] uppercase -translate-x-1/2 top-1/2 -translate-y-1/2 flex overflow-hidden">
                {"fyde".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.2, 1, 0.5, 1],
                      delay: index * 0.02,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="card w-full h-full overflow-hidden rounded-lg">
                <img
                  className="w-full h-full"
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                  alt=""
                />
              </div>
              {/* Buttons */}
              <div className="flex w-full items-center gap-4 py-3">
                {["audit", "copywriting", "sales deck", "slides design"].map(
                  (item, index) => (
                    <button className="border-[1px] border-zinc-100 px-5 py-1 rounded-full uppercase font-['Neue_Montreal'] text-[13px] hover:bg-white hover:text-[#222] duration-200">
                      {item}
                    </button>
                  )
                )}
              </div>
              {/* Buttons Ends */}
            </motion.article>
            {/* Cards Ends */}
          </div>
          <div className="w-1/2 h-[80vh]">
            <div className="flex items-center gap-3 pb-6">
              <div className="w-3 h-3 bg-[#fff] rounded-full"></div>
              <div>
                <p className="uppercase">vise</p>
              </div>
            </div>
            {/* Cards Container */}
            <motion.article
              onHoverStart={() => handelHover(1)}
              onHoverEnd={() => handelHoverEnd(1)}
              className="cardContainer relative w-full h-full bg-red-100 rounded-lg cursor-pointer"
            >
              <h1 className="text-9xl text-[#CDEA68] right-full z-[9] absolute font-['Test_Founders_Grotesk_X-Cond_SmBd'] uppercase translate-x-1/2 top-1/2 -translate-y-1/2 overflow-hidden flex">
                {"vise".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.2, 1, 0.5, 1],
                      delay: index * 0.02,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="card w-full h-full overflow-hidden rounded-lg">
                <img
                  className="w-full h-full"
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                  alt=""
                />
              </div>
              {/* Buttons */}
              <div className="flex w-full items-center gap-4 py-3">
                {["agency", "company presentation"].map((item, index) => (
                  <button className="border-[1px] border-zinc-100 px-5 py-1 rounded-full uppercase font-['Neue_Montreal'] text-[13px] hover:bg-white hover:text-[#222] duration-200">
                    {item}
                  </button>
                ))}
              </div>
              {/* Buttons Ends */}
            </motion.article>
            {/* Cards End */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
