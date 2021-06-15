import React from "react";
import works from "../../images/works.png";
import project1 from "../../images/nc.JPG";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="projectContainer" id="projects">
        <div className="projectBox">
          <div className="picDiv">
            <img src={works} alt="projectPic" className="projectPic" />
          </div>
          <div className="porjectDiv">
            <div className="head">
              <h1>Projects</h1>
            </div>
            <div className="projects">
              <div className="project">
                <div className="imageDiv">
                  <img src={project1} alt="Project1" className="project1" />
                </div>
                <div className="description">
                  <h2>Note's Cloud</h2>
                  <p>A Webapp to save personal notes online , a particular user must have to register first for saving the notes. </p>
                </div>
                <div className="btn">
                <a href="https://notes-cloud.herokuapp.com" target="_blank">
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
