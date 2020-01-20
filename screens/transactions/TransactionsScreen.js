import React from 'react';
import {ScrollView, StyleSheet, View} from "react-native";
// Store
import {Transaction} from "../../store";
// Components
import Container from "../../components/container";
import TransactionList from "../../components/transactionList";
import Button from "../../components/button";
import HeaderTotal from "../../components/total/header-total";
import {headerConfig} from "../../navigation/config";
import {sortString} from "../../utils/sort";
import {getTotal} from "../../utils/number";
import storage from "../../utils/storage";
import {PRIMARY} from "../../styles/colors";
import {SCALE_8} from "../../styles/spacing";
import EmptyTransaction from "../../components/transactionList/empty-transaction";

export default function TransactionsScreen({navigation}) {
	const transactions = React.useContext(Transaction.State);
	const dispatch = React.useContext(Transaction.Dispatch);
	const displayTotal = () => getTotal(transactions.map(t => parseFloat(t.value)));

	React.useEffect(() => {
		async function fetchData() {
			try {
				const transactions = await storage.getData('TRANSACTIONS');
				transactions && dispatch({
					type: "MERGE_TRANSACTIONS",
					payload: transactions
				});
			} catch (e) {
			}
		}

		fetchData();
	}, []);

	return (
		<Container style={styles.container}>
			{transactions.length ? <HeaderTotal title="Total" value={displayTotal()}/> : null}
			<View style={styles.scroll}>
				{transactions.length ? (
					<ScrollView testID="transactions">
						{sortString(transactions, 'createdAt', 'desc')
							.map((transaction, index) => <TransactionList key={index} value={transaction}/>)}
					</ScrollView>
				) : <EmptyTransaction id="no-transactions" message="Você não possui transações"/>}
			</View>
			<View>
				<Button title="Nova Transação" onPress={() => navigation.navigate('Modal')}/>
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
	},
	loadingTotal: {
		flexDirection: "row",
		justifyContent: "flex-end",
		padding: SCALE_8
	}
});

TransactionsScreen.navigationOptions = headerConfig('Transações');
