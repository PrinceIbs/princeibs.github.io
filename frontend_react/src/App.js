import React, { useState } from "react";
import appContent from "./content/appContent";

import {
  About,
  Blog,
  Contact,
  Footer,
  Header,
  Navbar,
  Skills,
  Projects,
} from "./container";
import "./App.scss";

const App = () => {
  let getThemeMode = localStorage.getItem("themeMode") ? localStorage.getItem("themeMode") : "dark";
  const [themeMode, setThemeMode] = useState(getThemeMode);
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  return (
    <div className="app">
      <Navbar
        themeMode={themeMode === "dark" ? "dark-mode-1" : ""}
        setThemeMode={setThemeMode}
        theme={themeMode}
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
      />
      <Header
        themeMode={themeMode === "dark" ? "dark-mode-2" : ""}
        setIsNavOpen={setIsNavOpen}
      />
      <About
        themeMode={themeMode === "dark" ? "dark-mode-1" : ""}
        setIsNavOpen={setIsNavOpen}
      />
      <Skills
        themeMode={themeMode === "dark" ? "dark-mode-2" : ""}
        setIsNavOpen={setIsNavOpen}
      />
      <Projects
        themeMode={themeMode === "dark" ? "dark-mode-1" : ""}
        setIsNavOpen={setIsNavOpen}
      />
      <Blog
        themeMode={themeMode === "dark" ? "dark-mode-2" : ""}
        setIsNavOpen={setIsNavOpen}
      />
      <Contact
        themeMode={themeMode === "dark" ? "dark-mode-1" : ""}
        setIsNavOpen={setIsNavOpen}
      />
      <Footer
        themeMode={themeMode === "dark" ? "dark-mode-2" : ""}
        setIsNavOpen={setIsNavOpen}
      />
    </div>
  );
};

export default App;
