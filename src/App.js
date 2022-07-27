import "./App.css";

import { useState } from "react";

export function camelCaseLettersToSpaces(colorName) {
	return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
	const [buttonColor, setColor] = useState("red");
	const texChange = buttonColor === "red" ? "blue" : "red";
	const [disabled, setDisabled] = useState(false);
	debugger;
	return (
		<div>
			<button
				style={{
					backgroundColor: disabled ? "grey" : buttonColor,
					color: "white",
				}}
				onClick={() => setColor(texChange)}
				disabled={disabled}
			>
				Change to {texChange}
			</button>
			<input
				type="checkbox"
				name="checkbox"
				id="chekBoxToDisableButton"
				defaultChecked={disabled} // this is setting default checked property
				aria-checked={disabled} //this is for accessibility
				onClick={(e) => setDisabled(e.target.checked)} //e.target refers to input checkbox
				// e.target.checked will provide the checked boolean value.
			/>
			<label htmlFor="chekBoxToDisableButton">
				click to disable the button
			</label>
		</div>
	);
}

export default App;
