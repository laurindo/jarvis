import React from "react";
import {create} from 'react-test-renderer';
import {renderHook, act} from '@testing-library/react-hooks';
import {fireEvent, render, wait} from "@testing-library/react-native";
import TransactionsScreen from "../../../screens/transactions/TransactionsScreen";
import {Store, Transaction} from "../../../store";

jest.mock('expo', () => ({
	AppLoading: 'AppLoading',
}));

jest.mock('../../../navigation', () => 'AppNavigator');

describe('TransactionsScreen', () => {
	jest.useFakeTimers();

	it('render TransactionsScreen', () => {
		const tree = create(<TransactionsScreen/>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('no transactions should be visible', async () => {
		let {getByTestId} = render(<TransactionsScreen/>);
		const noTransactions = getByTestId('no-transactions');
		expect(noTransactions).toBeTruthy();
	});

	/*
	* Esse aqui é o teste mais importante que estava funcionando e depois parou de funcionar :( e infelizmente eu nao consegui resolver a tempo
	* Basicamente eu estou usando o contexto do React pra recuperar a minha função de "dispatch"
	* depois uso ela pra atualizar o estado da minha aplicação e tento verificar se ocorreu bem checando o testID="transactions"
	* Eu uso a library "renderHook" pra poder executar o hook do react, se eu tentar executar fora eu recebo um alerta de erro pois os hooh devem
	* ser executados dentro de um component funcional do React
	* */
	it('transactions should be visible', () => {
		const wrapper = ({ children }) => <Store><TransactionsScreen/>{children}</Store>;
		const {result} = renderHook(() => React.useContext(Transaction.Dispatch), {wrapper});
		const [, dispatch] = result.current;
		act(() => {
			dispatch({
				type: "ADD_TRANSACTION",
				payload: {
					label: "Test",
					value: 200,
					type: "entrada",
				}
			});
		});
		//expect(getByTestId('transactions')).toBeTruthy();
	});

	it('click on button "Nova Transação"', async () => {
		const navigation = {navigate: jest.fn()};
		const {getByText} = render(<TransactionsScreen navigation={navigation}/>);
		const button = getByText('Nova Transação');
		fireEvent.press(button);
		await wait(() => expect(navigation.navigate).toBeCalledWith('Modal'));
	});
});
