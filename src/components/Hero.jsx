import React from 'react';
import { Typography, Button } from '@mui/material';
import './Hero.css';
import heroimage from '../assets/heroimage.svg'; 

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="ellipse"></div>
      <div className="hero-content">
        <div className="text-content">
          <Typography variant='h2' className="hero-text"  style={{ fontWeight: 'bold' }}>
            <span style={{ color: '#8A6FF2' }}>SECURELY</span> Store Your Files, with FlickFile
          </Typography>
          <Typography variant="body1" className="description-text" style={{ top: '150px' }}>
            FlickerFile is your ultimate decentralized storage solution, offering unmatched security, privacy, and accessibility for all your digital assets.
          </Typography>
        </div>
        <img 
          src={heroimage} 
          alt="Hero" 
          style={{ width: '700px', height: 'auto', position: 'absolute', top: '200px', right: '100px' }} 
        />
      </div>
      <div className="hero-buttons">
        <Button 
          variant="contained"
          sx={{ backgroundColor: '#FFFFFF', color: '#000000', '&:hover': { backgroundColor: '#8A6FF2', color: '#FFFFFF' }, }}
        >
          Get Started
        </Button>
        <Button 
          variant="outlined" 
          sx={{ borderColor: '#8A6FF2', color: '#8A6FF2', '&:hover': { backgroundColor: '#8A6FF2', color: '#FFFFFF' } }}
        >
          Upload File
        </Button>
      </div>
    </div>
  );
};

export default Hero;
