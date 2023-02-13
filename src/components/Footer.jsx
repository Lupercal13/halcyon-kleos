import React from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import {
  FaSoundcloud,
  FaTwitterSquare,
  FaMixcloud,
  FaMix,
} from "react-icons/fa";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="text-gray-400 w-full h-auto px-4 py-10">
      <div className="border-t border-gray-500 pt-2">
        <div className="flex justify-between px-28">
          <a href="/">
            <BsFacebook size={20} className='hover:scale-105 hover:text-gray-100' />
          </a>
          <a href="/">
            <BsInstagram size={20} className='hover:scale-105 hover:text-gray-100' />
          </a>
          <a href="/">
            <BsYoutube size={20} className='hover:scale-105 hover:text-gray-100' />
          </a>
          <a href="/">
            <FaSoundcloud size={20} className='hover:scale-105 hover:text-gray-100' />
          </a>
          <a href="/">
            <FaTwitterSquare size={20} className='hover:scale-105 hover:text-gray-100' />
          </a>
          <a href="/">
            <FaMixcloud size={20} className='hover:scale-105 hover:text-gray-100' />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-4">
        <p className="text-lg">Halcyon Kleos</p>
        <p className="text-xs">&#169; {date} || all rights reserved</p>
        <p className="text-xs">Website by: <span className="text-gray-300">PayneDesignHaus</span></p>
      </div>
    </div>
  );
};

export default Footer;
