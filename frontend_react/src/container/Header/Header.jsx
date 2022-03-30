import React, {useState, useEffect} from "react";

import {client} from "../../client"
import "./Header.scss";
import {images} from "../../constants"

const Header = (props) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const cQuery = '*[_type == "content"]';

    client.fetch(cQuery).then((data) => setContent(data[0]));
  }, []);
  return (
    <div id="home" onClick={() => props.setIsNavOpen(false)}>
      <div className={`app__header ${props.themeMode}`}>
        <div className="app__header-info">
          <div className="app__header-info-content">
            <h1>
              meet <br />
              <span>Suleiman Ibrahim</span>
            </h1>
            <h2>
              <span>software developer</span>
            </h2>
            <div className="bg-img"><img src={images.devto} /></div>
            <p>{content.headerText}</p>
            <div className="app__header-info-buttons">
              <a href="#contact" style={{ textDecoration: "none" }}>
                <div className="contact-btn app__flex">contact me</div>
              </a>
              <div className="download-btn app__flex">download resume</div>
            </div>
          </div>
          <div className="app__header-info-misc">
            <div className="tags app__flex">
              <div>help others</div>
              <div>add value</div>
              <div>connect</div>
              <div>keep growing</div>
            </div>
            <div className="circles">
              <div className="app__flex">h</div>
              <div className="app__flex">a</div>
              <div className="app__flex">c</div>
              <div className="app__flex">k</div>
            </div>
          </div>          
        </div>
        {/* <div className="bg-img">
          <img src={images.cover} />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
