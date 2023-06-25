import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { data } from "../pages/data";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./News.css";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
import Swal from "sweetalert2";

const News = () => {
  const [newsl, setNewsl] = useState([]);
  const [news, setNews] = useState([]);
  const [filteredItem] = data.filter((item) => item.id === 1);
  const navigate = useNavigate();
  // console.log(filteredItem);
  // const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/news")
      .then((res) => res.json())
      .then((result) => {
        setNews(result);
        // console.log(result)
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/api/news1")
      .then((res) => res.json())
      .then((result) => {
        setNewsl(result);
        // console.log(result)
      });
  }, []);

  // const newsPage = async(tanggal) => {
  //   // navigate(`/news/news/update/${tanggal}`);
  //   const isConfirm = await Swal.fire({
  //     title: "Yakin untuk edit data?",
  //     text: "Data pengajuan akan diedit!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Ya, alihkan ke form edit!",
  //   }).then((result) => {
  //     return result.isConfirmed;
  //   });

  //   if (!isConfirm) {
  //     return;
  //   }
  //   navigate(`/download`);
  // }

  function newsPage(tanggal) {
    navigate("/download");
    console.log(tanggal);
  }

  return (
    <>
      <Navbar />
      <div className="max-w-full mx-auto news1">
        <div className="">
          <div className=" bg-slate-600 py-10">
            <h1 className="text-white text-6xl font-bold py-10 ml-12" >THE LATEST</h1>
            {newsl.map((item, index) => (
              <Link to={`/news/news/${item.code}`} className=" text-white">
                <div className=" max-w-[1150px] m-auto  items-center ">
                  <img
                    src={`http://localhost:8000/newss/${item.gambar}`}
                    alt={item.judul}
                    className="w-[1150px] mb-10"
                  />

                  <div className="px-5">
                    <p className="">{item.tanggal}</p>
                    <div className="flex ">
                      <div className="w-1/2">
                        <p className="text-white font-bold text-2xl">
                          {item.judul}
                        </p>
                      </div>
                      <div className="w-1/2">
                        <p className="text-xl text-justify truncate">
                          {item.keterangan}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="max-w-[1150px] mx-auto w-full">
            <h1 className="text-5xl font-bold my-8 mb-10">NEWS</h1>
            <div className="grid grid-cols-2 gap-8 justify-between w-full">
              {news.map((item, index) => (
                <>
                  <div className=" grid grid-rows-3 max-h-[250px] justify-center mb-10">
                    <img
                      src={`http://localhost:8000/newss/${item.gambar}`}
                      className="max-w-[90%] max-h-[300px] object-cover"
                    />
                  </div>
                  <div className="max-h[300px] justify-center">
                    <div className="">
                      <p className="">{item.tanggal}</p>
                      <p className="text-xl font-bold py-3">{item.judul}</p>
                      <p className="text-lg font-medium text-justify truncate">{item.keterangan}</p>
                      {/* onClick={() => newsPage(item.tanggal)} */}
                      <Link
                        to={`/news/news/${item.code}`}
                        className="items-center flex gap-5 pt-3"
                      >
                        <p>SEE ARTICLE</p>
                        <HiArrowNarrowRight />
                      </Link>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default News;
