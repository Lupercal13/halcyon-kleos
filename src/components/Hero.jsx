import React from "react";
import background from "../assets/bg-palm-sunset.jpg";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import {
  FaSoundcloud,
  FaTwitterSquare,
  FaMixcloud,
  FaMix,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div id="home" className="">
      <img
        src={background}
        alt="/"
        className="w-full  h-screen md:h-[550px] object-cover blur-[0.75px]"
      />
      <div className="w-full h-full md:h-[550px] absolute top-0 left-0 bg-black/30">
        <div className="m-auto h-full w-full flex flex-col justify-center items-center">
          <h1 className="font-shalimar text-[7rem] md:text-[10rem] font-bold text-gray-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
            Halcyon Kleos
          </h1>
          <div className="flex gap-8 flex-wrap text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
            <a href="https://www.facebook.com/halcyonkleos1/" target="_blank">
              <BsFacebook
                size={30}
                className="hover:text-pink-300 cursor-pointer hover:scale-105 "
              />
            </a>
            <a href="https://www.instagram.com/halcyon_kleos/" target="_blank">
              <BsInstagram
                size={30}
                className="hover:text-pink-300 cursor-pointer hover:scale-105"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UC1aC8N6gGrAtNrvrBE4dAsw?app=desktop"
              target="_blank"
            >
              <BsYoutube
                size={30}
                className="hover:text-pink-300 cursor-pointer hover:scale-105"
              />
            </a>
            <a href="https://soundcloud.com/halcyonkleos" target="_blank">
              <FaSoundcloud
                size={30}
                className="hover:text-pink-300 cursor-pointer hover:scale-105"
              />
            </a>
            <a href="https://twitter.com/HalcyonKleos" target="_blank">
              <FaTwitterSquare
                size={30}
                className="hover:text-pink-300 cursor-pointer hover:scale-105"
              />
            </a>
            <a href="https://www.mixcloud.com/halcyon_kleos/" target="_blank">
              <FaMixcloud
                size={30}
                className="hover:text-pink-300 cursor-pointer hover:scale-105"
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    // <div className="w-full h-[550px] text-white">
    //   <div className="w-full h-full">
    //     <img
    //       src={background}
    //       alt="/"
    //       className="w-full h-full object-cover blur-[0.75px]"
    //     />
    //     <div className="bg-black/30 fixed top-0 left-0 w-full h-[550px]">
    //       <div className="absolute w-full top-[30%] text-center p-4 md:p-8">
    //         <h1 className="text-5xl drop-shadow-sm font-bold ">
    //           Halycon Kleos
    //         </h1>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Hero;
