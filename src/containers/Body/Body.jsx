import React from "react";
import "./body.css";
import About from "../../components/about/About";
import Projects from "../../components/projects/Projects";
import Skills from "../../components/skills/Skills";
import Work from "../../components/work/Work";
import Contact from "../../components/contact/Contact";
function Body() {
  return (
    <div className="body">
      
      <section id="about">
        <About />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>     
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
