import React from "react";
import { HiMenu, HiMenuAlt1, HiMenuAlt4, HiX } from "react-icons/hi";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "skills", "work", "contact"].map((link) => (
          <li className="app__flex p-text">
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
              {["home", "about", "skills", "work", "contact"].map((link) => (
                <li key={link}>
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
