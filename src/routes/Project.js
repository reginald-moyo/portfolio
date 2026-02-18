import React from 'react'

import Navbar from "../Components/Navbar";

import Footer from "../Components/Footer";
import HeroImg2 from '../Components/HeroImg2';
import Work from '../Components/Work';

const Project = () => {
  return (
  <div>
    <Navbar />
    <HeroImg2 heading="PROJECTS" text="The projects below showcase my journey as a developer. I’ve used them to experiment with new technologies, solve practical problems, and continuously improve my technical skills. Each one reflects my commitment to learning, adaptability, and building web experiences that are both efficient and accessible. My background in client service also influences how I approach these projects, prioritizing clarity, usability, and solutions that genuinely serve user needs." />
    <Work />
    <Footer />
  </div>
  ); 
};

export default Project