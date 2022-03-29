import React, { useState, useEffect } from "react";

import { client, urlFor } from "../..//client";
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
            <img src={images.html} alt="about-img" />
          </div>

          <div className="app__about-content">
            <div className="app__about-txt">
              <p className="bold-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
                fugit assumenda illum eveniet ratione non expedita accusamus
                numquam animi sapiente!
                <br /> <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
                accusamus pariatur molestiae laboriosam necessitatibus quo amet
                eius non sapiente labore.
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
