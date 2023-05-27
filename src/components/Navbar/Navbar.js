import React, { useEffect, useState} from 'react'
import "./Navbar.css"
import AOS from 'aos'
import 'aos/dist/aos.css';



const Navbar = () =>  {
    
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

    const showMenu = () => {
        console.log('hamburger clicked');
        // const navig = document.querySelector('.navigation')
        // const mobMenu = document.querySelector('.menu-ul');
        // const menu = document.querySelector('.menu');
        // menu.classList.add('showMob')
        // mobMenu.classList.add('show-ul')
        // navig.classList.add('mob')
    }



    window.addEventListener("scroll", showNav)

    return (
      <nav
        className={
          Nav ? "navbar-cont show flex-center" : "navbar-cont flex-center"
        }>
        {/* // <nav className= "navbar-cont flex-center" > */}
        <div className="navbar-main d-flex">
          <h2 className="name">
            <a href="#app">Habeeb Makusota</a>
          </h2>

          <div className="navigation">
            <div className="menu">
              <ul className=" menu-ul d-flex">
                <li
                  data-aos="fade down"
                  data-aos-delay="100"
                  data-aos-easing="ease-in-out">
                  <a href="#about-me">About Me</a>
                </li>
                <li
                  data-aos="fade down"
                  data-aos-delay="200"
                  data-aos-easing="ease-in-out">
                  <a href="#projects">Projects</a>
                </li>
                <li
                  data-aos="fade down"
                  data-aos-delay="300"
                  data-aos-easing="ease-in-out">
                  <a href="#contact-main">Contact Me</a>
                </li>
                <div
                  className="resume"
                  data-aos="fade down"
                  data-aos-delay="400"
                  data-aos-easing="ease-in-out">
                  <a href="https://doc-00-2c-apps-viewer.googleusercontent.com/viewer/secure/pdf/3ej21bh9rel0e0t05n5vmoqe67n45kad/ofo4e8u5ecun4ug67osrtrc337nrvfd5/1651685925000/drive/15661951218639527491/ACFrOgBqPU5GhcLJ6fIpkPwtC3Axv0sHLw8RoOnNs2umXE9GD-T_8ySql8U77tigLEwgXDy6-l9lgW6gJxjcoaQKcfbIZ5ZSDa_lkjGThUzBC3hEK42omItFZyr8SPQByzmOc1jYqahzJbWOobO2?print=true&nonce=0cjiemplhe1o6&user=15661951218639527491&hash=r8e3ic6546pl47rmkmcad40ga9cqdj9a" target="_blank" rel='noreferrer'>
                    Download Resume
                  </a>
                </div>
              </ul>
            </div>

            <div className="bars" onClick={showMenu}>
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>
      </nav>
    );
}


export default Navbar