import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
	render(<App />); //find a element that is a button and has a text "Change to blue"
	const colorButton = screen.getByRole("button", { name: "Change to blue" });
	//expect the background color is red
	expect(colorButton).toHaveStyle({ backgroundColor: "red" });
	//interactin with the element
	fireEvent.click(colorButton);
	//expect the background color to be blue
	expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
	//expect the textContent to be changed to "change to red "
	expect(colorButton.textContent).toBe("Change to red");
});
