import React from "react";

import { images } from "../../constants";
import {GrTools, Hi} from 'react-icons/gr';
import "./About.scss";

const abouts = [
  {
    title: "Backend Developer",
    description: "I am a Python Specialist",
    image: images.python,
  },
  {
    title: "Frontend Developer",
    description: "I am a Frontend Developer",
    image: images.react,
  },
  {
    title: "Software Engineer",
    description: "I am a Software Developer",
    image: images.git,
  },
  {
    title: "Devops Specialist",
    description: "I am a Devops Engineer",
    image: images.flutter,
  },
];

const About = () => {
  return (
    <div className="app__about">
      <h2 className="head-text"><p>My <span>ToolBox</span></p><GrTools/></h2>

      <div className="app__profiles">
        {abouts.map((about) => (
          <div className="app__profiles-item" key={about.title}>
            <img src={about.image} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <h2 className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
