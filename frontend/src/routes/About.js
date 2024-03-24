import React from "react";
import myImg from ".././assets/NEVIL S PHOTO.jpeg"
import computerSvg from ".././assets/computer wallpaper2.jpeg"

import Skills from "./Skills/Skills";
const About = () => {
  return (
    <div>
      <div className="professional-summary">
        <div className="about-left-container">
          <h2 style={{color: 'rgb(22 242 179)' }}>WHO AM I ?</h2>
          <p>
            My name is Nevil Kumar. I am a professional and enthusiastic programmer
            in my daily life. I am a quick learner with a self-learning
            attitude. I love to learn and explore new technologies and am
            passionate about problem-solving. I love almost all the stacks of
            web application development and love to make the web more open to
            the world. My core skill is based on JavaScript and I love to do
            most of the things using JavaScript. I am available for any kind of
            job opportunity that suits my skills and interests.
          </p>
        </div>
        <div className="about-right-container">
          <img src={myImg} alt="my-photo" className="my-image" />
        </div>
      </div>
      <div className="total-education-section">
        <div >
          <h2 className="education-heading">Education</h2>
        </div>
  <div className="education-section">
  <div className="education-left-container">
          <img src={computerSvg} alt="image" className="computer-image" />
        </div>
        <div className="education-right-container">
        <div className="education-section1 ">
          <p style={{textAlign:'center', color:'rgb(22 242 179)'}}>2020-2023</p>
          <h3 >BACHELOR DEGREE</h3>
          <p>Annamacharya Institute Of technology and Sciences::Tirupati</p>
        </div>
        <div className="education-section1">
          <p style={{textAlign:'center', color:'rgb(22 242 179)'}}>2017-2020</p>
          <h3>DIPLOMA</h3>
          <p>GMR Polytechnic- Srisailam</p>
        </div>
        <div className="education-section1 ">
        <p style={{textAlign:'center', color:'rgb(22 242 179)'}}>2014-2017</p>
          <h3>SECONDARY SCHOOL OF EDUCATION</h3>
          <p>Govt.Project High School - Srisailam Project</p>
        </div>
        </div>
  </div>

      </div>
      <div className="total-skills-section">
     <Skills />
      </div>

    </div>
  );
};

export default About;
