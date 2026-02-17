import React from 'react'
import './SkillsCardStyles.css'

const SkillsCard = ({ title, text }) => {
  return (
    <div className ='skills-card'>
                    <h2 className='skills-title'>{title}</h2>
                <div className='skills-details'>
                    <ul className='skils-list'>
                        {text.map((item, index) => (
                            <li className='skills-list-item' key={index}>{item}</li>
                        ))}
                    </ul>
                </div>    
            </div>
  );
};

export default SkillsCard