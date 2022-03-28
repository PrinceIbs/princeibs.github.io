import React, { useState } from "react";

import {
  About,
  Blog,
  Contact,
  Footer,
  Header,
  Navbar,
  Skills,
  Testimonial,
  Projects,
} from "./container";
import "./App.scss";

const App = () => {
  const [themeMode, setThemeMode] = useState("dark");
  return (
    <div className="app">
      <Navbar
        themeMode={themeMode === "dark" ? "dark-mode-1" : ""}
        setThemeMode={setThemeMode}
        theme={themeMode}
      />
      <Header themeMode={themeMode === "dark" ? "dark-mode-2" : ""} />
      <About themeMode={themeMode === "dark" ? "dark-mode-1" : ""} />
      <Skills themeMode={themeMode === "dark" ? "dark-mode-2" : ""} />
      <Projects themeMode={themeMode === "dark" ? "dark-mode-1" : ""} />
      <Blog themeMode={themeMode === "dark" ? "dark-mode-2" : ""} />
      <Contact themeMode={themeMode === "dark" ? "dark-mode-1" : ""} />      
      <Footer themeMode={themeMode === "dark" ? "dark-mode-2" : ""} />
    </div>
  );
};

export default App;
