import React from "react";
import works from "../../images/works.png";


import project1 from "../../images/nc.JPG";
import project2 from '../../images/fbsocial.JPG'
import project3 from '../../images/scom.JPG'

import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="projectContainer" id="projects">
        <div className="projectBox">
          <div className="porjectDiv">
            <div className="head">
              <h1>Projects</h1>
            </div>
            <div className="projects">
            <div className="project">
                <div className="imageDiv">
                  <img src={project3} alt="Project1" className="project1" />
                </div>
                <div className="description">
                  <h2>Secommerce</h2>
                  <p>It is a responsive dynamic ecommerce site like Amazon . </p>
                </div>
                <div className="btn">
                <a href="https://secom.netlify.app/" target="_blank">
                  <button>Visit</button>
                </a>
                </div>
              </div>
              <div className="project">
                <div className="imageDiv">
                  <img src={project1} alt="Project1" className="project1" />
                </div>
                <div className="description">
                  <h2>Note's Cloud</h2>
                  <p>A Responsive Webapp to save personal notes online , a particular user must have to register first for saving the notes. </p>
                </div>
                <div className="btn">
                <a href="https://notes-cloud.herokuapp.com" target="_blank">
                  <button>Visit</button>
                </a>
                </div>
              </div>
              <div className="project">
                <div className="imageDiv">
                  <img src={project2} alt="Project1" className="project1" />
                </div>
                <div className="description">
                  <h2>Social media UI</h2>
                  <p>A simple React Facebook UI clone with Timeline and Profile page. </p>
                </div>
                <div className="btn">
                <a href="https://fbsimpleui.netlify.app" target="_blank">
                  <button>Visit</button>
                </a>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
