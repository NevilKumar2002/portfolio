

import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./style.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <div className="contact-item">
        <EmailIcon  />
          <a href="mailto:example@example.com">gurramnevilkumar@gmail.com</a>
        </div>
        <div className="contact-item">
          <PhoneIcon />
          <a href="tel:+917569064280">+91 7569064280</a>
        </div>
        <div className="contact-item">
        <HomeIcon />
          <span>Hyderabad, Telangana, India</span>
        </div>
      </div>
      <div className="social-media">
       <div className="contact-item">
       <GitHubIcon />
       <a href="https://github.com/NevilKumar2002/" target="_blank" rel="noopener noreferrer">
         <span>GitHub</span>
        </a>
       </div>
       <div className="contact-item">
       <FacebookIcon />
        <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">
        
         <span>Facebook</span>
        </a>
        </div> 
        <div className="contact-item">
        <LinkedInIcon />
        <a href="https://www.linkedin.com/in/nevil-kumar-gurram-6898b5267/" target="_blank" rel="noopener noreferrer">
         
          <span>LinkedIn</span>
        </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
