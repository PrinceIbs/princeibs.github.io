import React from "react";

import { images } from "../../constants";
import "./Skills.scss";

const skills = [
  { name: "Python", imgUrl: images.python, bgColor: "#FFF" },
  { name: "JavaScript", imgUrl: images.javascript, bgColor: "#FFF" },
  { name: "Java", imgUrl: images.react, bgColor: "#FFF" },
  { name: "Git", imgUrl: images.git, bgColor: "#FFF" },
];

const experiences = [
  {
    year: "2022",
    works: [
      { name: "Summer Intern", company: "Google" },
      { name: "Student Ambassador", company: "Microsoft" },
    ],
  },
  {
    year: "2021",
    works: [
      { name: "Community Lead", company: "Ingressive For Good" },
      { name: "President", company: "Coders Nation" },
    ],
  },
];
const Skills = () => {
  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>
      <div className="app__skills">
        <div className="app__skills-container">
          <div className="app__skills-list">
            {skills.map((skill) => (
              <div className="app__skills-item app__flex">
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={skill.imgUrl} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </div>
            ))}
          </div>

          <div className="app__skills-exp">
            {experiences.map((experience) => (
              <div className="app__skills-exp-item">
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>
                <div className="app__skills-exp-works">
                  {experience.works.map((work) => (
                    <>
                      <div className="app__skills-exp-work">
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
    </>
  );
};

export default Skills;
