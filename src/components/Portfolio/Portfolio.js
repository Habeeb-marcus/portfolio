import React from 'react';
import Project from '../Project';
import proj1 from '../../images/project1.png'
import proj2 from '../../images/snappysoap.png'
import proj3 from '../../images/sunnyside.png'
import proj4 from '../../images/colorlib.png'





function Portfolio() {

    return (
        <div>
        <Project image={proj1} title="Phoneweb" description="A website that allows one to sell his or her used iPhone device and gadgets to get instant cash" />
        <Project image={proj2} title="Snappysoap" description="This is a website that sells quality skin care soap that removes smooth 100% and gives silk skin"/>
        <Project image={proj3} title="Blogr" description="A static website that displays different service that is offered ranging from Branding, Photography, and Graphic designs" />
        <Project image={proj4} title="Colorlib" description="A clone for website that show what is offered on the website " />
        </div>
    )
}


export default Portfolio;