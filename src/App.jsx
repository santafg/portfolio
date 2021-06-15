import React from "react";
import Mynavbar from "./components/Navbar/Mynavbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Main from "./pages/Main";

const App = () => {
  return (
    <>
      <div className="pageContainer">
        <Mynavbar />
        <Main />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
