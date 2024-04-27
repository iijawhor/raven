import React, { useState } from "react";
import { HeaderMenu } from "../../exports";
import { useNavigate } from "react-router-dom";
function Header() {
  const navItems = [
    { name: "Home", id: 1, path: "/", authentication: true },
    { name: "Shop", id: 2, path: "/shop", authentication: true },
    { name: "About Us", id: 3, path: "/about-us", authentication: true },
    { name: "Contact Us", id: 4, path: "/contact-us", authentication: true }
  ];

  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <header className="w-full absolute w-full flex h-fit bg-none max-h-20 items-center">
      {toggleMenu && (
        <div className="absolute w-screen h-screen top-0">
          <HeaderMenu
            navItems={navItems}
            toggleMenu={toggleMenu}
            setToggleMenu={setToggleMenu}
            handleNavigate={handleNavigate}
          />
        </div>
      )}
      <nav className="w-5/6 flex justify-between items-center h-fit py-3 m-auto px-3">
        <ul className="relative gap-4 list-none hidden lg:block lg:flex">
          {navItems.map((navItem) => (
            <li
              onClick={() => handleNavigate(navItem.path)}
              key={navItem.id}
              className="cursor-pointer text-white font-semibold text-sm "
            >
              {navItem.name}
            </li>
          ))}
        </ul>

        <div className="relative text-center flex flex-col">
          <h1 className="text-white tracking-wide text-lg">Raven</h1>
          <p className="text-white font-Cormorant tracking-wide text-lg italic -mt-2">
            Wardrobe
          </p>
        </div>
        <div className="lg:flex items-center justify-center gap-2 text-center lg:block hidden">
          <p className="relative text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white font-light"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </p>
          <p className="relative cursor-pointer text-center p-2">
            <span className="absolute top-1 right-0 bg-white h-5 w-5 text-sm rounded-full border-1 text-center ">
              10
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </p>
        </div>
        <div
          className="lg:hidden cursor-pointers"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
}

export default Header;
