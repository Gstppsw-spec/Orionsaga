import React from "react";
import { Link } from "react-router-dom";
import bg2 from "../../src/assets/bg_backup.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="text-white font-bold text-8xl">ORION SAGA</h1>
      <Link to="/download">
        <button className="border-2 border-white text-2xl text-white rounded font-bold py-2 px-5 my-10">
          PLAY NOW
        </button>
      </Link>
    </div>
  );
};

export default Header;
