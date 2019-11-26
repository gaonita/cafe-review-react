import React from 'react';


const Main = () => {
    return (
        <div className="main">
            <img className="mainImg" alt="cover"
                src="https://images.unsplash.com/photo-1513440758715-7a3c5539b7fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                style={{height: '550px', objectFit: 'cover'}}/>
            <div className="mainIntro">
                <h1 className="mainTitle">SOfO CAFE REVIEWS
                </h1>
                <h4>Share your experience with consideration of sustainable future </h4>
                <p className="mainText">
                    The blocks <strong>S</strong>outh <strong>o</strong>f <strong>Fo</strong>lkungagatan(SOFO) are packed with interesting, cool and creative shops specializing in
                    clothing, design, vintage, music and much more. There are also scores of restaurants and cafés. Here you can write reviews about
                    cafes in SOFO including <a href="https://www.un.org/sustainabledevelopment/sustainable-development-goals/"> sustainability </a> rate.
                </p>
            </div>
        </div>
    )
};

export default Main
