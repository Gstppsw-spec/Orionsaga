import React from "react";
import { BsFacebook, BsDiscord, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div>
      <div className="absolute w-full h-full m-auto flex flex-col justify-center bg-black max-h-[150px] items-center py-2 ">
        <div className="flex flex-row justify-center items-center text-white pt-6 gap-5 text-xl">
          <Link to="https://www.facebook.com">
            <BsFacebook />
          </Link>
          <Link to="https://discord.com/">
            <BsDiscord />
          </Link>
          <Link to="https://www.youtube.com/">
            <BsYoutube />
          </Link>
        </div>
        <div className="w-full h-full text-white flex flex-col justify-center py-2 ">
          <Link to="/">
            <h1 className="text-white justify-center text-center text-2xl font-bold">
              Origin Saga
            </h1>
          </Link>
          <h1 className="text-white text-center mb-2 ">
            Copyright ©2023 Origin Saga - Powered by LOSTSAGA
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
