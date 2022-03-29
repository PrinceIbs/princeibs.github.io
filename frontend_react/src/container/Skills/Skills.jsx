import React, {useState, useEffect} from "react";

import {client, urlFor} from "../../client"
import "./Skills.scss";

const Skills = (props) => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const expQuery = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(expQuery).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);
  return (
    <div id="skills" onClick={() => props.setIsNavOpen(false)}>
      <div className={`app__skills ${props.themeMode}`}>
        <h2 className="head-text color-text">My Skills & Experiences</h2>
        <div className="app__skills-container">
          <div className="app__skills-list">
            {skills.map((skill, index) => (
              <div
                className="app__skills-item app__flex"
                key={`skill-${index}`}
              >
                <div className="app__flex">
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </div>
            ))}
          </div>

          <div className="app__skills-exp">
            {experiences.map((experience, index) => (
              <div className="app__skills-exp-item" key={`experience-${index}`}>
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>
                <div className="app__skills-exp-works">
                  {experience.works.map((work, index) => (
                    <>
                      <div
                        className="app__skills-exp-work"
                        key={`${experience}-${work}-${index}`}
                      >
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
