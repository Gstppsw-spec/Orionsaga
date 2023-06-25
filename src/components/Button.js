import React from "react";
import {Link} from "react-router-dom";
import "./Button.css";

function Button (){
    return(
        <>
        <Link to="/register">
            <button className="btn_reg font-semibold">REGISTER</button>

        </Link>
        <Link to="/login">
        
            <button className="btn-log font-semibold">LOGIN</button>
        </Link>
        </>
    );
}

export default Button;