import React, { useState } from "react";
import hamburgerIcon from "../images/hamburger.png";
import closeIcon from "../images/close.png";

function Navbar() {
  const [toggled, setToggled] = useState(false);
  const handleToggle = () => {
    setToggled((prevState) => !prevState);
  };

  return (
    <nav className="flex justify-between items-center fixed">
      <a
        href="#Home"
        className="text-xl sm:text-2xl md:text-3xl hover:text-primary transition-all duration-300 ease-in-out"
      >
        Kunal
        <span className="text-primary hover:text-white transition-all duration-300 ease-in-out">
          Salunkhe_
        </span>
      </a>
      <ul className="hidden md:flex text-xl fixed right-5 hover:text-gray-500 ease-in-out">
        <li className="p-4 cursor-pointer hover:text-primary transition-all duration-500  ease-in-out">
          <a href="#Home">Home</a>
        </li>
        <li className="p-4 cursor-pointer hover:text-primary transition-all duration-500  ease-in-out">
          <a href="#Tech">Tech</a>
        </li>
        <li className="p-4 cursor-pointer hover:text-primary transition-all duration-500  ease-in-out">
          <a href="#Projects">Projects</a>
        </li>
        <li className="p-4 cursor-pointer hover:text-primary transition-all duration-500  ease-in-out">
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <div
        className="block cursor-pointer md:hidden z-10 fixed right-5"
        onClick={handleToggle}
      >
        {toggled ? (
          <img className="bg-primary w-5" src={closeIcon} alt="Close Icon" />
        ) : (
          <img
            className="bg-primary w-5"
            src={hamburgerIcon}
            alt="Hamburger Icon"
          />
        )}
      </div>
      <div
        className={
          toggled
            ? "md:hidden fixed top-0 left-0 bg-black h-full w-full p-4 ease-in-out transition-all duration-500"
            : "fixed left-[-100%] top-0 h-full w-full ease-in-out transition-all duration-1000"
        }
      >
        <ul className="text-xl flex flex-col h-full justify-center items-center">
          <li className="p-4 cursor-pointer">
            <a href="#Home" onClick={handleToggle}>
              Home
            </a>
          </li>
          <li className="p-4 cursor-pointer">
            <a href="#Tech" onClick={handleToggle}>
              Tech
            </a>
          </li>
          <li className="p-4 cursor-pointer">
            <a href="#Projects" onClick={handleToggle}>
              Projects
            </a>
          </li>
          <li className="p-4 cursor-pointer ">
            <a href="#Contact" onClick={handleToggle}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
