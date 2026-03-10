import React from 'react'
import { useParams } from "react-router";
import Navbar from "../Components/Navbar";
import WorkCardData from "../Components/WorkCardData";
import Footer from "../Components/Footer";
import "./Project.css"
import HeroImg2 from '../Components/HeroImg2';



const Project = () => {

    const params = useParams();
    console.log(params);
    const projectId = params.id ? parseInt(params.id) : undefined;
    const project = WorkCardData.find((item) => item.id === projectId);
    console.log(project);
  return (
  <div className='project-page'>

    <Navbar />
    <div className='pjct-cntnt'>
      <div className='project-header'>
        <h2 className='prjct-title'>{project?.title}</h2>
        <p className='project-description'>{project?.description}</p>
      </div>

      <div className='screenshots-grid'>
      {project?.screenshots?.map((img, index) => (
        <div className="screenshot-card" key={index}>
          <img 
            className='screenshot-image'
            src={img} 
            alt={`screenshot-${index}`} />
        </div>
        ))}
      </div>

    </div>
    
    <div className='foot'>
      <Footer />
    </div>
    

  </div>
  ); 
};

export default Project