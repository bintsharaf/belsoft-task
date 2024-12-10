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
                <a href="/" className="btn">Register <img src="/" alt="oneArrow" /></a>
            </nav>
       </div>
       <div className="firstPage">
            <div className="row">
                <div className="col-6">
                    <h5>Join our premier monthly meetup for startup founders and tech visionaries</h5>
                    <h2>Connect, Collaborate, Innovate!</h2>
                    <p>Every last Friday of the month, we bring together the brightest minds in our local tech ecosystem. Whether you're a seasoned entrepreneur or just starting your journey, Founder's Friday is your launchpad for new ideas, valuable connections, and game-changing opportunities.</p>
                    <a href="/" className="btn">Register For Our Next Event <img src="/" alt="doubleArrow" /></a>
                    <h6>Join Us for our next meetup on the 26th of July 2024</h6>

                </div>
                <div className="col-6">
                    <img src="/" alt="founderAlbum" />
                </div>
                <div className="">
                    
                </div>
            </div>
       </div>
    </div>
    );
}