import logo from "./logo.svg";
import "./App.css";
import ThemeSwitch from "./component/ThemeSwitch";
import ThemeSwitchUsingCustomHook from "./component/ThemeSwitchUsingCustomHook";

function App() {
  return (
    <div className="App">
      {/* <ThemeSwitch /> */}
      <ThemeSwitchUsingCustomHook />
    </div>
  );
}

export default App;
