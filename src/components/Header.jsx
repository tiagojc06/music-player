import { React, useState } from "react";
import Button from "./Button";
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

  const [isLanguageDropdownVisible, setIsLanguageDropdownVisible] = useState(false);
  const [isBackgroundDropdownVisible, setIsBackgroundDropdownVisible] = useState(false);

  const handleVisibility = type => {
    if (type === "Language") {
      setIsLanguageDropdownVisible(!isLanguageDropdownVisible);
      if (isBackgroundDropdownVisible) setIsBackgroundDropdownVisible(false);
    } else {
      setIsBackgroundDropdownVisible(!isBackgroundDropdownVisible);
      if (isLanguageDropdownVisible) setIsLanguageDropdownVisible(false);
    }
  };
  
  return (
    <header>
      <div className="title-section">
        <h1>pxamp</h1>
        <img className="title-logo" src={titleLogo} alt="Title Logo" />
      </div>
      <div className="controls-section">
        <div className="control-section">
          <Button
            handleClick={() => handleVisibility("Language")}
            iconClassName="control-section-icon"
            iconSrc={languageIcon}
            altIconSrc={languageIconPressed}
            iconAlt={"Language Icon"}
          />
          <div className={`dropdown language-dropdown ${isLanguageDropdownVisible ? "visible" : ""}`.trimEnd()}>
            <div className="language-dropdown-option">English</div>
            <div className="language-dropdown-option">Spanish</div>
          </div>
        </div>
        <div className="control-section">
          <Button 
            handleClick={() => handleVisibility("Background")}
            iconClassName="control-section-icon"
            iconSrc={backgroundIcon}
            altIconSrc={backgroundIconPressed}
            iconAlt={"Background Icon"}
          />
          <div className={`dropdown background-dropdown ${isBackgroundDropdownVisible ? "visible" : ""}`.trimEnd()}>
            <div className="background-dropdown-main-section">
              <Button 
                handleClick={() => console.log("Back Button Clicked")}
                iconClassName="background-dropdown-icon"
                iconSrc={backIcon}
                altIconSrc={backIconPressed}
                iconAlt={"Back Icon"}
              />
              <img className="background-dropdown-img" src={require("../img/backgrounds/calme-sous-la-dent.png")} alt="Background selected" />
              <Button 
                handleClick={() => console.log("Next Button Clicked")}
                iconClassName="background-dropdown-icon"
                iconSrc={nextIcon}
                altIconSrc={nextIconPressed}
                iconAlt={"Next Icon"}
              />
            </div>
            <button className="select-background-button">Select</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;