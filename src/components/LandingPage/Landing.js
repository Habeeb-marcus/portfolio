import React from 'react'
import "./Landing.css"
import Navbar from '../Navbar/Navbar'

function Landing() {
    return (
        <div className="landing-cont">
            <Navbar/>
            <main>

            </main>
            <aside>
                <ul>
                    <a href="/"><i className="fab fa-github"></i></a>
                    <a href="/"><i className="fab fa-linkedin"></i></a>
                    <a href="/"><i className="fab fa-instagram"></i></a>
                    <a href="/"><i className="fab fa-twitter"></i></a>
                </ul>
            </aside>
        </div>
    )
}

export default Landing