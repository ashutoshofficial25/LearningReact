import React from "react";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#2ab062",
      }}
    >
      <h1>Theme Toggler</h1>
      <ThemeToggler />
    </div>
  );
};

export default Header;
