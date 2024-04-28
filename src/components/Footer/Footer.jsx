import React from "react";

function Footer() {
  return (
    <section className="py-10 relative">
      <div className="flex justify-evenly md:flex-row flex-col items-center md:gap-0 gap-8 ">
        <div className="flex flex-col gap-5 text-center">
          <h1 className="text-lg font-Cormorant italic tracking-wide font-semibold">
            Menu
          </h1>
          <ul className="flex list-none flex-col gap-2">
            <li className="text-gray-500 tracking-wide text-base cursor-pointer">
              Home
            </li>
            <li className="text-gray-500 tracking-wide text-base cursor-pointer">
              Shop
            </li>
            <li className="text-gray-500 tracking-wide text-base cursor-pointer">
              About Us
            </li>
            <li className="text-gray-500 tracking-wide text-base cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 text-center">
          <h1 className="text-lg font-Cormorant tracking-wide font-semibold italic">
            Categories
          </h1>
          <ul className="flex list-none flex-col gap-2">
            <li className="text-gray-500 tracking-wide text-base cursor-pointer">
              Casual
            </li>
            <li className="text-gray-500 tracking-wide text-base cursor-pointer">
              Work &amp; Office
            </li>
            <li className="text-gray-500 tracking-wide text-base cursor-pointer">
              Evening Dresses
            </li>
            <li className="text-gray-500 tracking-wide text-base cursor-pointer">
              Activewear
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 text-center">
          <h1 className="text-lg tracking-wide font-Cormorant font-semibold italic">
            Resources
          </h1>
          <ul className="flex list-none flex-col gap-2">
            <li className="text-gray-500 tracking-wide cursor-pointer">
              Contact Support
            </li>
            <li className="text-gray-500 tracking-wide text-base cursor-pointer">
              FAQ
            </li>
            <li className="text-gray-500 tracking-wide text-base cursor-pointer">
              Live Chat
            </li>
            <li className="text-gray-500 tracking-wide text-base cursor-pointer">
              Return
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 text-center">
          <h1 className="text-lg tracking-wide font-semibold font-Cormorant italic">
            Social Media
          </h1>
          <ul className="flex list-none flex-col gap-2">
            <li className="text-gray-500 tracking-wide text-base cursor-pointer">
              Facebook
            </li>
            <li className="text-gray-500 tracking-wide text-base cursor-pointer">
              Twitter (X)
            </li>
            <li className="text-gray-500 tracking-wide text-base cursor-pointer">
              Instagram
            </li>
            <li className="text-gray-500 tracking-wide text-base cursor-pointer">
              Pinterest
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
