import "./App.css";

import { useState } from "react";

function App() {
	const [buttonColor, setColor] = useState("red");
	const texChange = buttonColor === "red" ? "blue" : "red";
	return (
		<div>
			<button
				style={{ backgroundColor: buttonColor, color: "white" }}
				onClick={() => setColor(texChange)}
			>
				Change to {texChange}
			</button>
		</div>
	);
}

export default App;
