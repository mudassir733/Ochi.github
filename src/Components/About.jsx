import React from "react";

function About() {
  return (
    <div
      data-scroll
      data-scroll-option
      data-scroll-speed="-.3"
      className="w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-[#212121]"
    >
      <h1 className="font-['Neue_Montreal'] text-3xl leading-[3rem] sm:text-5xl w-[83%] px-12">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full border-t-[1px] border-[#353a2344] mt-[4vw]">
        <div className="w-full px-12 grid grid-cols-2">
          <p className="py-3 font-['Neue_Montreal'] text-[16px]">
            What you can expect:
          </p>
          <div className="py-3">
            <p className="font-['Neue_Montreal'] text-[16px] w-[40%]">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.{" "}
            </p>

            <div className="grid grid-cols-2 gap-16">
              <p className="font-['Neue_Montreal'] text-[16px] pt-6">
                We create tailored presentations to help you persuade your
                colleagues, clients, or investors. Whether it’s live or digital,
                delivered for one or a hundred people.{" "}
              </p>
              <div className="w-full">
                <p className="-mt-[3vw] font-['Neue_Montreal']">S:</p>
                <div className="flex flex-col pt-[3vw]">
                  {["Instagram", "Facebook", "Behance", "Linkedin"].map(
                    (item, index) => (
                      <a href="#" className="font-['Neue_Montreal'] w-[90px]">
                        {item}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap border-t-[1px] border-[#353a2344] mt-[5vw] px-12 pt-3">
        <div className="w-1/2">
          <h1 className="text-[3.8vw] text-[#212121] font-['Neue_Montreal']">
            Our approach:
          </h1>
          <button className="flex items-center gap-5 uppercase font-['Neue_Montreal'] bg-zinc-900 text-white text-[13px] px-[30px] py-[17px] rounded-full mt-[1vw]">
            Read more
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[75vh] rounded-2xl overflow-hidden">
          <img
            className="w-full h-full"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
