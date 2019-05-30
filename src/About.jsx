import React from 'react'


const About = () => {
    return (
        <div className="about">
            <h1 className="content-text">
                Hello, world
            </h1>

            <p className="abouttext">
                My name is Gaon.
                I am a junior developer and also a UX designer.
            </p>

            <a className="portfolio" href="https://gaonita.github.io/" target="_blank">
            <i className="fas fa-cat"></i>
            </a>

            <a className="github" href="https://github.com/gaonita" target="_blank">
                <i class="fab fa-github"></i>
            </a>
            <a className="linkedin" href="https://www.linkedin.com/in/gaonyang/" target="_blank">
                <i className="fab fa-linkedin-in"></i>
            </a>

        </div>
    )
};

export default About
