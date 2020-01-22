// Resources
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
// Store
import {Transaction} from "../../store";
import {actions} from "../../store/transactions.store";
// Components
import Container from "../../components/container";
import {H2} from "../../components/typography";
import TransactionList from "../../components/transactionList";
import IncomeOutcome from "../../components/incomeOutcome";
import {filterTransactions} from "../../utils/filter-transactions";
import {getTotal} from "../../utils/number";
import {sortString} from "../../utils/sort";
import {SCALE_36} from "../../styles/spacing";
import storage from "../../utils/storage";
import EmptyTransaction from "../../components/transactionList/empty-transaction";

export default function HomeScreen() {

	const transactions = React.useContext(Transaction.State);
	const dispatch = React.useContext(Transaction.Dispatch);
	const incomeTransactions = filterTransactions(transactions, 'type', 'entrada').map(t => t.value);
	const outcomeTransactions = filterTransactions(transactions, 'type', 'saida').map(t => t.value);
	const lastTransactions = sortString(transactions, 'createdAt', 'desc').slice(0, 5);

	React.useEffect(() => {
		async function fetchData() {
			try {
				const transactions = await storage.getData('TRANSACTIONS');
				transactions && dispatch({
					type: actions.MERGE_TRANSACTION,
					payload: transactions
				});
			} catch (e) {
			}
		}
		fetchData();
	}, []);

	return (
		<Container style={styles.container}>
			<IncomeOutcome title="Entrada" value={getTotal(incomeTransactions)} type="entrada"/>
			<IncomeOutcome title="Saída" value={getTotal(outcomeTransactions)} type="saida"/>
			<H2>Últimas Transações</H2>
			<ScrollView>
				<View>
					{lastTransactions.map((transaction, index) => <TransactionList key={index} value={transaction}/>)}
					{!lastTransactions.length && <EmptyTransaction id="no-transactions" message="Você não possui transações"/>}
				</View>
			</ScrollView>
		</Container>
	);
}

HomeScreen.navigationOptions = {
	header: null,
};

const styles = StyleSheet.create({
	container: {
		paddingTop: SCALE_36,
	},
	lastTransactions: {
		flexDirection: "row",
		justifyContent: "space-between"
	},
});
