import React from "react";
import "./styles.css";

function Header({ appName }) {
  return (
    <header className="header">
      <h1>{appName}</h1>
      <p>Descubre nuevas canciones</p>
    </header>
  );
}

export default Header;