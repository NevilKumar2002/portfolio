import React, { useState } from "react";
import "../style.css";
import SkillCard from "./SkillCard";
import java from "../../assets/java.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import Bootstrap from "../../assets/bootstrap-framework-logo.png";
import javascript from "../../assets/javascript.png";
import nodejs from "../../assets/Node.js.png";
import mysql from "../../assets/1012821_code_development_logo_mysql_icon.png";
import mongodb from "../../assets/1012822_code_development_logo_mongodb_programming_icon.png";
import reactjs from "../../assets/1174949_js_react js_logo_react_react native_icon.png";

const Skills = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <>
     <h2 className="education-heading">Skills</h2>
   
    <div className="skills-container" onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <div className={`skills-scroll ${isHovered ? 'paused' : ''}`}>
       
        
        <div className="skill-card-container">
          <SkillCard image={java} name={'Java'} />
          <SkillCard image={html} name={'HTML'} />
          <SkillCard image={css} name={'CSS'} />
          <SkillCard image={Bootstrap} name={'Bootstrap'} />
          <SkillCard image={javascript} name={'JavaScript'} />
          <SkillCard image={reactjs} name={'React.JS'} />
          <SkillCard image={nodejs} name={'Node.JS'} />
          <SkillCard image={'https://miro.medium.com/v2/resize:fit:1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png'} name={'Express.JS'} />
          <SkillCard image={mongodb} name={'MongoDB'} />
          <SkillCard image={mysql} name={'MYSQL'} />
          <SkillCard image={java} name={'Java'} />
          <SkillCard image={html} name={'HTML'} />
          <SkillCard image={css} name={'CSS'} />
          <SkillCard image={Bootstrap} name={'Bootstrap'} />
          <SkillCard image={javascript} name={'JavaScript'} />
          <SkillCard image={reactjs} name={'React.JS'} />
          <SkillCard image={nodejs} name={'Node.JS'} />
          <SkillCard image={'https://miro.medium.com/v2/resize:fit:1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png'} name={'Express.JS'} />
          <SkillCard image={mongodb} name={'MongoDB'} />
          <SkillCard image={mysql} name={'MYSQL'} />
        
        </div>
      </div>
    </div>
    </>
  );
};

export default Skills;
