import React, { useState } from "react";
import "./style.css";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div className={`container ${theme}`}>
      <h1>Hello World!</h1>
      <button className="btn" onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  );
};

export default ThemeSwitch;
