import React from 'react';
import './Project.css'



function Project(props) {

    return (

        <div className="container" data-aos="fade down">

            <img src={props.image} alt="phone web" />

            <div className="project-description">
                <h3 className="title">{props.title}<span>2021</span></h3>
                <p> {props.description}</p>
                    <div className="view-cont">
                        <a href="/" className="view-btn preview">Preview</a>
                        <a href="/" className="view-btn visit">Visit site</a>
                    </div>
            </div>


        </div>
    )
}



export default Project