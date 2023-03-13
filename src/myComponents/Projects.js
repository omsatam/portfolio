import React, { useState, useEffect } from "react";
import "./Projects.css";
import axios from "../axios";
import Project from "./Project";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function Projects() {
  const [projects, setProjects] = useState(null);
  const [javascript, setJavascript] = useState(null);
  const [ml, setMl] = useState(null);
  const [django, setDjango] = useState(null);
  const [mern, setMern] = useState(null);
  const [react, setReact] = useState(null);
  const [html, setHtml] = useState(null);
  const [native, setNative] = useState(null);
  // const [activeProject, setActiveProject] = useState(projects);

  useEffect(() => {
    async function fetchProjects() {
      const requestProjects = await axios.get("projects.json");
      setProjects(requestProjects.data);
      const requestJavascript = await axios.get("javascript.json");
      setJavascript(requestJavascript.data);
      const requestMl = await axios.get("ml.json");
      setMl(requestMl.data);
      const requestHtml = await axios.get("html.json");
      setHtml(requestHtml.data);
      const requestMern = await axios.get("mern.json");
      setMern(requestMern.data);
      const requestReact = await axios.get("react.json");
      setReact(requestReact.data);
      const requestNative = await axios.get("native.json");
      setNative(requestNative.data);
      const requestDjango = await axios.get("django.json");
      setDjango(requestDjango.data);
    }
    fetchProjects();
    return fetchProjects();
  }, []);

  useEffect(() => {
    const categories = document.getElementsByClassName("projects__category");
    for (let i = 0; i < categories.length; i++) {
      categories[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("activeCategory");
        if (current.length !== 0) {
          current[0].className = current[0].className.replace(
            " activeCategory",
            ""
          );
        }
        this.className += " activeCategory";
      });
    }
  }, []);

  return (
    <div className="projects">
      <h2>Projects</h2>
      <hr />
      <Router>
        <div className="projects__categories">
          <Link to="">
            <li className="projects__category activeCategory">All</li>
          </Link>
          <Link to="react">
            <li className="projects__category">React</li>
          </Link>
          <Link to="mern">
            <li value={mern} className="projects__category">
              MERN
            </li>
          </Link>
          <Link to="javascript">
            <li className="projects__category">Javascript</li>
          </Link>
          <Link to="ml">
            <li className="projects__category">ML/DS</li>
          </Link>
          <Link to="native">
            <li className="projects__category">React-native</li>
          </Link>
          <Link to="django">
            <li className="projects__category">Django</li>
          </Link>
          <Link to="html">
            <li className="projects__category">HTML+CSS</li>
          </Link>
        </div>
        <div className="projects__container">
          <Switch>
            <Route path="/mern">
              {mern?.map((project) => (
                <Project key={project.name} data={project} />
              ))}
            </Route>
            <Route path="/javascript">
              {javascript?.map((project) => (
                <Project key={project.name} data={project} />
              ))}
            </Route>
            <Route path="/react">
              {react?.map((project) => (
                <Project key={project.name} data={project} />
              ))}
            </Route>
            <Route path="/native">
              {native?.map((project) => (
                <Project key={project.name} data={project} />
              ))}
            </Route>
            <Route path="/ml">
              {ml?.map((project) => (
                <Project key={project.name} data={project} />
              ))}
            </Route>
            <Route path="/html">
              {html?.map((project) => (
                <Project key={project.name} data={project} />
              ))}
            </Route>
            <Route path="/django">
              {django?.map((project) => (
                <Project key={project.name} data={project} />
              ))}
            </Route>
            <Route path="">
              {projects?.map((project) => (
                <Project key={project.name} data={project} />
              ))}
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Projects;
