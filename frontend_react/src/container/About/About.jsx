import React, { useState, useEffect } from "react";

import { client, urlFor } from "../../client";
import { images } from "../../constants";
import "./About.scss";

const About = (props) => {
  const [abouts, setAbouts] = useState([]);
  const [content, setContent] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    const cQuery = '*[_type == "content"]';

    client.fetch(query).then((data) => setAbouts(data));
    client.fetch(cQuery).then(data => setContent(data[0]));
  }, []);

  return (
    <div id="about" onClick={() => props.setIsNavOpen(false)}>
      <div className={`app__about ${props.themeMode}`}>
        <h2 className="head-text color-text">
          <p>About Me</p>
        </h2>

        <div className="app__about-body">
          <div className="app__about-img">
            <img src={images.aboutImg} alt="about-img" />
          </div>

          <div className="app__about-content">
            <div className="app__about-txt">
              <p className="">
                {content.aboutText1}
                <br /> <br />
                {content.aboutText2}
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
