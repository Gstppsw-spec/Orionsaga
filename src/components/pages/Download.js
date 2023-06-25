import React from "react";
import bg from "../../assets/header.jpg";
import hero from "../../assets/gusion.png";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "./Footer";

const Download = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-full mx-auto bg-white">
      <img className="w-full max-h-[400px] object-cover" src={bg} alt="" />
      <div className="max-w-[1150px]  m-auto my-auto">
        <h1 className="text-black font-bold text-4xl text-center py-5">
          Download
        </h1>

        <div className="bg-black m-auto">
          <div className="flex justify-center items-center">
            <div className="flex-none">
              <img src={hero} className="items-start h-[200px] ml-19"></img>
            </div>
            <div className="flex-auto w-64">
              <div className="grid text-white justify-center place-content-center">
                <h1 className="ml-[-250px] text-2xl font-bold italic py-2">
                  Full Client Installer
                </h1>
                <p className="ml-[-250px] py-1">Ukuran File : 1.6GB</p>
                <p className="ml-[-250px] py-1">
                  Update Version : 21 Februari 2023
                </p>
                <Link to="">
                  <button className="py-2 border rounded border-white px-4 hover:bg-slate-400">
                    DOWNLOAD
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex-auto w-32">
              <img src={bg}></img>
            </div>
          </div>
        </div>
        <h1 className="text-black font-bold text-4xl text-left py-5 italic">
          System Requirement
        </h1>
        <div className="flex bg-black m-auto px-5 mb-5 items-center justify-center">
          <div className="flex flex-row">
            <div className="basis-1/2 ">
              <div className="flex-col text-white  place-content-center py-5 px-5 justify-start">
                <h1 className="text-2xl font-bold italic py-2 ml-[-350px]">
                  Spek Minimum
                </h1>
                <p className=" py-1 ml-[-350px]">OS : Windows Xp/2000/Vista</p>
                <p className=" py-1 ml-[-350px]">Memory : 2GB RAM</p>
                <p className=" py-1 ml-[-350px]">Hard Disk : 10 GB</p>
                <p className=" py-1 ml-[-350px]">
                  Processor : Intel Pentium 4 1.2GHz atau AMD 1600+
                </p>
                <p className=" py-1 ml-[-350px]">
                  Graphics Card : Geforce 4Ti atau ATI Radeon 9000
                </p>
                <p className=" py-1 ml-[-350px]">Direct X : 9.0</p>
              </div>
            </div>
            <div className="basis-1/2">
              <div className="flex-col text-white  place-content-center py-5 px-5 m-auto">
                <h1 className=" text-2xl font-bold italic py-2  mr-[-350px]">
                  Spek Maksimum
                </h1>
                <p className=" py-1 mr-[-350px]">OS : Windows Xp/2000/Vista</p>
                <p className=" py-1 mr-[-350px]">Memory : 2GB RAM</p>
                <p className=" py-1 mr-[-350px]">Hard Disk : 10 GB</p>
                <p className=" py-1 mr-[-350px]">
                  Processor : Intel Pentium 4 1.2GHz atau AMD 1600+
                </p>
                <p className=" py-1 mr-[-350px]">
                  Graphics Card : Geforce 4Ti atau ATI Radeon 9000
                </p>
                <p className="m py-1 mr-[-350px]">Direct X : 9.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Download;
