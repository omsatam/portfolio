import React from "react";
import "./About.css";
import Skill from "./Skill";
import { Link } from "react-scroll";

function About() {
  return (
    <div id="about" className="about">
      <h2>About</h2>
      <hr />
      <div className="about__container">
        <div className="about__info">
          <h2>
            Hi I am Om Satam. I am self taught full stack web developer. I have
            built various applications using React, HTML/CSS, MERN, Django,
            Python.
          </h2>
          <Link to="projects" 
            smooth={true}>
            <span className="about__work">View my work</span>
          </Link>
        </div>
        <div className="about__skills">
          <Skill name="HTML" percent={80} />
          <Skill name="CSS" percent={70} />
          <Skill name="Javascript" percent={60} />
          <Skill name="React" percent={60} />
          <Skill name="Python" percent={80} />
          <Skill name="node-js" percent={50} />
          <Skill name="Django" percent={70} />
          <Skill name="ML/DS" percent={70} />
          <Skill name="Flask" percent={60} />
          <Skill name="C/C++" percent={40} />
        </div>
      </div>
    </div>
  );
}

export default About;
