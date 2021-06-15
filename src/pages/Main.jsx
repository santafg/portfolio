import React from "react";
import mainPic from "../images/hello.png";
import { Link } from "react-scroll";

const Main = () => {
  return (
    <>
      <div className="mainContainer" id="main">
        <div className="mainBox">
          <div className="imageDiv">
            <img src={mainPic} alt="hello" className="mainPic" />
          </div>
          <div className="mainDetailsDiv">
            <div className="intro">
              <h5>Hello !</h5>
              <h1>I'm Santanu Ghosh</h1>
              <p>A MERN-Stack Web Developer</p>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <button>Know Me</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
