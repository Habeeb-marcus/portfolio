import React from 'react'
import "./Landing.css"

function Landing() {
    return (
        <div className="landing-cont">
            
            <div className="landing-text">
                <h2>Hello,I am</h2>
                <h1>Habeeb Makusota</h1>
                <p>A software engineer based in Lagos, Nigeria who is focused in building awesome website</p>
                <a href="/" className="button"> Say Hello <i className="fas fa-arrow-right"></i></a>
            </div>
           
        </div>
    )
}

export default Landing