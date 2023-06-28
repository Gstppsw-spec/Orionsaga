import React, { useState } from "react";
import login from "../../assets/1.png";
import { Link } from "react-router-dom";
import { BsFacebook, BsDiscord, BsYoutube } from "react-icons/bs";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const Verifikasi = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const verificationToken = searchParams.get("verification_token");
  const navigate = useNavigate();
  const { b } = useParams();
  console.log(verificationToken);
  const verifHandler = async (e) => {
    const formData = new FormData();
    formData.append("verification_token", `${verificationToken}`);
    console.log(verificationToken)
    await axios
      .post(`http://localhost:8000/api/verif`, formData)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: "account anda berhasil diverifikasi",
        });
        navigate('/')

      })
      .catch(({response}) => {
        console.log("error")
      })
  };
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-cyan-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center ">
        <div className="px-8 ">
          <h2 className="font-bold text-2xl text-center">Verifikasi Akun</h2>
          <span>
            Silahkan klik "verifikasi account" untuk memverifikasi akun anda
          </span>
          <Link onClick={verifHandler}>
            <p className=" text-center text-blue-700">verifikasi account</p>
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

export default Verifikasi;
