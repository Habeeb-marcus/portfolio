import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <nav className="navbar-cont flex-center">
            <div className="navbar-main d-flex">
                <h2 className="name">
                    Habeeb Makusota
                </h2>

                <div className="menu">
                    <ul className=" menu-ul d-flex">
                        <li><a href="/">About Me</a></li>
                        <li><a href="/">Projects</a></li>
                        <li><a href="/">Contact Me</a></li>
                        <div className="resume"><a href="/">Download Resume</a></div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar