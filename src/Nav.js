import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import "./Nav.css"
import logo from "./assets/logo.png";




function Nav(){
    const [show,handleShow] = useState(false);
    const history = useHistory();   


    const trasitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",trasitionNavBar);
        return () =>  window.removeEventListener("scroll",trasitionNavBar);
    }, []);


    return(
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
                <img className="nav_logo" 
                onClick={() => history.push("/")}
                src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light._SY32_FMpng_.png"
                alt="amazon Prime logo"
                />
                <img
                onClick={() => history.push("/profile")} 
                className="nav_avatar"
                src={logo} 
                />
            </div>
        </div>
    )

}

export default Nav;