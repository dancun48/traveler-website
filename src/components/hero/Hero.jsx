import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/images/dark-arrow.png';

const Hero = () => {
    return (
        <div className='hero container' id='hero'>
        <div className='hero-text'>
            <h1>Adventure Awaits. Explore the World with Us.</h1>
            <p>Discover the world with ease and excitement. We offer personalized travel experiences that take you beyond the ordinary — from vibrant cities to remote escapes. Adventure begins the moment you choose to explore with us</p>
            <button className='btn'>Login | Sign Up<img src={dark_arrow}/></button>
        </div>
        </div>
    )
}

export default Hero