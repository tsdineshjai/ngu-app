import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { camelCaseLettersToSpaces } from "./App";

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

test("inital conditions", () => {
	render(<App />);
	const colorButton = screen.getByRole("button", { name: "Change to blue" });
	const checkBoxRef = screen.getByRole("checkbox", {
		name: "click to disable the button",
	});
	// checking the button is not disabled
	expect(colorButton).toBeEnabled();
	//checking the checkbox is not enabled
	expect(checkBoxRef).not.toBeChecked();
});

test("when the checkbox is enabled", () => {
	render(<App />);
	const colorButton = screen.getByRole("button", { name: "Change to blue" });
	const checkBoxRef = screen.getByRole("checkbox", {
		name: "click to disable the button",
	});
	fireEvent.click(checkBoxRef);
	//expect the checkbox to be enabled.
	expect(checkBoxRef).toBeChecked();
	//expect the colorButton to be disabled
	expect(colorButton).toBeDisabled();

	fireEvent.click(checkBoxRef);
	expect(checkBoxRef).not.toBeChecked();
	expect(colorButton).toBeEnabled();
});

//second unit test for

test("when the button is disabled it should turn grey in background", () => {
	render(<App />);
	//finding elements

	const colorButton = screen.getByRole("button", { name: "Change to blue" });
	const checkbox = screen.getByRole("checkbox", {
		name: "click to disable the button",
	});

	fireEvent.click(checkbox);
	expect(colorButton).toHaveStyle({ backgroundColor: "grey" });

	fireEvent.click(checkbox);
	expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("button when clicked changes to blue , then disable by clicking checkbox, enabling the checkbox reverts to blue", () => {
	render(<App />);
	const colorButton = screen.getByRole("button", { name: "Change to blue" });
	const checkbox = screen.getByRole("checkbox", {
		name: "click to disable the button",
	});

	//change to blue
	fireEvent.click(colorButton);
	expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

	//disabling the button
	fireEvent.click(checkbox);
	expect(colorButton).toHaveStyle({ backgroundColor: "grey" });

	//enablign the button
	fireEvent.click(checkbox);
	expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});

//describe function is to group more test cases
//we can write more global tests ie test() function

describe("spaces before camelcase Letters", () => {
	test("works for no inner capital letters", () => {
		expect(camelCaseLettersToSpaces("Red")).toBe("Red");
	});

	test("works for one inner capital letter", () => {
		expect(camelCaseLettersToSpaces("MidnightBlue")).toBe("Midnight Blue");
	});

	test("works for more than one inner capital letter", () => {
		expect(camelCaseLettersToSpaces("MediumVioletRed")).toBe(
			"Medium Violet Red"
		);
	});
});
