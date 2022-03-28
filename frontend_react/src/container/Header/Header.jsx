import React from "react";

import { images } from "../../constants";
import "./Header.scss";

const Header = (props) => {
  return (
    <div id="home">
      <div className={`app__header ${props.themeMode}`}>
        <div className="app__header-info">
          <div className="app__header-info-content">
            <h1>
              meet <br />
              <span>Suleiman Ibrahim</span>
            </h1>
            <h2>a software engineer</h2>
            <p>
              this is a simple dummy text that will be replaced later with
              something meaningful. It's purpose and life is to occupy this
              container and space while the original text arrives
            </p>
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
