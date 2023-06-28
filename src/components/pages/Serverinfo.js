import React from "react";
import Navbar from "../Navbar";
import bg from "../../assets/header.jpg";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { BsFacebook, BsDiscord, BsYoutube } from "react-icons/bs";
const Serverinfo = () => {
  const [pingTime, setPingTime] = useState(0);
  

  useEffect(() => {
    const fetchPing = async () => {
      const startTime = performance.now(); // Waktu mulai pengukuran

      try {
        const response = await fetch('http://localhost:8000/api/ping', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ server_address: 'www.facebook.com' }),
        });

        const endTime = performance.now(); // Waktu selesai pengukuran
        const pingDuration = endTime - startTime; // Durasi ping dalam milidetik (ms)
        setPingTime(pingDuration);

        const data = await response.json();
        console.log(data.message);
      } catch (error) {
        console.error(error);
      }
    };

    const interval = setInterval(fetchPing, 5000); // Interval pengukuran ping setiap 5 detik

    return () => clearInterval(interval); // Membersihkan interval saat komponen di-unmount
  }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-full mx-auto bg-white">
        <img className="w-full max-h-[400px] object-cover" src={bg} />
        <h1 className="text-black font-bold text-4xl text-center py-5">
          Server Info
        </h1>
        <div className="flex bg-black m-auto px-5 mb-5 items-center justify-center">
          <div className="flex flex-row justify-between">
            <div className="basis-1/2 ">
              <div className="flex-col text-white  place-content-center py-5 px-5 justify-start">
                <h1 className="text-2xl font-bold italic py-2 ml-[-350px]">
                Server
                </h1>
                <p className=" py-1 ml-[-350px]">Server 1</p>
              </div>
            </div>
            <div className="basis-1/2">
              <div className="flex-col text-white  place-content-center py-5 px-5 justify-end">
                <h1 className=" text-2xl font-bold italic py-2  mr-[-350px]">
                  Status
                </h1>
                <p className=" py-1 mr-[-350px]">ping {pingTime.toFixed(2)} ms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="absolute w-full h-full m-auto flex flex-col justify-center bg-black max-h-[150px] items-center py-2 bottom-0">
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
    </>
  );
};

export default Serverinfo;
