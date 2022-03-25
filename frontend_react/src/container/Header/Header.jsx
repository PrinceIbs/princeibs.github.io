import React from "react";

import {images} from "../../constants"
import "./Header.scss";

const Header = () => {
  return (
    <div className="app__header app__flex">
      <div className="app__header-info">
        <div className="app__header-badge">
          <div className="badge-card app__flex">
            <span>👋</span>
            <div style={{marginLeft: "17px"}}>
              <p className="p_text">Meet</p>
              <h1 className="head-text">IBS</h1>
            </div>
          </div>
          
          <div className="tag-card app__flex">
            <p className="p-text">Software Engineer</p>
          </div>
        </div>
      </div>

      <div className="app__header-img">
        <img src={images.sass} alt="profile-img"/>
        {/* <img /> */}
      </div>

      <div className="app__header-skills">
        {[images.react, images.javascript, images.python].map((image, index) => (
          <div className="skill-circle app__flex" key={index}>
            <img src={image} alt="skill-image"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
