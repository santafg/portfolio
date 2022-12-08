import React, { useState } from "react";
import { Link } from "react-scroll";

import { FaBars } from "react-icons/fa";
import "./Mobilenav.css";
import pdf from "../../Assets/SantanuGhosh_Resume.pdf";

const MobileNav = () => {
    const [state, setstate] = useState(false)
  return (
    <>
      <div className="navMobile">
        <div className="port">
          <h1>Portfolio</h1>
        </div>
        <div className="bar">
          <FaBars className="barBtn" onClick={()=>setstate(!state)} />
        </div>
      </div>
      {/* <div className="mobileLinks"> */}
      <div className={state === true ? "mobileLinks" : "none" }>
        
          <Link onClick={()=>setstate(!state)}
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
          <Link onClick={()=>setstate(!state)}
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
          <Link onClick={()=>setstate(!state)}
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
          <Link onClick={()=>setstate(!state)}
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

          <a className="navlinks"
            href={pdf}
            target="blank"
          >
            Resume
          </a>
        
      </div>
    </>
  );
};

export default MobileNav;
