import React, { useEffect } from "react";
import { HiMenu, HiOutlineMoon, HiOutlineSun, HiX } from "react-icons/hi";

import "./Navbar.scss";
const Navbar = (props) => {
  useEffect(() => {
    localStorage.getItem("themeMode");
  }, []);
  const handleToggleTheme = (mode) => {
    props.setThemeMode(mode);
    localStorage.setItem("themeMode", mode);
  };
  return (
    <nav className={`app__navbar ${props.themeMode}`}>
      <a href="#home">
        <div className="app__navbar-logo">
          <p>
            {">~/ibs"}
            <span>|</span>
          </p>
        </div>
      </a>

      <ul className="app__navbar-links">
        {["about", "skills", "projects", "blog", "contact"].map(
          (link, index) => (
            <li className="app__flex p-text" key={index}>
              <a href={`#${link}`}>{link}</a>
            </li>
          )
        )}
      </ul>

      <div className="app__navbar-extra">
        <div className="app__navbar-toggle-theme">
          {props.theme === "light" && (
            <div
              className="app_navbar-toggle-off"
              onClick={() => handleToggleTheme("dark")}
            >
              <HiOutlineMoon />
            </div>
          )}

          {props.theme === "dark" && (
            <div
              className="app_navbar-toggle-on"
              onClick={() => handleToggleTheme("light")}
            >
              <HiOutlineSun />
            </div>
          )}
        </div>

        <div className="app__navbar-menu">
          <HiMenu onClick={() => props.setIsNavOpen(true)} />
          {props.isNavOpen && (
            <div>
              <HiX onClick={() => props.setIsNavOpen(false)} />
              <ul>
                {["about", "skills", "projects", "blog", "contact"].map(
                  (link) => (
                    <li key={link} onClick={() => props.setIsNavOpen(false)}>
                      <a href={`#${link}`}>{link}</a>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
