import "./App.css";

import { useState } from "react";

function App() {
	const [buttonColor, setColor] = useState("red");
	const texChange = buttonColor === "red" ? "blue" : "red";
	const [disabled, setDisabled] = useState(false);

	return (
		<div>
			<button
				style={{ backgroundColor: buttonColor, color: "white" }}
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
				onChange={() => setColor(disabled === false ? "grey" : "red")}
			/>
			<label htmlFor="chekBoxToDisableButton">
				click to disable the button
			</label>

			<h3>The name is TS Dinesh Jai</h3>
		</div>
	);
}

export default App;
