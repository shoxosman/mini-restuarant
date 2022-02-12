import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeBotton() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const handleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };
  return (
    <button
      onClick={handleTheme}
    ><img className= "h-8 w-8" src="https://pic.onlinewebfonts.com/svg/img_540147.png"/></button>
  );
}

export default ThemeBotton;