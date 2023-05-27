import React, {useEffect} from 'react';
import Project from '../Project';
import proj1 from '../../images/mapp.png'
import proj2 from "../../images/movieapp.png";
import proj3 from "../../images/project1.png";
import proj4 from "../../images/gymster.png";
import AOS from 'aos';
import 'aos/dist/aos.css'
import './Portfolio.css'




function Portfolio() {

       useEffect(() => {
        AOS.init({ duration: 3000});
        // 
    }, []);

 const handleClick = (e) => {
   console.log(e.target);
   const projectContainer = document.querySelector('.projects')
   if(projectContainer.classList.contains('open')) {
       projectContainer.classList.remove('open')
       e.target.textContent = 'Show More'
   } else {
       projectContainer.classList.add('open')
        e.target.textContent = 'Show Less'

   }
 }


    return (
      <div className="projects-cont">
        <div id="projects" className="projects">
          <Project
            data-aos="fade-right"
            image={proj1}
            date="2022"
            site="https://openmapp.com/med"
            title="mApp"
            description="A website that allows one to sell his or her used iPhone device and gadgets to get instant cash"
          />
          <Project
            data-aos="fade-left"
            image={proj2}
            date="2021"
            site="https://stoic-bell-f6dbc0.netlify.app/"
            title="MovieApp"
            description="This website is a movie nomination app that add different movies as part of their favorite movie "
          />
          <Project
            data-aos="fade-right"
            image={proj3}
            date="2021"
            site="https://phoneweb.netlify.app/"
            title="PhoneWeb"
            description="This is a website that allow one to sell any of his/her gadget ranging from any type of phone (iPhones, samsung etc) which is in completely good or fairly good condition"
          />
          <Project
            data-aos="fade-left"
            image={proj4}
            date="2021"
            site="https://gymster-port.netlify.app/"
            title="Gymster"
            description="A static website that displays different service that is offered ranging from Branding, Photography, and Graphic designs"
          />
        </div>

        <button onClick={handleClick}>Show More</button>
      </div>
    );
}


export default Portfolio;