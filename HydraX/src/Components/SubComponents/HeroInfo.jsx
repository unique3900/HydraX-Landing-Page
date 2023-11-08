import React from "react";
import {MdOutlineChevronLeft,MdOutlineChevronRight } from 'react-icons/md';
const heroStyle = {
  " border-radius": "90px",
  "background": "radial-gradient(2900.76% 50.13% at 50% 53.89%, rgba(58, 52, 86, 0.95) 0%, #211E2E 100%)",
  color: "#FFFF",
  "box-shadow": " 0px 4px 4px 0px rgba(192, 183, 232, 0.01)",
};
const HeroInfo = () => {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 370;
  }
  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 370;
  }
  return (
    <div
      id="slider"
      className=" flex flex-row items-center justify-between overflow-x-auto whitespace-nowrap scrollbar-hide scroll-smooth  gap-28 lg:gap-2  px-3 py-10 rounded-xl"
      style={heroStyle}
    >
      <MdOutlineChevronLeft size={30} className="flex lg:hidden cursor-pointer absolute top-[40%] left-1 text-black bg-white p-2 rounded-full border-2 border-white" onClick={slideLeft}/>

      <div className="flex w-[100%] lg:w-80  lg:flex-row justify-center lg:justify-start items-center gap-5 place-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35 5.83334C46.2758 5.83334 55.4166 14.9742 55.4166 26.25C55.4166 29.6593 54.5834 32.8717 53.1039 35.6983L35 67.0833L17.3154 36.4595C15.575 33.4542 14.5833 29.9693 14.5833 26.25C14.5833 14.9742 23.7242 5.83334 35 5.83334ZM35 11.6667C26.9458 11.6667 20.4166 18.1959 20.4166 26.25C20.4166 28.566 20.9509 30.7882 21.962 32.7943L22.452 33.6893L35 55.4167L47.6366 33.5362C48.9071 31.3423 49.5833 28.8555 49.5833 26.25C49.5833 18.1959 43.0541 11.6667 35 11.6667ZM35 17.5C39.8325 17.5 43.75 21.4175 43.75 26.25C43.75 31.0825 39.8325 35 35 35C30.1675 35 26.25 31.0825 26.25 26.25C26.25 21.4175 30.1675 17.5 35 17.5ZM35 23.3333C33.3891 23.3333 32.0833 24.6392 32.0833 26.25C32.0833 27.8608 33.3891 29.1667 35 29.1667C36.6108 29.1667 37.9166 27.8608 37.9166 26.25C37.9166 24.6392 36.6108 23.3333 35 23.3333Z"
            fill="#C0B7E8"
          />
        </svg>
        <div className="flex flex-col">
          <h3 className="font-bold text-lg">Pay Us a Visit</h3>
          <p className="text-sm">Union St, Seattle, WA 98101, United States</p>
        </div>
      </div>

      <div className="flex w-[100%] lg:w-80  lg:flex-row justify-center lg:justify-start items-center gap-5 place-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="59"
          height="59"
          viewBox="0 0 59 59"
          fill="none"
        >
          <path
            d="M35.6458 15.9792C37.458 16.3327 39.2569 17.1319 40.5625 18.4375C41.8681 19.7431 42.6673 21.542 43.0208 23.3542M36.875 7.375C40.64 7.79326 44.028 9.61471 46.7083 12.2917C49.3887 14.9686 51.202 18.3605 51.625 22.125M51.6237 40.5051V47.1666C51.634 49.7131 49.3443 51.8395 46.7734 51.6077C24.5835 51.625 7.37515 34.2568 7.39252 12.2159C7.16097 9.65866 9.27686 7.37761 11.8201 7.37522H18.4948C19.5746 7.36461 20.6214 7.74621 21.4401 8.4489C23.7676 10.4467 25.2648 17.2274 24.6887 19.923C24.239 22.0276 22.1175 23.4999 20.6752 24.9394C23.8425 30.4985 28.4545 35.1014 34.0247 38.2624C35.467 36.823 36.9423 34.7057 39.051 34.2568C41.7561 33.6811 48.5805 35.1803 50.5702 37.5241C51.2758 38.3552 51.6507 39.4161 51.6237 40.5051Z"
            stroke="#C0B7E8"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div className="flex flex-col">
          <h3 className="font-bold text-lg">Give Us a Call</h3>
          <p className="text-sm">(110) 1111-1010</p>
        </div>
      </div>

      <div className="flex w-[100%] lg:w-80  lg:flex-row justify-center lg:justify-start items-center gap-5 place-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="65"
          height="65"
          viewBox="0 0 65 65"
          fill="none"
        >
          <path
            d="M8.91825 14.3349C9.40836 13.8448 10.0854 13.5417 10.8333 13.5417H54.1667C54.9146 13.5417 55.5916 13.8448 56.0817 14.3349M8.91825 14.3349C8.42814 14.825 8.125 15.5021 8.125 16.25V48.75C8.125 50.2458 9.33756 51.4583 10.8333 51.4583H54.1667C55.6624 51.4583 56.875 50.2458 56.875 48.75V16.25C56.875 15.5021 56.5719 14.825 56.0817 14.3349M8.91825 14.3349L28.6698 34.0864C30.7852 36.2017 34.2148 36.2017 36.3302 34.0864L56.0817 14.3349"
            stroke="#C0B7E8"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <div className="flex flex-col">
          <h3 className="font-bold text-lg">Send Us a Message</h3>
          <p className="text-sm">Contact@HydraVTech.com</p>
        </div>
      </div>


      <MdOutlineChevronRight size={30} className="flex lg:hidden cursor-pointer absolute top-[40%] right-1 text-black bg-white p-2 rounded-full border-2 border-white" onClick={slideRight}/>
    </div>
  );
};

export default HeroInfo;
