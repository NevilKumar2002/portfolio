import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, desc, src, githubLink, deployedLink, techstack }) => {
  const openLinkInNewPage = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className='project-card-container'>
      <img src={src} alt="project-image" className='project-image' />
      <h2 style={{color:'pink', textDecoration:'underline'}}>{title}</h2>
      <p>{desc}</p>
      <p><span className='techstack-text'>TechStack :</span> {techstack}</p>
      <button onClick={() => openLinkInNewPage(githubLink)}><BsGithub /> GitHub</button>
      <button onClick={() => openLinkInNewPage(deployedLink)}><FaGlobe />Go to Live</button>
    </div>
  );
}

export default ProjectsCard;
