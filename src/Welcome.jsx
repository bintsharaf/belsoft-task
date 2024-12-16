import React from "react";
import "./Welcome.css";




export default function(Welcome) {
    return (<div className="Welcome">
        <div className="body" >
        
       <div className="firstPage">
            <div className="row">
                <div className="col-md-6 mt-4">
                   <h5>Join our premier monthly meetup for startup founders and tech visionaries</h5>
                    <h2 className="position-absolute">Connect, Collaborate, Innovate!</h2>
                    <p className="mb-5">Every last Friday of the month, we bring together the brightest minds in our local tech ecosystem. Whether you're a seasoned entrepreneur or just starting your journey, Founder's Friday is your launchpad for new ideas, valuable connections, and game-changing opportunities.</p>
                    <a href="/" className="btn btn-branding mb-3">Register For Our Next Event </a>
                    <h6 >Join Us for our next meetup on the 26th of July 2024</h6>

                </div>
                <div className="col-md-6">
                    
                    <img src= "/images/sectionOnePic.png" alt= "founderAlbum" className="img-fluid"/>
                </div>
                <div className="col-md-6">
                    <img src= "/" alt="groupPicture" />
                </div>
                <div className="col-md-6">
                    <h3>Who Are We?</h3>
                    <p>Born from the vibrant startup ecosystem of Abuja, we recognized the need for a consistent, high-quality networking platform where founders, innovators, and tech enthusiasts could connect, share ideas, and foster collaboration.</p>
                    <div>

                        <a href="/" className="btn">Register <img src="/" alt="oneArrow" /></a>
                        <a href="http://"  className="btn" target="_blank" rel="noopener noreferrer">Donate</a>
                    </div>
                    <p>Founder's Friday is more than just a meetup — it's a movement.</p>
                </div>
            </div>
       </div>
       <div className="row secondPage">
            <div className="col-md-6">
                <h4>Founders Friday</h4>
                <h1>What Happens At Founders Friday</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo suscipit id. Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
                <a href="http://"  className="btn" target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
            <div className="col-md-6">
                <img src="/" alt="oneArrow" />
            </div>
       </div>
       <div className="thirdPage">
           <h4>Sponsor The Next Friday</h4> 
           <h1>Why Sponsor Founders Friday?</h1>
            <div className="row">
                <div className="col-md-6">
                    <img src="/" alt="brandMission" />
                </div>
                <div className="col-md-6">
                    <div>How To Sponsor</div>
                    <p><i>Ready to Make an Impact?</i></p>
                    <h5>Fill out the form below or contact us at [contact email/phone number] to learn more about how you can sponsor the next Founders Friday</h5>
                    <form action="">
                        <div className="individualDetails d-flex">
                            <div className="nameInput">
                                <h5>Name</h5>
                                <input type="text" placeholder="Full name"/>
                                
                            </div>
                            <div className="nameInput">
                                <h5>Company (optional)</h5>
                                <input type="text" placeholder="Company name"/>
                                
                            </div>
                        </div>
                        <div className="contactDetails d-flex">
                            <div className="emailInput">
                                <h5>Email</h5>
                                <input type="email" name="/" id="/" placeholder="Email address" />
                                
                            </div>
                            <div className="numberInput">
                                <h5>Phone</h5>
                                <input type="text" placeholder="Phone number"/>
                               
                            </div>
                        </div>
                        <a href="http://" target="_blank" rel="noopener noreferrer" className="btn">Sponsor</a>
                    </form>
                </div>
            </div>
            
       </div>
       <div className="fourthPage row">
            <div className="col-md-6">
                <h2>Founders Friday is coming to</h2>
                <ul>
                    <li>Abuja</li>
                    <li>Kaduna</li>
                    <li>Kano</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo suscipit id. Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
                <a href="http://" target="_blank" rel="noopener noreferrer" className="btn">Register</a>
            </div>
            <div className="col-md-6">
                <img src="/" alt="logo" />
            </div>
            <div className="col-12 text-center">
                <h3>Register And Be Part of Our Community</h3>
                <p>Join our community of over 1000+ founders, developers, and tech junkies in general.Be inspired by people who live to inspire!</p>
                <img src="/" alt="founderFaces" />
                <a href="/" className="btn">Register Now</a>
            </div>
            <div className="col-md-6">
                <img src="/" alt="meetingPic" />
            </div>
            <div className="col-md-6">
                <p>At Founder’s Friday, Every Friday Is a Learning Experience!</p>
                <h5>Join us in our mission to transform ideas into impact and shape the future of Nigeria’s startup landscape.</h5>
                <a href="/" className="btn">Register </a>
            </div>
            <div className="col-12 text-center">
                <h3>What Do Our Attendees Have To Say?</h3>
                <p>Well See For Yourself</p>
                <img src="/" alt="testimonyPics" />
            </div>
            <h3>FAQs</h3>
            <div className="col-md-6">
                <a href="/">Lorem ipsum dolor sit amet, consectetur adi elit.</a> <br />
                <a href="/">Lorem ipsum dolor sit amet, consectetur adi elit.</a> <br />
                <a href="/">Lorem ipsum dolor sit amet, consectetur adi elit.</a>
            </div>
            <div className="col-md-6">
                <a href="/">Lorem ipsum dolor sit amet, consectetur adi elit.</a> <br />
                <a href="/">Lorem ipsum dolor sit amet, consectetur adi elit.</a> <br />
                <a href="/">Lorem ipsum dolor sit amet, consectetur adi elit.</a>
            </div>
       </div>
       <div className="footer">
           <img src="/" alt="founderlogo" />
            <h3>Want To Be A Part Of Abuja’s Biggest Tech Community?</h3>
            <a href="/" className="btn">Register For Our Next Event</a>
            <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>

       </div>
      
        
      </div> 
    </div>
    );
}