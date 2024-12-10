import React from "react";
import "./Welcome.css"
export default function(Welcome) {
    return (<div className="Welcome">
        <div>
            <nav>
            <   img src="/" alt="founderLogo" />
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Gallary</a></li>
                </ul>
                <a href="/" className="btn">Register </a>
            </nav>
       </div>
       <div className="firstPage">
            <div className="row">
                <div className="col-6">
                    <h5></h5>

                </div>
            </div>
       </div>
    </div>
    );
}