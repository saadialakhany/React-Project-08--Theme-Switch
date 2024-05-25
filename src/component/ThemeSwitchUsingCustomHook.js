import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import "./theme.css";

const ThemeSwitchUsingCustomHook = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  }
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <h1>Hello World!</h1>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default ThemeSwitchUsingCustomHook;
