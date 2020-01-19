import React from "react";
import {render, wait, fireEvent} from "@testing-library/react-native";
import Button from "../index";

describe('Button', () => {
	it('render Button', () => {
		const {getByText} = render(<Button title="Click on me" />);
		expect(getByText('Click on me')).toBeTruthy();
	});

	it('click on Button', async () => {
		let isClicked = false;
		const {getByText} = render(<Button title="Click on me" onPress={() => isClicked = true} />);
		const button = getByText('Click on me');
		fireEvent.press(button);
		await wait(() => expect(isClicked).toBe(true));
	});
});
