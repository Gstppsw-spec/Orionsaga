import React, { useState } from "react";
import { data } from "../pages/data";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect } from "react";
// import { Link } from "react-router-dom";

const News2 = () => {
  //   console.log(data);
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/news3")
    .then((res) => res.json())
    .then(
      (result) =>{
        setNews(result)
        // console.log(result)
      }
    )
  }, [])

  return (
  
   
    <div className="max-w-[1150px] m-auto my-2">
      <div className="  ">
        <div className="flex justify-between items-center">
          <h1 className="text-black font-bold text-6xl text-left ">
            THE LATEST
          </h1>

          <Link to="/news">
            <div className="flex justify-between items-center gap-1 my-2">
              <p className="font-semibold text-center ">GO TO NEWS PAGE</p>
              <AiOutlineDoubleRight className="font-semibold text-center " />
            </div>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 ">
        {news.map((item, index) => (
          <Link to={`/news/news/${item.code}`} className="">
            <div key={index} className="">
              <div className="">
                <img
                  src={`http://localhost:8000/newss/${item.gambar}`}
                  alt={item.judul}
                  className="w-full h-[200px]  object-cover "
                />
              </div>

              <div className=" flex justify-between px-2 py-2 ">
                <p className="text-sm ">{item.tanggal}</p>
                {/* <p className="text-sm font-bold text-red-500">
                  {item.judul}
                </p> */}
              </div>
              <div className="justify-center px-2 pb-2">
                <p className="font-bold text-2xl">{item.judul}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
   
  );
};

export default News2;
