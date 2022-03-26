import React from "react";
import { HiMenu, HiX } from "react-icons/hi";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <p>{">~/ibs"}<span>|</span></p>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "skills", "projects", "contact"].map((link, index) => (
          <li className="app__flex p-text" key={index}>
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenu onClick={() => setIsNavOpen(true)} />
        {isNavOpen && (
          <div>
            <HiX onClick={() => setIsNavOpen(false)} />
            <ul>
              {["home", "about", "skills", "projects", "contact"].map((link) => (
                <li key={link} onClick={() => setIsNavOpen(false)}>
                  <a href={`#${link}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
