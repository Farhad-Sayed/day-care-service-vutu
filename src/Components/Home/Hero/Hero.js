import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="container-fluid hero">
            <div style={{paddingTop: '10rem'}} className="container">
                <h1 className="text-white fs-1 fw-bold">High Quality <br/> Early Education Program</h1>
                <p className="text-white">At Vutu, our mission is to provide excellence in preschool. <br/>
                Learn, play and explore in a safe and nurturing environment.
                </p>
                <button className="btn btn-primary">Learn More</button>
            </div>
        </div>
    );
};

export default Hero;