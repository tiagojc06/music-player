import { React, useState } from "react";
import "../style-sheets/Button.css";

function Button({ handleClick, imgClassName, imgSrc, altImgSrc, imgAlt }) {

	const [buttonPressed, setButtonPressed] = useState(false);

  return (
		<button className="icon-button" onClick={handleClick} onMouseDown={() => setButtonPressed(true)} onMouseUp={() => setButtonPressed(false)}>
			<img className={imgClassName} src={buttonPressed ? altImgSrc : imgSrc} alt={imgAlt} />
		</button>
  );
}

export default Button;