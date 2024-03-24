import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
// import './ProjectsCard.css'; // Import CSS file

const Projects = ({ title, des, src }) => {
  return (
    <div className="projects-card">
      <div className="image-container">
        <img
          src={src}
          alt="src"
        />
      </div>
      <div className="project-info">
        <div>
          <div className="flex items-center justify-between">
            <h3>{title}</h3>
            <div className="icons">
              <span>
                <BsGithub />
              </span>
              <span>
                <FaGlobe />
              </span>
            </div>
          </div>
          <p>{des}</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
