import React from "react";
import { useNavigate } from 'react-router-dom';
import './style.css'; // Import your CSS file for styling
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";


const Home = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer.", "MERN Stack Developer.", "React.JS Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
    const navigate = useNavigate();

    const handleProjectsClick = () => {
      navigate('/projects');
    };
  
    const handleAboutClick = () => {
      navigate('/about');
    };
  
  return (
    <div className="home-container">
      <div className="home-content">
      <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h2 className="subtitle">Hi I'm <span className="my-name">Nevil Kumar</span> </h2>
        <h2 className="text-4xl font-bold text-white">
          I'm Passionate <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <div className="buttons-container">
          <button className="button" onClick={handleProjectsClick}>My Projects</button>
          <button className="button" onClick={handleAboutClick}>About Me</button>
        </div>
      </div>
    </div>
  );
};

export default Home;


// const Home = () => {
//     const [text] = useTypewriter({
//       words: ["Frontend Developer.", "MERN Stack Developer.", "React.JS Developer."],
//       loop: true,
//       typeSpeed: 20,
//       deleteSpeed: 10,
//       delaySpeed: 2000,
//     });
//   return (
//     <div className="home-container">
//       <div className="home-first-section">
//         <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
//         <h1 className="text-6xl font-bold text-white">
//           Hi, I'm <span className="text-designColor capitalize">Nevil Kumar.</span>
//         </h1>
//         <h2 className="text-4xl font-bold text-white">
//           a <span>{text}</span>
//           <Cursor
//             cursorBlinking="false"
//             cursorStyle="|"
//             cursorColor="#ff014f"
//           />
//         </h2>
        
//       </div>
//       <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
//         <div>
//           <h2 className="text-base uppercase font-titleFont mb-4">
//             Find me in
//           </h2>
//           <div className="flex gap-4">
//             <span className="bannerIcon">
//               <FaFacebookF />
//             </span>
//             <span className="bannerIcon">
//               <FaTwitter />
//             </span>
//             <span className="bannerIcon">
//               <FaLinkedinIn />
//             </span>
//           </div>
//         </div>
//         <div>
//           <h2 className="text-base uppercase font-titleFont mb-4">
//             BEST SKILL ON
//           </h2>
//           <div className="flex gap-4">
//             <span className="bannerIcon">
//               <FaReact />
//             </span>
//             <span className="bannerIcon">
//               <SiNextdotjs />
//             </span>
//             <span className="bannerIcon">
//               <SiTailwindcss />
//             </span>
//             <span className="bannerIcon">
//               <SiFigma />
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;