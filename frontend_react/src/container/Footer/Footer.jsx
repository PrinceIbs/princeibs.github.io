import React from "react";

import "./Footer.scss";
const Footer = (props) => {
  return (
    <div className="app__footer" onClick={() => props.setIsNavOpen(false)}>
      <div className="app__footer-container">
        <p className="bold-text">
          ©2022 <span>Suleiman Ibrahim</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
