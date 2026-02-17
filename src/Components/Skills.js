import "./SkillsCardStyles.css";
import SkillsCard from "./SkillsCard";
import SkillsCardData from "./SkillsCardData";
import React from 'react';

const Skills = () => {
  return (
    <div className="work-container">
        <h1 className="skills-heading">Skills & Tech Stack</h1>
        <div className="skills-container">
            {SkillsCardData.map((val, ind) => {
                return (
                  <SkillsCard 
                  key={ind}
                  title={val.title}
                  text={val.text}
                  />
                );
            })}
        </div>
    </div>
  );
};

export default Skills;