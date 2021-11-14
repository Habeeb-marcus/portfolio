import React, { useEffect, useState} from 'react'
import "./Navbar.css"
import AOS from 'aos'
import 'aos/dist/aos.css';



function Navbar() {
       useEffect(() => {
        AOS.init({ duration: 3000});
        // 
    }, []);


     const [Nav, setNav] = useState(false);

     const showNav = () =>{
        if(window.scrollY >= 200) {
            setNav(true)
            console.log('it is scrolling');
        } else {
            setNav(false)
        }
    }



    window.addEventListener("scroll", showNav)

    return (
        <nav className={Nav ? "navbar-cont show flex-center" : "navbar-cont flex-center" }>
        {/* // <nav className= "navbar-cont flex-center" > */}
            <div className="navbar-main d-flex">
                <h2 className="name">
                   <a href="#app" >Habeeb Makusota</a> 
                </h2>

                <div className="menu">
                    <ul className=" menu-ul d-flex" >
                        <li data-aos="fade down" data-aos-delay="100"  data-aos-easing="ease-in-out"><a href="#about-me">About Me</a></li>
                        <li data-aos="fade down" data-aos-delay="200"  data-aos-easing="ease-in-out"><a href="#projects">Projects</a></li>
                        <li data-aos="fade down" data-aos-delay="300" data-aos-easing="ease-in-out"><a href="#contact-main">Contact Me</a></li>
                        <div className="resume" data-aos="fade down" data-aos-delay="400" data-aos-easing="ease-in-out"><a href="/">Download Resume</a></div>
                    </ul>
                </div>

                <div className="bars">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    )
}

export default Navbar