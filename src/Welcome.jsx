import React from "react";
import "./Welcome.css";
import Header from "./Header.jsx";
import Form from "./Form.jsx";
import Animated from "./Animated.jsx";




export default function(Welcome) {
    return (<div className="Welcome">
        
        <div className="body" >
        <Header />
       <div className="firstPage">
        
            <div className="row firstP-section">
                
                <div className="col mt-3 ">
                    
                    <div>
                   <h5>Join our premier monthly meetup for startup founders and tech visionaries</h5>
                    <h2 >Connect, Collaborate, Innovate!</h2>
                    <p className="mb-4">Every last Friday of the month, we bring together the brightest minds in our local tech ecosystem. Whether you're a seasoned entrepreneur or just starting your journey, Founder's Friday is your launchpad for new ideas, valuable connections, and game-changing opportunities.</p>
                    <a href="/" className="btn btn-branding mb-3">Register For Our Next Event <img src="/images/doubleArrow.svg" alt="double-Arrow" className="doubleArrow"/></a>
                    <h6 >Join Us for our next meetup on the 26th of July 2024</h6>
                    <img src="/images/icons.svg" alt="brand-visibility" className="icons" />
                    <div className="callToAction mt-4">Become a collaborator today <a href="/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a></div>
                </div>
                </div>
                <div className="col d-none d-lg-block firstP-section-pic">
                  <img src="images/sectionOnePic.png" alt="pics" className="img-fluid"/>
                </div>
                
                <div></div>
                <div className="row">
                <div className="col-md-6">
                    <div className="secondP-section">
                    <img src= "/images/sectionTwoPic.png" alt="groupPicture" className="img-fluid d-none d-md-block"/>
                    </div>
                </div>
                <div className="col-md-6 aboutFounder d-flex justify-content-between p-4">
                    <div ><img src= "/images/lineOne.png" alt="line" className="line d-none d-lg-block mt-2" />
                    </div>
                    <div>
                    <h3>Who Are We?</h3>
                    <p >Born from the vibrant startup ecosystem of Abuja, we recognized the need for a consistent, high-quality networking platform where founders, innovators, and tech enthusiasts could connect, share ideas, and foster collaboration.</p>
                    <div className="btns">
                        <a href="/" className="btn register-btn">Register <i class="fa-solid fa-arrow-right"></i></a>
                        <a href="http://"  className="btn donate-btn" target="_blank" rel="noopener noreferrer">Donate <i class="fa-solid fa-sack-dollar"></i></a>
                    </div>
                    <div className="firstLastPara d-none d-lg-block">Founder's Friday is more than just a meetup — it's a movement.</div>
                    </div>
                    </div>
                </div>
            </div>
       </div>
    <div className="secondPage">  
       <div className="row secondPageContent">
            <div className="col ">
                <h4>Founders Friday</h4>
                <h1>What Happens At Founders Friday</h1>
                <p className="mt-2 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo suscipit id. Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
                <a href="http://"  className="btn learn-btn mt-2" target="_blank" rel="noopener noreferrer">Learn More <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="col d-none d-lg-block"></div>
        </div>
    </div>    
       <div className="thirdPage d-none d-lg-block">
           <h4>Sponsor The Next Friday</h4> 
           <h1>Why Sponsor Founders Friday?</h1>
            <div className="row">
                <div className="col-md-6 d-none d-lg-block">
                    <img src="/images/sectionThreePics.png" alt="brandMission" className="img-fluid"/>
                </div>
                <div className="col-md-6 second-content">
                    <div className="second-content-details">
                    <div className="title">How To Sponsor</div>
                    <p><i>Ready to Make an Impact?</i></p>
                    <h5>Fill out the form below or contact us at [contact email/phone number] to learn more about how you can sponsor the next Founders Friday</h5>
                    <Form />
                    </div>
               </div>
            </div>
            
       </div>
       <div className="fourthPage row">
        
            <div className="col-md-6">
                <h2>Founders Friday is coming to</h2>
                <Animated />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo suscipit id. Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
                <a href="http://" target="_blank" rel="noopener noreferrer" className="btn reg-btn">Register <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="col-md-6">
                <img src="/images/small-logo.png" alt="logo" className="img-fluid d-none d-md-block " />
           
            </div>
            </div>
            <div className="fifthPage">
                <div className="row">
            <div className="col-12 text-center">
                <h3>Register And Be Part of Our Community</h3>
                <p>Join our community of over 1000+ founders, developers, and tech junkies in general. <br /> Be inspired by people who live to inspire!</p>
                <img src="/images/banner.png" alt="founderFaces" className="img-fluid"/>
                <a href="/" className="btn reg-btn-two">Register Now <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="sixthPage">
            <div className="row">
            <div className="col-md-6">
                <img src="/images/eventPics.png" alt="meetingPic" className="img-fluid"/>
            </div>
            <div className="col-md-6">
                <p>At Founder’s Friday, Every Friday Is a Learning Experience!</p>
                <h5>Join us in our mission to transform ideas into impact and shape the future of Nigeria’s startup landscape.</h5>
                <a href="/" className="btn register-btn">Register <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            </div>
            </div>
            <div className="seventhPage">
                <div className="row">
                     <div className="col-12 text-center">
                <h3>What Do Our Attendees Have To Say?</h3>
                <p>
                    Well See For Yourself
                </p>
                <div className="indication d-none d-lg-block">
                    <ul>
                        <li><a href="/"><i class="fa-solid fa-arrow-right"></i></a></li>
                        <li><a href="/"><i class="fa-solid fa-arrow-left"></i></a></li>
                    </ul>
                </div>
                <img src="/images/testimonyPics.png" alt="testimonyPics" className="img-fluid"/>
            </div>
            <h3>FAQs</h3>
            <div className="col-md-6">
                <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Lorem ipsum dolor sit amet, consectetur adi elit.
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Lorem ipsum dolor sit amet, consectetur adi elit.
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Lorem ipsum dolor sit amet, consectetur adi elit.
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
                
            </div>
            <div className="col-md-6 d-none d-md-block ">
                <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Lorem ipsum dolor sit amet, consectetur adi elit.
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Lorem ipsum dolor sit amet, consectetur adi elit.
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Lorem ipsum dolor sit amet, consectetur adi elit.
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
            </div>
            </div>
            </div>
            </div>
       </div>
       <div className="footer">
        <hr />
            <img src = "/images/founderLogo.png " className= "logo mt-0" alt="founderLogo" />
            <h3>Want To Be A Part Of Abuja’s Biggest Tech Community?</h3>
            <div className="center-button ">
                
            <a href="/" className="btn btn-branding mt-3  ">Register For Our Next Event <img src="/images/doubleArrow.svg" alt="double-Arrow" className="doubleArrow"/></a>
              </div>
              <hr />
              <div className="footer-links d-none d-md-flex">
                <ul className="social-links  ">
                    <li><a href="/"><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href="/"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="/"><i class="fa-brands fa-twitter"></i></a></li>
                </ul>
            <ul class="nav ">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Gallery</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact Us</a>
                </li>
            </ul>
            </div>
       </div>
      
        
      </div> 
    </div>
    );
}