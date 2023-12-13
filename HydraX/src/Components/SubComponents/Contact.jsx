import React from "react";

const Contact = () => {
  return (
    <div className="w-[100%] flex flex-col justify-center items-center gap-4  px-5 mt-10  lg:gap-5 lg:mt-10 lg:px-20">
      {/* Title and Description */}
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-white text-4xl font-bold">Join Hydra</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="414"
          height="2"
          viewBox="0 0 414 2"
          fill="none"
        >
          <path d="M0 1H414" stroke="url(#paint0_linear_13_46)" />
          <defs>
            <linearGradient
              id="paint0_linear_13_46"
              x1="414"
              y1="1.00238"
              x2="0"
              y2="1"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#343045" />
              <stop offset="0.348958" stop-color="#C0B7E8" />
              <stop offset="0.6875" stop-color="#8176AF" />
              <stop offset="1" stop-color="#343045" />
            </linearGradient>
          </defs>
        </svg>

        <p className="text-white font-bold text-xl">
          Let’s Build Your VR Experience
        </p>
      </div>

          {/* Form */}
          <form action="" className="grid grid-flow-row  gap-7 w-[80%]" method="post">
              <div className="flex w-full items-center gap-2">
              <input type="text" className="rounded-3xl px-4 py-3 text-white bg-transparent border-2 border-white w-1/2" placeholder="First Name" />
              <input type="text" className="rounded-3xl w-1/2 px-4 py-3 text-white bg-transparent border-2 border-white" placeholder="Last Name" />
              </div>


              <div className="flex w-full items-center gap-2">
                  <input type="email" className="rounded-3xl px-4 py-3 text-white bg-transparent border-2 border-white w-1/2" placeholder="Email" />
                  
              <input type="text" className="rounded-3xl w-1/2 px-4 py-3 text-white bg-transparent border-2 border-white" placeholder="Phone Number" />
              </div>


              <input type="text" className="rounded-3xl px-4 py-3 text-white bg-transparent border-2 border-white w-full" placeholder="Subject" />

              <textarea className="rounded-3xl px-4 py-3 text-white bg-transparent border-2 border-white " rows={5}  placeholder="Text us Something" />

              <button type="submit" className=" cursor-pointer text-center justify-center mx-auto w-1/2 rounded-3xl px-4 py-4 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">Send to Hydra</button>
          </form>
    </div>
  );
};

export default Contact;
