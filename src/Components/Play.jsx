import React, { useEffect, useRef, useState } from "react";

function Play() {
  // Play eyes move
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div className="play w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
      >
        <div className="flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          {/* Play eyes */}
          <article className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
            <div className="w-3/5 relative h-3/5 flex items-center justify-center bg-[#222] rounded-full">
              Play
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 absolute left-[50%] top-[50%]"
              >
                <div className="w-[18px] h-[18px] bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </article>
          {/* Play eyes End */}

          {/* Play eyes */}
          <article className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
            <div className="relative w-3/5 h-3/5 flex items-center justify-center bg-[#222] rounded-full">
              Play
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 absolute left-[50%] top-[50%]"
              >
                <div className="w-[18px] h-[18px] bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </article>
          {/* Play eyes End */}
        </div>
      </div>
    </div>
  );
}

export default Play;
