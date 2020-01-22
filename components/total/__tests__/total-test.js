import React from "react";
import {render} from "@testing-library/react-native";
import HeaderTotal from "../header-total";
import {create} from "react-test-renderer";

describe('<HeaderTotal/>', () => {
	it('match snapshot', () => {
		const tree = create(<HeaderTotal value={2000}/>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('render HeaderTotal with valid number', () => {
		const {getByText} = render(<HeaderTotal value={2000}/>);
		expect(getByText('R$ 2000')).toBeTruthy();
	});

	it('render HeaderTotal with invalid number', () => {
		const {getByText} = render(<HeaderTotal value={"298,87"}/>);
		expect(getByText('R$ 0')).toBeTruthy();
	});

	it('render HeaderTotal with invalid number', () => {
		const {getByText} = render(<HeaderTotal value={"abv298,87"}/>);
		expect(getByText('R$ 0')).toBeTruthy();
	});
});
