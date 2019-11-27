import React from 'react'
import me from '../img/me.png'

const About = () => {
    return (
        <div className="about">
            <h1 className="content-text">
                Hello, world
            </h1>

            <p className="abouttext">
                My name is Gaon.
                I am a junior developer and also a UX designer<br/>
                who cares about future of the world.
            </p>

            <a className="portfolio" href="https://gaonita.github.io/" rel="noopener noreferrer" target="_blank">
                <img src={me} alt='icon'/>
            </a>

            <div className="links">
            <a className="github" href="https://github.com/gaonita" rel="noopener noreferrer" target="_blank">
                <i className="huge github icon"></i>
            </a>

            <a className="linkedin" href="https://www.linkedin.com/in/gaonyang/" rel="noopener noreferrer"  target="_blank">
                <i className="huge linkedin alternate icon"></i>
            </a>
            </div>

        </div>
    )
};

export default About
