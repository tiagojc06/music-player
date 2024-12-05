import { React, useEffect, useState } from "react";
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

const backgroundImgNames = [
  "calme-sous-la-dent.png", 
  "lakeside-chill.gif", 
  "secret-beach.png", 
  "sunny-tori.png", 
  "sunrise-mirage.png", 
  "sunset-mirage.png"
];

function Header() {

  const [isLanguageDropdownVisible, setIsLanguageDropdownVisible] = useState(false);
  const [isBackgroundDropdownVisible, setIsBackgroundDropdownVisible] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [language, setLanguage] = useState("english");

  const handleVisibility = type => {
    if (type === "Language") {
      setIsLanguageDropdownVisible(!isLanguageDropdownVisible);
      if (isBackgroundDropdownVisible) setIsBackgroundDropdownVisible(false);
    } else {
      setIsBackgroundDropdownVisible(!isBackgroundDropdownVisible);
      if (isLanguageDropdownVisible) setIsLanguageDropdownVisible(false);
    }
  };

  const handleClickBackButton = () => {
    setImgIndex((prevImgIndex) => prevImgIndex === 0 ? backgroundImgNames.length - 1 : prevImgIndex - 1);
  };

  const handleClickNextButton = () => {
    setImgIndex((prevImgIndex) => prevImgIndex === backgroundImgNames.length - 1 ? 0 : prevImgIndex + 1);
  };

  // Este callback se ejecuta al renderizarse el componente.
  useEffect (() => {
    const savedLanguage = localStorage.getItem("language");
    const savedBackgroundUrl = localStorage.getItem("background-url");
    const savedImgIndex = parseInt(localStorage.getItem("img-index"));

    if (savedLanguage) setLanguage(savedLanguage);
    if (savedBackgroundUrl) document.body.style.backgroundImage = `url("${savedBackgroundUrl}")`;
    else document.body.style.backgroundImage = `url("/img/backgrounds/${backgroundImgNames[0]}")`;
    if (savedImgIndex) setImgIndex(savedImgIndex);

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  const handleLanguage = lang => {
    localStorage.setItem("language", lang);
    setLanguage(lang);
  };

  const handleBackgroundImg = () => {
    const newBackgroundUrl = `/img/backgrounds/${backgroundImgNames[imgIndex]}`;
    localStorage.setItem("background-url", newBackgroundUrl);
    localStorage.setItem("img-index", imgIndex);
    document.body.style.backgroundImage = `url("${localStorage.getItem("background-url")}")`;
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
          <ul className={`dropdown language-dropdown ${isLanguageDropdownVisible ? "visible" : ""}`.trimEnd()}>
            <li className="language-dropdown-option" onClick={() => handleLanguage("english")}>{language === "english" ? "English" : "Inglés"}</li>
            <li className="language-dropdown-option" onClick={() => handleLanguage("spanish")}>{language === "english" ? "Spanish" : "Español"}</li>
          </ul>
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
                handleClick={handleClickBackButton}
                iconClassName="background-dropdown-icon"
                iconSrc={backIcon}
                altIconSrc={backIconPressed}
                iconAlt={"Back Icon"}
              />
              <img className="background-dropdown-img" src={require(`../img/backgrounds/${backgroundImgNames[imgIndex]}`)} alt="Background selected" />
              <Button 
                handleClick={handleClickNextButton}
                iconClassName="background-dropdown-icon"
                iconSrc={nextIcon}
                altIconSrc={nextIconPressed}
                iconAlt={"Next Icon"}
              />
            </div>
            <button className="select-background-button" onClick={handleBackgroundImg}>{language === "english" ? "Select" : "Seleccionar"}</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;