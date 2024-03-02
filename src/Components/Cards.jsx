import React from "react";

function Cards() {
  return (
    <div
      data-scroll
      data-scroll-option
      data-scroll-speed=".2"
      className="w-full h-screen bg-zinc-100 px-12 flex items-center justify-center"
    >
      <div className="card-container grid grid-cols-4 w-full h-[60vh] gap-4">
        {/* Cards */}
        <article className="card w-full h-full bg-[#004d43] col-span-2 rounded-lg relative flex items-center justify-center shadow-2xl">
          <img
            className="w-[11vw]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="logo-Svg"
          />
          {/* Button */}
          <button className="border-[1px] border-[#CDEA68] px-3 p-1 rounded-full font-['Neue_Montreal'] text-[14px] text-[#CDEA68] absolute left-7 bottom-7 font-bold cursor-default">
            &copy;2022-2024
          </button>
        </article>
        {/* Cards Ends */}
        {/* Cards */}
        <article className="card w-full h-full bg-[#212121] rounded-lg relative flex items-center justify-center shadow-2xl">
          <img
            className="w-[11vw]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          {/* Button */}
          <button className="border-[1px] border-[#fff] px-3 p-1 rounded-full font-['Neue_Montreal'] text-[14px] text-[#fff] absolute left-7 bottom-7 font-md uppercase duration-200 hover:bg-white hover:text-[#222]">
            rating 5.0 on clutch
          </button>
        </article>
        {/* Cards Ends */}
        {/* Cards */}
        <article className="card w-full h-full bg-[#212121] rounded-lg relative flex items-center justify-center shadow-2xl">
          <img
            className="w-[11vw]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          {/* Button */}
          <button className="border-[1px] border-[#fff] px-3 p-1 rounded-full font-['Neue_Montreal'] text-[14px] text-[#fff] absolute left-7 bottom-7 font-md uppercase duration-200 hover:bg-white hover:text-[#222]">
            business bootcamp alumni
          </button>
        </article>
        {/* Cards Ends */}
      </div>
    </div>
  );
}

export default Cards;
