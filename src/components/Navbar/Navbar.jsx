import React from "react";
import { Link } from "react-scroll";

import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="navContainer">
        <div className="nav">
          <div className="prot">
            <h1>Portfolio</h1>
          </div>
          <div className="links">
            <div className="link">
              <Link
                className="navlinks"
                activeClass="active"
                to="main"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Intro
              </Link>
              <Link
                className="navlinks"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                About
              </Link>
              <Link
                className="navlinks"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Projects
              </Link>
              <Link
                className="navlinks"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Contact
              </Link>
            </div>
            <div className="cv">
              <a
                href="https://drive.google.com/file/d/1e0e_DjkUWlcOh-_I_b66wak_Tlau-LqW/view?usp=sharing"
                target="blank"
              >
                <button>
                  <h3>Resume</h3>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
