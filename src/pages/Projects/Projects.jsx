import React from "react";

import "./Projects.css";
import { projects } from "../../projectList";

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
              {projects.map((project, i) => (
                <div className="row" key={i}>
                  <div className="project">
                    <div className="imageDiv">
                      <img
                        src={project.image}
                        alt={`${project.name}`}
                        className="project1"
                      />
                    </div>
                    <div className="description">
                      <h2>{project.name}</h2>
                      <p>{project.description}</p>
                    </div>
                    <div className="btn">
                      <a href={project.link} target="blank">
                        <button>Visit</button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
