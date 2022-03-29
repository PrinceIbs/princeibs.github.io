import React from "react";

import "./Header.scss";

const Header = (props) => {
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
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
              magnam, voluptatem quae laboriosam tempore sapiente ipsa esse
              natus nostrum dicta cumque! Dolores neque sed minima praesentium
              ad autem commodi et.
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
