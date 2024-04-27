import React from "react";
import "./HeroSection.css";
function HeroSection() {
  return (
    <section className="heroSection flex justify-center items-center relative">
      <div className="flex flex-col gap-3 z-10 text-center items-center text-white lg:w-3/5 w-full px-2">
        <p className="text-sm tracking-widest text-white">CASUAL & EVERYDAY</p>
        <h1 className="font-Cormorant tracking-wide italic text-4xl md:text-7xl">
          Effortlessly Blend <br /> Comfort &amp; Style!
        </h1>
        <p className="text-center leading-6 tracking-wide">
          Effortlessly blend comfort and style with our Casual & Everyday
          collection, featuring cozy sweaters, versatile <br /> denim, laid-back
          tees, and relaxed-fit joggers for your everyday adventures
        </p>
        <button className="lg:w-1/3 mt-5 w-64 capitalize text-lg cursor-pointer border border-white hover:bg-white hover:text-black py-2">
          View Collection
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
