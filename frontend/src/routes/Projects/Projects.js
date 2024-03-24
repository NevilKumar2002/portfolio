import React from "react";
import ProjectCard from './ProjectCard'
import Project1 from "../../assets/Screenshot (193).png";
import Project2 from "../../assets/Screenshot (194).png";
import Project3 from "../../assets/Screenshot (195).png";
import Project4 from "../../assets/Screenshot (196).png";
import Project5 from "../../assets/Screenshot (199).png";
import "../style.css"
import "../style.css"
const Projects=()=>{
    return(
        <div>
            <h2 style={{textAlign:'center'}} className="education-heading">My Projects</h2>
           {/* <ProjectCard  title={"helo"} des={'dnejfnjfn'}src={'ffjfnejfnejf'} /> */}
           <div className="projects-container">
           <ProjectCard  title={"Crypto Tracker Website"} desc={'In this website, The User will get 100 crypto coins, and their prices, Market Value, Total Volumes etc'} src={Project2} githubLink={'https://github.com/NevilKumar2002/crypto_tracker_project'} deployedLink={'https://nevilkumar-crypto-tracker-project.vercel.app/'} techstack={'React.JS, CSS, Material UI'} />
           <ProjectCard  title={"Personal Finance Tracker"} desc={'It is Like Dairy, The user can enter and access their data such as Income and Expenses.'} src={Project3} githubLink={'https://github.com/NevilKumar2002/personal_finance_tracker'} deployedLink={'https://nevil-kumar-personal-finance-tracker.vercel.app/'} techstack={'React.JS, CSS, Google Firebase'}  />
           <ProjectCard  title={"Chat Application"} desc={'Developed a real-time chat application using the MERN stack, enabling instant messaging through WebSocket technology. Ensured application security with user authentication, authorization features.'} src={Project1} githubLink={'https://github.com/NevilKumar2002/chat-app_MERN'} deployedLink={'https://chat-app-mern-nevil-kumar.vercel.app/login'} techstack={'React.JS,Express.JS, Node.JS, MongoDB, CSS'}  />
           <ProjectCard  title={"Weather Application"} desc={'It will give real time data of the weather such as Temparature, humidity, Air Conditions, Humidity, rainfall. It ia also gives past 7 days data.'} src={Project4} githubLink={'https://github.com/NevilKumar2002/hiringHood_Assignment/tree/main/hiring_hood'} deployedLink={'https://nevilkumar2002.github.io/hiringHood_Assignment/'} techstack={'React.JS, CSS'} />
           <ProjectCard  title={"Simple Calculator"} desc={'It is Calculator. We can perform Mathematical Operations such as Addition, Subtraction, Multiplication and Division'} src={Project5} githubLink={'https://github.com/NevilKumar2002/Simple_Calculator'} deployedLink={'https://nevilkumar2002.github.io/Simple_Calculator/'} techstack={'HTML, CSS, JavaScript'} />
        
           </div>
          </div>
    )
}
export default Projects;