import React from "react";
function HeaderMenu({
  setToggleMenu,
  toggleMenu,
  navItems,
  navigate,
  handleNavigate
}) {
  return (
    <div className="min-h-screen relative w-screen bg-black z-10">
      <div className="flex justify-between px-4 py-3">
        <div className="relative text-center flex flex-col">
          <h1 className="text-white tracking-wide text-lg">Raven</h1>
          <p className="text-white font-Cormorant tracking-wide text-lg italic -mt-2">
            Wardrobe
          </p>
        </div>
        <div
          className="cursor-pointer relative right-14 top-4"
          onClick={() => setToggleMenu(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>

      <ul className=" relative flex flex-col gap-5 margin-auto items-center justify-center top-60">
        {navItems.map((navItem) => (
          <li
            onClick={() => handleNavigate(navItem.path)}
            key={navItem.id}
            className="cursor-pointer text-xl tracking-wide text-white font-semibold text-sm"
          >
            {navItem.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeaderMenu;
