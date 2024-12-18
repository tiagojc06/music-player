import { React, useEffect, useState } from "react";
import Button from "./Button";
import titleLogo from "../img/header/80s-chip-tunes.gif";
import languageButtonImg from "../img/header/buttons/language-button.png";
import languageButtonPressedImg from "../img/header/buttons/language-button-pressed.png";
import backgroundButtonImg from "../img/header/buttons/background-button.png";
import backgroundButtonPressedImg from "../img/header/buttons/background-button-pressed.png";
import backButtonImg from "../img/header/buttons/back-button.png";
import backButtonPressedImg from "../img/header/buttons/back-button-pressed.png";
import nextButtonImg from "../img/header/buttons/next-button.png";
import nextButtonPressedImg from "../img/header/buttons/next-button-pressed.png";
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

  const [isTitlePressed, setIsTitlePressed] = useState(false);
  const [isLanguageDropdownVisible, setIsLanguageDropdownVisible] = useState(false);
  const [isBackgroundDropdownVisible, setIsBackgroundDropdownVisible] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
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
    if (savedImgIndex) {
      setImgIndex(savedImgIndex);
      setSelectedImgIndex(savedImgIndex);
    }

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
    setSelectedImgIndex(imgIndex);
  };
  
  return (
    <header>
      <div className="title-section">
        <h1 onMouseDown={() => setIsTitlePressed(true)} onMouseUp={() => setIsTitlePressed(false)}>{isTitlePressed ? "pixel art music player" : "pxamp"}</h1>
        <img className="title-logo" src={titleLogo} alt="Title Logo" />
      </div>
      <div className="controls-section">
        <div className="control-section">
          <Button
            handleClick={() => handleVisibility("Language")}
            imgClassName="control-section-button-img"
            imgSrc={languageButtonImg}
            altImgSrc={languageButtonPressedImg}
            imgAlt={"Language Button"}
          />
          <ul className={`dropdown language-dropdown ${isLanguageDropdownVisible ? "visible" : ""}`.trimEnd()}>
            <li className="language-dropdown-option" onClick={() => handleLanguage("english")}>{language === "english" ? "English" : "Inglés"}</li>
            <li className="language-dropdown-option" onClick={() => handleLanguage("spanish")}>{language === "english" ? "Spanish" : "Español"}</li>
          </ul>
        </div>
        <div className="control-section">
          <Button 
            handleClick={() => handleVisibility("Background")}
            imgClassName="control-section-button-img"
            imgSrc={backgroundButtonImg}
            altImgSrc={backgroundButtonPressedImg}
            imgAlt={"Background Button"}
          />
          <div className={`dropdown background-dropdown ${isBackgroundDropdownVisible ? "visible" : ""}`.trimEnd()}>
            <div className="background-dropdown-main-section">
              <Button 
                handleClick={handleClickBackButton}
                imgClassName="background-dropdown-button-img"
                imgSrc={backButtonImg}
                altImgSrc={backButtonPressedImg}
                imgAlt={"Back Button"}
              />
              <div className="background-dropdown-img-container">
                {/* No uso require() ya que las imagenes se encuentran en la carpeta public */}
                <img className="background-dropdown-img" src={`/img/backgrounds/${backgroundImgNames[imgIndex]}`} alt="Background selected" />
                <div className={`background-dropdown-img-overlay ${selectedImgIndex === imgIndex ? "visible" : ""}`.trimEnd()}><span>{language === "english" ? "Selected" : "Seleccionado"}</span></div>
              </div>
              <Button 
                handleClick={handleClickNextButton}
                imgClassName="background-dropdown-button-img"
                imgSrc={nextButtonImg}
                altImgSrc={nextButtonPressedImg}
                imgAlt={"Next Button"}
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