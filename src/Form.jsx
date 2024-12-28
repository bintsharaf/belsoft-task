import React from "react";
import "./Form.css";

export default function(Form) {
    return (
        <div className="Form">
            <form action="/">
                        <div className="individualDetails d-flex">
                            <div className="nameInput">
                                
                                <label htmlFor="fname" className="mb-1"><strong>Name</strong></label> <br />
                                <input type="text" placeholder="Full name"/>
                                
                            </div>
                            <div className="companyInput">

                                <label htmlFor="company" className="mb-1"><strong>Company</strong> (optional)</label> <br />
                                <input type="text" placeholder="Company name"/>
                                
                            </div>
                        </div>
                        <div className="contactDetails d-flex">
                            <div className="emailInput">
                                <label htmlFor="emails" className="mb-1"><strong>Email</strong></label> <br />
                                <input type="email" name="/" id="/" placeholder="Email address" />
                                
                            </div>
                            <div className="numberInput">
                                
                                <label htmlFor="phone" className="mb-1"><strong>Phone</strong></label> <br />
                                <input type="tel" id="phone" name="phone" placeholder="Phone number"/>
                               
                            </div>
                        </div>
                        <a href="http://" target="_blank" rel="noopener noreferrer" className="btn sponsor-btn">Sponsor <i class="fa-solid fa-arrow-right"></i></a>
                    </form>
        </div>
    );
}