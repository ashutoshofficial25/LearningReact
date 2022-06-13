import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../color";
import ThemeToggler from "./ThemeToggler";

const HeroSection = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center",
      }}
    >
      <h1> Context API Theme Toggler</h1>
      <p> this is a nice paragraph</p>
      <button
        style={{
          backgroundColor: "#2cd47a",
          padding: "10px 20px",
          color: "#fff",
          border: `${currentTheme.border}`,
          cursor: "pointer",
        }}
        onClick={() => setThemeMode(themeMode === "light" ? "dark" : "light")}
      >
        Click Me
      </button>
    </div>
  );
};

export default HeroSection;
