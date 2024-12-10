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
                <div className="col-md-6">
                    <img src="/" alt="founderAlbum" />
                </div>
                <div className="col-md-6">
                    <img src="/" alt="groupPicture" />
                </div>
                <div className="col-md-6">
                    <h3>Who Are We?</h3>
                    <p>Born from the vibrant startup ecosystem of Abuja, we recognized the need for a consistent, high-quality networking platform where founders, innovators, and tech enthusiasts could connect, share ideas, and foster collaboration.</p>
                    <div>

                        <a href="/" className="btn">Register <img src="/" alt="oneArrow" /></a>
                        <a href="http://"  className="btn" target="_blank" rel="noopener noreferrer">Donate</a>
                    </div>
                    <h4>Founder's Friday is more than just a meetup — it's a movement.</h4>
                </div>
            </div>
       </div>
       <div className="row secondPage">
            <div className="col-md-6">
                <p>Founders Friday</p>
                <h1>What Happens At Founders Friday</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo suscipit id. Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
                <a href="http://"  className="btn" target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
            <div className="col-md-6">
                <img src="/" alt="oneArrow" />
            </div>
       </div>
    </div>
    );
}