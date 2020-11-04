import React from 'react';
import './Work.css';
import Workcard from '../../components/workCard/WorkCard';
import {educationInfo, workExperiences} from '../../portfolio';

export default function Work() {
  return (
    <div className="work-section" id="work">
        <h1 className="work-heading">Work Experience</h1>
        <div className="work-card-container">
          {workExperiences.experience.map((work) => (
            <Workcard work={work} />
          ))}
        </div>
    </div>
  );
}
