import React from 'react';
import './Work.css';
import Workcard from '../../components/workCard/WorkCard';
import {educationInfo, workExperiences} from '../../portfolio';

export default function Work() {
  return (
    <div className="education-section" id="education">
        <h1 className="education-heading">Work Experience</h1>
        <div className="education-card-container">
          {workExperiences.experience.map((work) => (
            <Workcard work={work} />
          ))}
        </div>
    </div>
  );
}
