import React from "react";
import "./About.css";
import { Link } from "react-scroll";

import about from "../../images/about.png";

const About = () => {
  return (
    <>
      <div className="aboutContainer" id="about">
        <div className="aboutBox">
          <div className="infoDiv">
            <div className="info">
              <div className="heading">
                <h1>About Me</h1>
              </div>
              <div className="details">
                <p>
                  I'm from Saltlake city (Kolkata) , completed my 
                  B.Tech in the field Electrical Engineering , beside that I have a
                  great potential towards Web Devlopment .
                </p>
                <p> I started learning
                  Web Devlopment from November 2020 and fell in love with the
                  concepts of Web Devlopment and started exploring the
                  technologies like 'Reactjs' , 'Nodejs' , 'Expressjs' ,
                  'MongoDB' , after gathering some basic knowledge about those
                  technologies I started to build my own projects .</p>
              </div>
              <div className="btn">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <button>My Projects</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="picdiv">
            <img src={about} alt="aboutPic" className="aboutPic" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
