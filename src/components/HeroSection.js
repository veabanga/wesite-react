import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2Trim.mp4' autoPlay loop muted />
      <h1>THE WAIT IS OVER !</h1>
      <p>Our Best Collection Ever Is Here</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          WATCH NOW <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;