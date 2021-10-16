import React from 'react'
import "./About.css"
import habeeb from "../../images/hab3.png"
import css from "../../images/css3.svg"
import html from "../../images/html5.svg"
import react from "../../images/react.svg"
import javascript from "../../images/javascript.svg"

function About() {

    return (
        <div className="about-main">
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
                    <img src={habeeb} alt="profile"/>
                </div>


            </div>

            <div className="my-stack">
                <p>My technology stack:</p>

                <div className="stack-icon">

                  <div className="icon-bar">
                    <img src={html} alt="html" />
                    <span>HTML</span>
                  </div>

                  <div className="icon-bar">
                    <img src={css} alt="CSS" />
                    <span>CSS</span>
                  </div>

                  <div className="icon-bar">
                    <img src={javascript} alt="javascript" />
                    <span>Javascript</span>
                  </div>
                  
                  <div className="icon-bar">
                    <img src={react} alt="react" />
                    <span>React</span>
                  </div>
                  
                </div>
            </div>
        </div>
    )
}

export default About