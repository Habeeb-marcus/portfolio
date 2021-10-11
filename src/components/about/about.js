import React from 'react'
import "./About.css"
import habeeb from "../../images/hab3.png"

function About() {

    return (
        <div>
            <div className="top-icons">
                <span className="small-line"></span>
                <h3>About Me</h3>
                <span className="long-line"></span>
            </div>

            <div className="about-cnt">
                <p>
                    Hello, I am Habeeb Makusota, a software engineer based in Lagos, Nigeria. I am passionate about writing elegant code to enable easy extendabilty and maintenance. I’m highly skilled in building functional applications and can comfortably translate design mockups into responsive pixel-perfect web and/or mobile screens to bring designs to life. In my spare time I read articles to help my growth, watch movies, hang out with friends.
                </p>

                <div className="img-me">
                    <img src={habeeb} alt="profile image"/>
                </div>


            </div>

            <div className="my-stack">
                <p>My technology stack:</p>
            </div>
        </div>
    )
}

export default About