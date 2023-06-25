import React, { useState } from "react";
import login from "../../assets/1.png";
import { Link } from "react-router-dom";
import { BsFacebook, BsDiscord, BsYoutube } from "react-icons/bs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Masuk = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [validation, setValidation] = useState([]);

  const loginHandler = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    await axios
      .post("http://localhost:8000/api/login", formData)
      .then((response) => {
        console.log(response)
        navigate("/download");
      })
      .catch((error) => {
        setValidation(error.response.data);
      });
  };
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-cyan-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center ">
        <div className="sm:w-1/2 px-8 ">
          <h2 className="font-bold text-2xl">Login</h2>
          <p className="text-sm mt-4">
            if you already a member, easily log in{" "}
          </p>
          {validation.message && (
            <div className="alert alert-danger">{validation.message}</div>
          )}
          <form onSubmit={loginHandler} className="flex flex-col gap-4 ">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="p-2 mt-8 rounded-xl  border"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {validation.username && (
              <div className="alert alert-danger">{validation.username[0]}</div>
            )}
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="p-2 rounded-xl border"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {validation.password && (
              <div className="alert alert-danger">{validation.password[0]}</div>
            )}
            <div className="flex justify-between ">
              <p className="text-sm">
                <input type="checkbox" className="mr-2 " />
                Remember Me
              </p>
              <Link to="/register">
                <p className="text-sm text-center">Create Account?</p>
              </Link>
            </div>
            <button
              className="bg-slate-500 rounded-xl text-xl text-white"
              type="submit"
            >
              Login
            </button>
          </form>
          <div className="flex flex-row justify-center text-2xl mt-10 gap-5 text-gray-200">
            <BsFacebook />
            <BsDiscord />
            <BsYoutube />
          </div>
        </div>
        <div className="w-1/2 sm:block hidden  ">
          <img
            src={login}
            alt=""
            className=" rounded-2xl h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Masuk;
