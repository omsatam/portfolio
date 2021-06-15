import React, { useState } from "react";
import "./Project.css";
function Project({ data }) {
  const [info, showInfo] = useState(false);
  const setInfo = () => {
    showInfo(!info);
  };
  return (
    <div className="project">
      <img
        onClick={setInfo}
        src={data.imageUrl}
        alt=""
        className={info ? "project__fade" : undefined}
      />
      {info && (
        <div className="project__buttons">
          <a href={data.url}>
            <button>visit Project</button>
          </a>
          <a href={data.code}>
            <button>Go to code</button>
          </a>
        </div>
      )}
    </div>
  );
}

export default Project;
