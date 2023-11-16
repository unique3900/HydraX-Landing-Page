import { motion } from "framer-motion";
import React from "react";

const paragraph1Varience = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.2 },
  },
};
const paragraph1Varience1 = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.4 },
  },
};
const Introduction = () => {
  return (
    <div className="w-[100%] flex gap-2 flex-col px-5 mt-10  lg:gap-16 lg:mt-10 lg:px-20">
      <div className=" flex flex-col gap-5 lg:flex-row justify-between lg:gap-10 items-center">
       
        <div className="flex flex-col ">
          <h2 className="text-white  font-bold text-[40px]">INTRODUCTION</h2>
          <h3 className="text-white text-center lg:text-start   text-[30px]">
            TO HYDRA VR
          </h3>
        </div>

        <div className="hidden lg:flex flex-row items-center gap-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="158"
            height="4"
            viewBox="0 0 158 4"
            fill="none"
          >
            <path d="M157.5 2H0" stroke="#C0B7E8" stroke-width="3" />
          </svg>
          <svg
            className="-ml-10"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              d="M70.8333 50L29.1667 50M70.8333 50L54.1667 66.6666M70.8333 50L54.1667 33.3333"
              stroke="#C0B7E8"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <motion.div
          variants={paragraph1Varience}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
          className=" lg:w-1/2"
        >
          <p className="text-white text-justify text-[20px]">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </motion.div>
      </div>

      <div className="relative flex flex-col overflow-hidden gap-5 lg:flex-row justify-between lg:gap-48 items-center">
                   {/* Background Line */}
                   <svg
          className="absolute hidden lg:flex left-0 top-[50%] z-[-100]"
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="219"
          viewBox="0 0 1440 219"
          fill="none"
        >
          <path
            d="M-4.5 74.5C153.667 21.1667 504.6 -53.5 643 74.5C816 234.5 1071.5 258.5 1186.5 146C1278.5 56 1394.17 70.8333 1440.5 89.5"
            stroke="url(#paint0_linear_3_54)"
            stroke-opacity="0.13"
            stroke-width="6"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3_54"
              x1="-5"
              y1="63"
              x2="1462"
              y2="62.9999"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#343045" />
              <stop offset="0.224242" stop-color="#C0B7E8" />
              <stop offset="0.786458" stop-color="#8176AF" />
              <stop offset="0.96875" stop-color="#343045" />
            </linearGradient>
          </defs>
        </svg>
        <img
          src="./assets/Introduction.png"
          className="w-[420px] rounded-br-[40%] rounded-tl-[40%]"
          alt="Introduction"
        />

        <div className=" flex flex-col gap-5 items-center lg:items-start justify-center lg:w-1/2 ">

          <div className="flex flex-col items-center ">
            <h2 className="text-white   font-bold text-[40px]">ABOUT</h2>
            <h3 className="text-white  text-[30px]">HYDRA VR</h3>
          </div>
          <motion.p
            variants={paragraph1Varience1}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ once: true }}
            className="text-white text-justify text-[20px]"
          >
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </motion.p>
          <button className="cursor-pointer w-1/2 rounded-3xl px-4 py-4 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">
            Let's Get In Touch
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-10 lg:flex-row justify-between lg:gap-10 items-center">
        <div className="flex flex-col ">
          <h2 className="text-white  font-bold text-[40px]">WHY BUILD</h2>

          <h3 className="text-white text-center lg:text-start   text-[30px]">
            WITH HYDRA?
          </h3>
        </div>

        <div className="hidden lg:flex flex-row items-center gap-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="158"
            height="4"
            viewBox="0 0 158 4"
            fill="none"
          >
            <path d="M157.5 2H0" stroke="#C0B7E8" stroke-width="3" />
          </svg>
          <svg
            className="-ml-10"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              d="M70.8333 50L29.1667 50M70.8333 50L54.1667 66.6666M70.8333 50L54.1667 33.3333"
              stroke="#C0B7E8"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <motion.div
          variants={paragraph1Varience}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
          className=" lg:w-1/2"
        >
          <p className="text-white text-justify text-[20px]">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;
