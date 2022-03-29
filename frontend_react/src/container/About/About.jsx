import React, {useState, useEffect} from "react";

import {client, urlFor} from "../..//client"
import { images } from "../../constants";
import "./About.scss";

const About = (props) => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <div id="about" onClick={() => props.setIsNavOpen(false)}>
      <div className={`app__about ${props.themeMode}`}>
        <h2 className="head-text color-text">
          <p>About Me</p>
        </h2>

        <div className="app__about-body">
          <div className="app__about-img">
            <img src={images.html} alt="about-img"/>
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
                  <img src={urlFor(about.imgUrl)} alt={about.title} />
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
