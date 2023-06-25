import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { navItems } from "./NavItems";
import Button from "./Button";
import Dropdown from "./Dropdown";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    return () => {
      // Membersihkan timer saat komponen unmount
      clearTimeout(timer);
    };
  }, [timer]);

  const handleMouseEnter = () => {
    // Mengatur timer untuk menampilkan dropdown setelah 1 detik
    const enterTimer = setTimeout(() => {
      setDropdown(true);
    }, 10);

    setTimer(enterTimer);
  };

  const handleMouseLeave = () => {
    // Membersihkan timer saat mouse leave
    clearTimeout(timer);

    // Mengatur timer untuk menyembunyikan dropdown setelah 0.5 detik
    const leaveTimer = setTimeout(() => {
      setDropdown(false);
    }, 500);

    setTimer(leaveTimer);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={Logo} className="w-16" alt="" />
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "SOCIAL") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }

            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
