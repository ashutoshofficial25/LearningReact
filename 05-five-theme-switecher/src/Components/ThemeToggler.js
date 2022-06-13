import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
    >
      <span style={{ cursor: "pointer" }}>
        {" "}
        Theme : {themeMode === "light" ? "🌙" : "☀"}
      </span>
    </div>
  );
};

export default ThemeToggler;
