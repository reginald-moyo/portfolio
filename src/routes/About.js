import React from 'react'

import Navbar from "../Components/Navbar";

import Footer from "../Components/Footer"
import HeroImg2 from '../Components/HeroImg2';
import Skills from '../Components/Skills';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT" text="When I’m not coding, I’m learning new technologies, improving existing projects, or exploring ways to make the web more accessible and efficient. I’m currently seeking opportunities where I can grow as a developer, contribute to meaningful projects, and work with a team that values quality and creativity. My background in client service has strongly shaped how I approach development — I understand the importance of listening carefully, communicating clearly, and delivering solutions that genuinely meet user needs. Working directly with clients has strengthened my problem-solving skills, adaptability, and attention to detail, all of which I now apply to building thoughtful, user-focused web experiences." />
      <Skills />
      <Footer />
    </div>
  )
}

export default About