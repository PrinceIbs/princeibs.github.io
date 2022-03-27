import React, { useState } from "react";

import {
  About,
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
      <Contact themeMode={themeMode === "dark" ? "dark-mode-2" : ""} />
      <Footer themeMode={themeMode === "dark" ? "dark-mode-1" : ""} />
    </div>
  );
};

export default App;
