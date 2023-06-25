import React from 'react'
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import './Header2.css'
const Header2 = () => {
  return (
    <div className='header2'>
        <Link to="/news" className='text-white flex items-center py-10 px-10 gap-1'>
        <AiOutlineDoubleLeft className="text-xl text-center" />
              <h1 className="text-left text-xl font-bold ">
                GO TO ARTICLE LIST
              </h1>
 
        </Link>
    </div>
  )
}

export default Header2