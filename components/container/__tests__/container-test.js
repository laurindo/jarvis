import React from "react";
import {render} from "@testing-library/react-native";
import Container from "../index";
import {H1} from "../../typography";

describe('Container', () => {
	it('render Container', () => {
		const {getByText} = render(<Container><H1>test</H1></Container>);
		expect(getByText('test')).toBeTruthy();
	});
});
