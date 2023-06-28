import React, { useState } from "react";
import login from "../../assets/1.png";
import { Link } from "react-router-dom";
import { BsFacebook, BsDiscord, BsYoutube } from "react-icons/bs";

const VerifRegister = () => {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-cyan-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center ">
        <div className="px-8 ">
          <h2 className="font-bold text-2xl text-center">Registrasi Akun Berhasil</h2>
          <span>
            Silahkan cek email anda untuk melakukan verifikasi akun anda
          </span>
          <Link to="/login">
            <p className=" text-center text-blue-700">ke halaman login</p>
          </Link>

          <div className="flex flex-row justify-center text-2xl mt-10 gap-5 text-gray-200">
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
        </div>
      </div>
    </section>
  );
};

export default VerifRegister;
