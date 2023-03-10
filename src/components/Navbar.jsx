import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black/20 h-20 w-full fixed z-10 ">
      <div className="text-white flex justify-between items-center">
        <h1 className="text-6xl font-shalimar ml-4">Halcyon Kleos</h1>
        <div className=" hidden sm:flex">
          <ul className="flex gap-4 mr-8 text-lg">
            <a href="#home">
              <li className="cursor-pointer hover:text-gray-300 hover:border-b">
                Top
              </li>
            </a>
            <a href="#about">
              {" "}
              <li className="cursor-pointer hover:text-gray-300 hover:border-b">
                About
              </li>
            </a>
            <a href="#news">
              {" "}
              <li className="cursor-pointer hover:text-gray-300 hover:border-b">
                News
              </li>
            </a>
            <a href="#contact">
              {" "}
              <li className="cursor-pointer hover:text-gray-300 hover:border-b">
                Contact
              </li>
            </a>
            <a href="#music">
              {" "}
              <li className="cursor-pointer hover:text-gray-300 hover:border-b">
                Music
              </li>
            </a>
          </ul>
        </div>
        {/* Hamburger Menu */}
        <div
          onClick={handleNav}
          className="block  z-10 cursor-pointer sm:hidden mr-4 "
        >
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <div
          className={
            nav
              ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/60 flex justify-center items-center ease-in duration-300"
              : "md:hidden fixed top-[-100%] left-0 w-full h-screen bg-black/60 flex justify-center items-center ease-in duration-300"
          }
        >
          <ul className="text-center">
            <a href="#home">
              {" "}
              <li
                onClick={() => setNav(false)}
                className="p-4 text-3xl font-bold hover:text-gray-300 cursor-pointer"
              >
                Top
              </li>
            </a>
            <a href="#about">
              {" "}
              <li
                onClick={() => setNav(false)}
                className="p-4 text-3xl font-bold hover:text-gray-300 cursor-pointer"
              >
                About
              </li>
            </a>
            <a href="#news">
              {" "}
              <li
                onClick={() => setNav(false)}
                className="p-4 text-3xl font-bold hover:text-gray-300 cursor-pointer"
              >
                News
              </li>
            </a>
            <a href="#contact">
              {" "}
              <li
                onClick={() => setNav(false)}
                className="p-4 text-3xl font-bold hover:text-gray-300 cursor-pointer"
              >
                Contact{" "}
              </li>
            </a>
            <a href="#music">
              {" "}
              <li
                onClick={() => setNav(false)}
                className="p-4 text-3xl font-bold hover:text-gray-300 cursor-pointer"
              >
                Music
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
