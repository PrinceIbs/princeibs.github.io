import React from "react";

import { images } from "../../constants";
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

const About = (props) => {
  return (
    <div id="about" onClick={() => props.setIsNavOpen(false)}>
      <div className={`app__about ${props.themeMode}`}>
        <h2 className="head-text color-text">
          <p>About Me</p>
        </h2>

        <div className="app__about-body">
          <div className="app__about-img">
            <img src={images.html} />
          </div>

          <div className="app__about-content">
            <div className="app__about-txt">
              <p className="bold-text">
                I wish to say good things right now at this section, but since
                this is still a development environment, let's use this to hold
                the containers first.
                <br /> <br />I wish to say good things right now at this
                section, but since this is still a development environment,
                let's use this to hold the containers first.
              </p>
            </div>
            <div>
              <h3 className="bold-text">I am a ...</h3>
            </div>
            <div className="app__profiles">
              <div className="app__profiles-txt"></div>
              {abouts.map((about) => (
                <div className="app__profiles-item" key={about.title}>
                  <img src={about.image} alt={about.title} />
                  <h2 className="bold-text">{about.title}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
