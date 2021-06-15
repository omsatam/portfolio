import React, { useEffect } from "react";
import "./Skill.css";

function Skill({ name, percent }) {
  useEffect(() => {
    document.getElementById(name).style.width = percent * 4 + "px";
    document.getElementById(name).style.backgroundColor = "blue";
    document.getElementById(name).style.border = "none";
  }, []);
  return (
    <div className="skill">
      <div className="skill__container">
        <h6>{name}</h6>
        <hr id={name} className="skill__filled" />
      </div>
    </div>
  );
}

export default Skill;
