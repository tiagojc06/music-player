import React from "react";
import titleLogo from "../img/icons/80s-chip-tunes.gif";
import languageIcon from "../img/icons/language-icon.png";
import languageIconPressed from "../img/icons/language-icon-pressed.png";
import backgroundIcon from "../img/icons/background-icon.png";
import backgroundIconPressed from "../img/icons/background-icon-pressed.png";
import backIcon from "../img/icons/back-icon.png";
import backIconPressed from "../img/icons/back-icon-pressed.png";
import nextIcon from "../img/icons/next-icon.png";
import nextIconPressed from "../img/icons/next-icon-pressed.png";
import "../style-sheets/Header.css";

function Header() {
  return (
    <header>
      <div className="title-section">
        <h1>pxamp</h1>
        <img className="title-logo" src={titleLogo} alt="Title Logo" />
      </div>
      <div className="controls-section">
        <button className="control-button language-button">
          <img className="icon language-icon" src={languageIcon} alt="Language Icon" />
        </button>
        <button className="control-button background-button">
          <img className="icon background-icon" src={backgroundIcon} alt="Background Icon" />
        </button>
      </div>
    </header>   
  );
}

export default Header;