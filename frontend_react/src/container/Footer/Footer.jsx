import React from "react";

import "./Footer.scss";
const Footer = (props) => {
  return (
    <div className={`app__footer ${props.themeMode}`} onClick={() => props.setIsNavOpen(false)}>
      <div className="app__footer-container">
        <p className="bold-text">
          ©{(new Date()).getFullYear()}<span>Suleiman Ibrahim</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
