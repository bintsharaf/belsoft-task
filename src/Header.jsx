import React from "react";
import './index.css'

export default function(Header) {
    return (
        <div className="Header">
             <nav className="d-flex justify-content-between fixed-top mt-3 ">
            <   img src = "/images/founderLogo.png " className= "logo d-none d-md-block" alt="founderLogo" />
                <img src = "/images/small-logo.png " className= "logo d-block d-md-none" alt="founderLogo" />
                <ul>
                    <li className="active"><a href="/">Home</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Gallary</a></li>
                    <li><a href="/">Contact Us</a></li>
                    <li><a href="/" className="btn nav-btn">Register <i class="fa-solid fa-arrow-right"></i></a></li>
                </ul>
                
            </nav>
         
       </div>
    );
} 