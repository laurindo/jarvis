import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
// Store
import {Transaction} from "../../store";
// Components
import Container from "../../components/container";
import TransactionList from "../../components/transactionList";
import Button from "../../components/button";

import {headerConfig} from "../../navigation/config";
import {SCALE_8} from "../../styles/spacing";
import {sortString} from "../../utils/sort";
import {PRIMARY} from "../../styles/colors";
import {H3} from "../../components/typography";
import Total from "../../components/total";
import {getTotal} from "../../utils/number";

// Mock transactions (apenas pra testar a listagem)
const TRANSACTIONS = [{
	label: "notebook",
	value: 2000.98,
	type: "entrada",
	createdAt: "2020-01-19T00:59:14.495Z"
}, {
	label: "t2",
	value: 150.20,
	type: "saida",
	createdAt: "2019-02-05T00:59:14.495Z"
}, {
	label: "t2",
	value: 150.20,
	type: "entrada",
	createdAt: "2019-09-19T00:59:14.495Z"
}, {
	label: "t2",
	value: 150.20,
	type: "entrada",
	createdAt: "2020-01-19T00:59:14.495Z"
}, {
	label: "t2",
	value: 150.20,
	type: "entrada",
	createdAt: "2017-01-19T00:59:14.495Z"
}, {
	label: "t2",
	value: 150.20,
	type: "saida",
	createdAt: "2019-01-19T00:59:14.495Z"
}, {
	label: "t2",
	value: 150.20,
	type: "entrada",
	createdAt: "2018-01-19T00:59:14.495Z"
}];

export default function TransactionsScreen() {

	const transactions = React.useContext(Transaction.State);
	const dispatch = React.useContext(Transaction.Dispatch);

	useEffect(() => {
		setTimeout(() => {
			dispatch({
				type: "ADD_ENTRADA",
				payload: sortString(TRANSACTIONS, 'createdAt', 'desc')
			});
		}, 5000);
	}, []);

	return (
		<Container style={styles.container}>
			<Total value={transactions.length && getTotal(transactions.map(t => t.value))}/>
			<View style={styles.scroll}>
				{transactions.length ? (
					<ScrollView testID="transactions">
						{transactions.map((transaction, index) => <TransactionList key={index} value={transaction}/>)}
					</ScrollView>
				) : <Text testID="loading">loading...</Text>}
			</View>
			<View>
				<Button title="Nova Transação" onPress={() => alert("nova transação")}/>
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		justifyContent: "space-between",
		backgroundColor: PRIMARY
	},
	scroll: {
		flex: 1,
		paddingBottom: SCALE_8
	},
	total: {
		flexDirection: "row",
		justifyContent: "space-between"
	}
});

TransactionsScreen.navigationOptions = headerConfig('Transações');
