import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import { SlClose } from "react-icons/sl";

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  return (
    <div className="relative">
      <div className="hidden lg:flex flex-row justify-between px-12 py-5 items-center">
        <div className="flex gap-2 items-center">
          <img
            src="./assets/logo-icon.png"
            className="object-contain w-20 h-20"
            alt="HydraX Logo"
          />
          <img
            src="./assets/logo-text.png"
            className="object-contain w-16 h-14"
            alt="HydraX"
          />
        </div>
        {/* Nav Items */}
        <div className="hidden lg:flex  flex-row gap-4 items-center justify-between text-white uppercase">
          <Link to={"/"} className="font-medium duration-75 hover:scale-105">
            Home{" "}
          </Link>
          <Link to={"/"} className="font-medium duration-75 hover:scale-105">
            Services{" "}
          </Link>
          <Link to={"/"} className="font-medium duration-75 hover:scale-105">
            Technologies{" "}
          </Link>
          <Link to={"/"} className="font-medium duration-75 hover:scale-105">
            How To{" "}
          </Link>
        </div>

        {/* Nav Buttons Desktop */}
        <div className="hidden lg:flex gap-5 items-center justify-between text-[#fff]">
          <button className="border-2 border-white px-4 py-2 rounded-full">
            Contact Us
          </button>
          <button className="border-2 border-white px-4 py-2 rounded-full bg-gradient-to-r from-[#8176AF] to-[#7b7598]">
            Join HydraX
          </button>
        </div>
      </div>

      {/* Logos */}
      <div className=" flex flex-row justify-between items-center px-5 py-2 lg:hidden">
        <div className="flex gap-2 items-center">
          <img
            src="./assets/logo-icon.png"
            className="object-contain w-20 h-20"
            alt="HydraX Logo"
          />
          <img
            src="./assets/logo-text.png"
            className="object-contain w-16 h-14"
            alt="HydraX"
          />
        </div>
        {/* Hamburger Mobile */}
        <img
          src="./assets/Hamburger.png"
          alt="Hamburger Menu"
          className={!navState ? "cursor-pointer flex lg:hidden" : "hidden"}
          onClick={() => setNavState(!navState)}
        />
      </div>

      {navState && (
        <div className="absolute top-0 left-0 w-full flex flex-col items-center justify-center lg:hidden h-screen ">
          <MobileMenu navState={navState} setNavState={setNavState} />
        </div>
      )}
    </div>
  );
};

export const MobileMenu = ({ navState, setNavState }) => {
  return (
    <div className="flex min-h-[100vh] w-full text-white bg-black/90">
      <SlClose
        size={30}
        className="absolute top-10 text-white right-3"
        onClick={() => setNavState(!navState)}
      />

      <div className="flex flex-col w-full px-9 py-5 items-center gap-8 justify-center">
      <div className="flex gap-2 items-center">
          <img
            src="./assets/logo-icon.png"
            className="object-contain w-20 h-20"
            alt="HydraX Logo"
          />
          <img
            src="./assets/logo-text.png"
            className="object-contain w-16 h-14"
            alt="HydraX"
          />
        </div>
        <Link to={"/"} className="font-medium duration-75 hover:scale-105 active:text-lg">
          Home{" "}
        </Link>
        <Link to={"/contact"} className="font-medium duration-75 hover:scale-105 active:text-lg">
          Services{" "}
        </Link>
        <Link to={"/"} className="font-medium duration-75 hover:scale-105 active:text-lg">
          Technologies{" "}
        </Link>
        <Link to={"/"} className="font-medium duration-75 hover:scale-105 active:text-lg">
          How To{" "}
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
