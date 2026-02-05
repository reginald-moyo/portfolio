import "./HeroImgStyles.css"

import React from 'react'

import IntroImg from "../assets/forest-image.jpg"
import { Link } from "react-router-dom";
// import CircularCarousel from "../Components/CircularCarousel";


const HeroImg = () => {
  return <div className="hero carousel-wrapper">
    <div className="mask">
      <img className="intro-img" 
       src="https://images.unsplash.com/photo-1590959651373-a3db0f38a961?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="IntroImg" />
    </div>
    <div className="content">
      <h1>Front-End Developer</h1>
      <p>I’m Reginald Moyo, a dedicated web developer driven by curiosity, creativity, and the desire to build impactful digital products. I specialize in creating responsive, high-quality web experiences and continuously push myself to learn, improve, and innovate. This portfolio showcases the work that reflects my skills and passion.</p> 
      <div className="btn-container">
        <Link to="/project"
        className="btn">Projects
        </Link>
        <Link to="/about"
        className="btn btn-light">About
        </Link>
      </div>
    </div>
    
    {/* <CircularCarousel /> */}
  </div>
};

export default HeroImg;

