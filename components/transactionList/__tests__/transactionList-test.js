import React from "react";
import {act, create} from 'react-test-renderer';
import {render, wait, fireEvent} from "@testing-library/react-native";
import TransactionsScreen from "../../../screens/transactions/TransactionsScreen";

jest.mock('expo', () => ({
	AppLoading: 'AppLoading',
}));

describe('TransactionsScreen', () => {
	jest.useFakeTimers();

	it('render TransactionsScreen', () => {
		const tree = create(<TransactionsScreen/>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('transactions list should be visible', async () => {
		let {debug , getByTestId} = render(<TransactionsScreen/>);
		const loadingMounted = getByTestId('loading');
		jest.runAllTimers();
		expect(loadingMounted).toBeTruthy();
		// await wait(() => expect(getByTestId('transactions')).toBeTruthy())
	});

	/*it('click on button', async () => {
		const {queryByTestId, getByTestId, getByText} = render(<TransactionsScreen/>);
		const button = getByText('Nova Transação');
		fireEvent.press(button);
		await wait(() => expect(queryByTestId('transactions')).toBeTruthy())
	});*/
});
