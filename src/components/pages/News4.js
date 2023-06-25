import React, { useEffect, useState } from "react";
import { data } from "../pages/data";
import bg from "../../assets/bg_gumiho.jpg";
import Swal from "sweetalert2";

import Navbar from "../Navbar";
import Footer from "./Footer";
import Header2 from "../Header2";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { AiOutlineDoubleLeft } from "react-icons/ai";

const News4 = () => {
  const [news, setNews] = useState([]);
  const [filteredItem] = data.filter((item) => item.id === 1);
  // console.log(filteredItem);
  const [event, setEvent] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [shop, setShop] = useState([]);
  const [hero, setHero] = useState([]);
  const [gear, setGear] = useState([]);
  const [filteredShop, setFilteredShop] = useState([]);
  const [filteredHero, setFilteredHero] = useState([]);
  const [filteredGear, setFilteredGear] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);

  const navigate = useNavigate();

  const handleNews = async (code) => {
    const isConfirm = await Swal.fire({
      title: "Yakin untuk edit data?",
      text: "Data pengajuan akan diedit!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, alihkan ke form edit!",
    }).then((result) => {
      return result.isConfirmed;
    });

    if (!isConfirm) {
      return;
    }

    navigate(`/news/news/${code}`);
  };
  const { code } = useParams();
  // console.log(code)

  useEffect(() => {
    fetch("http://localhost:8000/api/news")
      .then((res) => res.json())
      .then((result) => {
        setNews(result);
        // console.log(result)
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/api/event")
      .then((res) => res.json())
      .then((result) => {
        setEvent(result);
        // console.log(result)
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/api/shop")
      .then((res) => res.json())
      .then((result) => {
        setShop(result);
        // console.log(result);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/api/hero")
      .then((res) => res.json())
      .then((result) => {
        setHero(result);
        console.log(result);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/api/gear")
      .then((res) => res.json())
      .then((result) => {
        setGear(result);
        console.log(result);
      });
  }, []);

  useEffect(() => {
    setFilteredData(event.filter((item) => item.code === `${code}`));
  }, [event]);

  useEffect(() => {
    setFilteredShop(shop.filter((item) => item.code === `${code}`));
  }, [shop]);

  useEffect(() => {
    setFilteredHero(hero.filter((item) => item.code === `${code}`));
  }, [hero]);

  useEffect(() => {
    setFilteredGear(gear.filter((item) => item.code === `${code}`));
  }, [gear]);

  useEffect(() => {
    setFilteredNews(news.filter((item) => item.code === `${code}`));
  }, [news]);

  return (
    <>
      <Navbar />
      <Header2 />
      <div className="max-w-full mx-auto bg-white">
        <div className=" max-w-[1150px]  m-auto px-8 my-5">
          {filteredNews.map((item, index) => (
            <div className="">
              <div className="flex justify-start py-4 text-xl">
                <p className="text-black p-0 mr-5">{item.tanggal}</p>
                <p className="text-red-500 font-bold">{item.judul}</p>
              </div>
              <h1 className="font-bold text-6xl text-left mb-8">
                {item.judul}
              </h1>
              <img
                className="w-full h-[500px] object-cover"
                src={`http://localhost:8000/newss/${item.gambar}`}
                alt={item.judul}
              ></img>

              <p className="font-bold text-3xl py-5">Halo Heroes!</p>
              <p className="text-xl text-justify">{item.keterangan}</p>
            </div>
          ))}

          <div className="">
            {filteredData.map((item, index) => (
              <div key={index} className=" items-center">
                <div className=" flex justify-between px-2 py-4">
                  <h1 className="font-bold text-3xl py-5">{item.nama}</h1>
                </div>
                <div className=" flex justify-center items-center px-2 py-4">
                  <img
                    src={`http://localhost:8000/events/${item.gambar}`}
                    alt={item.nama}
                    className="max-w-[800px] max-h[600px]  object-cover justify-center"
                  />
                </div>

                <div className=" flex justify-between px-2 py-4">
                  <p className="text-sm text-justify">{item.keterangan}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="">
            {filteredShop.map((item, index) => (
              <div key={index} className=" items-center">
                <div className=" flex justify-between px-2 py-4">
                  <h1 className="font-bold text-3xl py-5">{item.nama}</h1>
                </div>
                <div className=" flex justify-center items-center px-2 py-4">
                  <img
                    src={`http://localhost:8000/shops/${item.gambar}`}
                    alt={item.nama}
                    className="max-w-[600px] max-h[600px]  object-cover justify-center"
                  />
                </div>

                <div className=" flex justify-between px-2 py-4">
                  <p className="text-sm text-justify">{item.keterangan}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="">
            {filteredHero.map((item, index) => (
              <div key={index} className=" items-center">
                <div className=" flex justify-between px-2 py-4">
                  <h1 className="font-bold text-3xl py-5">{item.nama}</h1>
                </div>
                <div className=" flex justify-center items-center px-2 py-4">
                  <img
                    src={`http://localhost:8000/heros/${item.gambar}`}
                    alt={item.nama}
                    className="max-w-[600px] max-h[600px]  object-cover justify-center"
                  />
                </div>
                {/* <div className=" flex justify-center items-center px-2 py-4">
                  <img
                    src={`http://localhost:8000/heros/${item.gambarskill}`}
                    alt={item.nama}
                    className="max-w-[600px] max-h[600px]  object-cover justify-center"
                  />
                </div> */}

                <div className=" flex justify-between px-2 py-4">
                  <p className="text-sm text-justify">{item.keterangan}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="">
            {filteredGear.map((item, index) => (
              <div key={index} className=" items-center">
                <div className=" flex justify-between px-2 py-4">
                  <h1 className="font-bold text-3xl py-5">{item.nama}</h1>
                </div>
                <div className=" flex justify-center items-center px-2 py-4">
                  <img
                    src={`http://localhost:8000/gears/${item.gambar}`}
                    alt={item.gambar}
                    className="max-w-[600px] max-h[600px]  object-cover justify-center"
                  />
                </div>

                <div className=" flex justify-between px-2 py-4">
                  <p className="text-sm  text-justify">{item.keterangan}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            {filteredNews.map((item, index) => (
              <div key={index} className="bg-black m-auto mb-10 ">
                <div className="flex justify-center ">
                  <h1 className="text-white font-bold text-3xl text-center px-2 py-2">
                    ORION SAGA
                  </h1>
                  <h1 className="text-white font-bold text-3xl text-center px-2 py-2">
                    |
                  </h1>
                  <h1 className="text-white font-bold text-3xl text-center px-2 py-2">
                    {item.judul}
                  </h1>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-white text-center px-2 py-2">
                    {item.tanggal}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className=" max-w-[1150px] m-auto ">
            <h1 className="text-white font-bold text-4xl text-center my-5">
              Konten Terkait
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
              {news.map((item, index) => (
                <Link to={`/news/news/${item.code}`}>
                  <div
                    key={index}
                    className="border shadow-lg bg-white hover:scale-105 duration-300"
                  >
                    <img
                      src={`http://localhost:8000/newss/${item.gambar}`}
                      alt={item.judul}
                      className="w-full h-[250px]  object-cover "
                    />
                    <div className=" flex justify-between px-2 py-4">
                      <p className="text-sm">{item.tanggal}</p>
                      <p className="text-sm font-bold text-red-500">
                        {item.judul}
                      </p>
                    </div>
                    <div className="justify-center px-2 py-2">
                      <p className="font-bold text-2xl">{item.judul}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default News4;
