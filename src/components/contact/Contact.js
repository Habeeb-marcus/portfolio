import React from "react";
import './Contact.css'

const Contact = () => {

    return (
    <div className="contact-main" id="contact-main">
         <div className="top-icons">
                <span className="small-line"></span>
                <h3>Let us talk</h3>
                <span className="long-line contact"></span>
        </div>
        <div className="contact-body">
            <p>Feel free to reach out to me if you have any question or if you'll like to create magic with me.</p>

                <form action="">
                    <div className="field">
                        <label for="name" > Name</label>
                        <input type="text" placeholder="Enter your name" id="name" name="name" />
                    </div>

                    <div className="field">
                        <label for="email" > Email</label>
                        <input type="email" placeholder="Enter your email address" id="email" name="email" required />
                    </div>

                    <div className="field">
                        <label htmlFor="message">Message</label>
                       <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    </div>

                    <div className="btn-cont">
                        <button type="submit">Talk to me</button>
                    </div>

                </form>

                {/* <div className="call-cont">
                    
                </div> */}
        </div>
    </div>
    )
}


export default Contact;