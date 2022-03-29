import React, { useState, useEffect } from "react";
import { FaEye, FaGithub } from "react-icons/fa";

import {urlFor, client} from "../../client"
import "./Projects.scss";


const Projects = (props) => {
  const [active, setActive] = useState("all");
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([])
  let tags = [];
  projects.forEach(project => tags.push(project.tag))

   tags = [...(new Set(tags)), 'all'];

   useEffect(() => {
     const query = '*[_type == "projects"]';

     client.fetch(query).then((data) => {
       setProjects(data);
       setFilteredProjects(data)
     })
   }, [])
   

  const handleProjectsFilter = (item) => {
    setActive(item);

    setTimeout(() => {
      if (item === 'all') {
        setFilteredProjects(projects)
      } else {
        setFilteredProjects(projects.filter(project => project.tag.includes(item)))
      }
    }, 200)
  };

  return (
    <div id="projects" onClick={() => props.setIsNavOpen(false)}>
      <div className={`app__projects ${props.themeMode}`}>
        <h2 className="head-text color-text"> My Projects</h2>

        <div className="app__projects-filter">
          {tags.map((item, index) => (
            <div
              key={index}
              onClick={() => handleProjectsFilter(item)}
              className={`app__projects-filter-item app__flex p-text ${
                active === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="app__projects-items">
          {filteredProjects.map((project, index) => (
            <div className="app__projects-item app__flex" key={index}>
              <div className="app__projects-img app__flex">
                <img src={urlFor(project.imgUrl)} alt={project.title} />
                <div className="app__projects-hover app__flex">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="app__flex">
                      <FaEye />
                    </div>
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noreferrer">
                    <div className="app__flex">
                      <FaGithub />
                    </div>
                  </a>
                </div>
              </div>

              <div className="app__projects-content app__flex">
                <h4 className="bold-text">{project.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
