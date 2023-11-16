import { motion } from "framer-motion";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import HeroInfo from "./HeroInfo";

const motionVarience = {
  initial: {
    opacity: 0.3,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 },
  },
};

const motionVarienceRight = {
  initial: {
    opacity: 0,
    x: -4,
  },
  animate: {
    opacity: 1,
    x: 1,
    transition: { delay: 0.5 },
  },
};

const Hero = () => {
  return (
    <div className=" flex  flex-col items-center gap-10 ">
      <div className="flex flex-col lg:flex-row lg:justify-around  items-center gap-5 mt-14 lg:mt-0 ">
        {/* Left */}
        <motion.div
          variants={motionVarience}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: false }}
          className="flex flex-col items-start w-[90%] lg:w-1/2"
        >
          <h2 className="text-[50px] lg:text-[4rem] text-white font-bold break-words">
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#C0B7E8] to-[#8176AF] ">
              Dive
            </span>{" "}
            Into The Depths
          </h2>
          <h2 className="text-[50px] lg:text-[4rem] text-white font-bold break-words">
            Of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#C0B7E8] to-[#8176AF] ">
              Virtual Reality
            </span>
          </h2>

          <p className="text-white text-[16px] mt-4 text-xl text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae .
          </p>

          <div className="flex flex-row items-center gap-4  mt-8">
            <button className="cursor-pointer rounded-3xl px-4 py-4 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">
              BUILD YOUR WORLD
            </button>
            <svg
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
            >
              <path
                d="M70.8333 50L29.1667 50M70.8333 50L54.1667 66.6667M70.8333 50L54.1667 33.3333"
                stroke="#C0B7E8"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </motion.div>
        {/* Right */}
        <motion.div
              className="relative  hidden lg:flex "
        >
          <img
            className="object-cover w-[23rem] h-[26rem]  lg:rounded-bl-[55%] z-50 lg:rounded-[4rem]"
            src="./assets/hero-vr-img.jfif"
            alt=""
          />

          <img
            src="./assets/hydra-line-1.png"
            className="absolute z-10 rotate-[5deg] top-[-55%] left-[20%]"
            alt=""
          />
          <img
            src="./assets/hydra-line-2.png"
            className="absolute -top-[21%] right-0 z-10"
            alt=""
          />
          <img
            src="./assets/hydra-line-3.png"
            className="absolute w-full top-[30%] -right-7 z-10"
            alt=""
          />
            <img
            src="./assets/hydra-line-2.png"
            className="absolute top-[-20%] rotate-[60deg] left-[-20px] z-10"
            alt=""
          />
        </motion.div>
      </div>

      {/* Hero Info */}
      <div className="relative w-96 z-50 lg:w-[90%]">
        <HeroInfo className=" mt-10"/>
      </div>
    </div>
  );
};

export default Hero;
