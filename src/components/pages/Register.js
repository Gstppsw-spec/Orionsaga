import React, { useState } from "react";
import login from "../../assets/1.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { BsFacebook, BsDiscord, BsYoutube } from "react-icons/bs";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState({});
  const navigate = useNavigate();

  const regisHandler = async (e) => {
    e.preventDefault();

    // const isConfirm = await Swal.fire({
    //   title: "Yakin data sudah benar?",
    //   text: "Data pengajuan akan dikirimkan!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Ya, yakin!",
    // }).then((result) => {
    //   return result.isConfirmed;
    // });
    // if(!isConfirm){
    //   return;
    // }

    // setLoading(true);

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    // console.log("sampe sini");

    await axios
      .post(`http://localhost:8000/api/register`, formData)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: "silahkan cek email anda untuk melakukan verifikasi akun anda",
        });
        navigate("/");
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          setValidationError(response.data.errors);
          // setLoading(true);
          console.log("error");
        } else {
          // setLoading(true);
          Swal.fire({
            text: response.data.message,
            icon: "error",
          });
        }
      });
  };

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-cyan-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center ">
        <div className="w-1/2 sm:block hidden">
          <img
            src={login}
            alt=""
            className=" rounded-2xl object-cover h-[500px]"
          />
        </div>
        <div className="sm:w-1/2 px-8 ">
          <h2 className="font-bold text-2xl">Register</h2>
          <p className="text-sm mt-4">
            if you already a member, easily log in{" "}
          </p>

          <form
            action=""
            className="flex flex-col gap-4 "
            onSubmit={regisHandler}
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-2 mt-8 rounded-xl  border"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              required
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="p-2 rounded-xl  border"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="p-2 rounded-xl border"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <div className="flex justify-between ">
              {/* <p className="text-sm">
                <input type="checkbox" className="mr-2 " />
                Remember Me
              </p> */}
              <Link to="/login">
                <p className="text-sm text-center">Already have an account?</p>
              </Link>
            </div>
            <button
              className="bg-slate-500 rounded-xl text-xl text-white"
              type="submit"
            >
              Register
            </button>
          </form>
          <div className="flex flex-row justify-center text-2xl mt-10 gap-5 text-gray-200">
            <BsFacebook />
            <BsDiscord />
            <BsYoutube />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
