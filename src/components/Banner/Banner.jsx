import React from "react";

function Banner() {
  return (
    <section className="w-full md:h-screen relative">
      <div className="relative flex items-center justify-center">
        <div className="md:flex-1">
          <div className="md:w-3/4 md: relative h-full h-80  m-auto md:p-4 p-2 flex flex-col md:gap-2 items-start md:border-none border border-slate-100 left-5 bg-white rounded">
            <p className="font-system text-xs font-semibold mt-1 text-gray-500 tracking-wide">
              WORK & OFFICE ATTIRE
            </p>
            <p className="text-wrap font-medium italic tracking-tight md:text-5xl text-xl font-Cormorant">
              Professional Pinstripe <br /> Blazers Collection
            </p>
            <p className="font-sans md:text-sm text-xs md:leading-6 leading-5 tracking-widest text-slate-500">
              Elevate your workwear with our Professional Pinstripe Blazers
              <br />
              Collection, where tailored sophistication meets modern <br />
              confidence for a powerfully polished office look.
            </p>
            <button className="tracking-wide mt-5 px-8 py-2 cursor-pointer border md:hover:bg-black md:hover:text-white rounded">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="md:flex-1 w-72">
          <img
            className="md:w-full bg-cover bg-center max-h-[100vh] min-h-[55vh] min-w-40"
            src="https://d2w9m16hs9jc37.cloudfront.net/dimg/blog/2022/11/imagetools3.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
