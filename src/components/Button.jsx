import { React, useState } from "react";
import "../style-sheets/Button.css";

function Button({ handleClick, iconClassName, iconSrc, altIconSrc, iconAlt }) {

	const [buttonPressed, setButtonPressed] = useState(false);

  return (
		<button className="button" onClick={handleClick} onMouseDown={() => setButtonPressed(true)} onMouseUp={() => setButtonPressed(false)}>
			<img className={iconClassName} src={buttonPressed ? altIconSrc : iconSrc} alt={iconAlt} />
		</button>
  );
}

export default Button;