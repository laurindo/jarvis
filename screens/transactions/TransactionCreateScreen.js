import React from 'react';
import {StyleSheet, View, ScrollView, KeyboardAvoidingView} from "react-native";
// Store
import {Transaction} from "../../store";
import {actions} from "../../store/transactions.store";
// Components
import Container from "../../components/container";
import Button from "../../components/button";
import {H1, H3} from "../../components/typography";
import InputText from "../../components/input/text";
import InputPicker from "../../components/input/picker";
import {SCALE_36} from "../../styles/spacing";

const validateTransaction = transaction => {
	const {label, value, type} = transaction;
	return label && value && type;
};

const transactionTypes = [
	{label: "Selectione o tipo", value: ""},
	{label: "Entrada", value: "entrada"},
	{label: "Saida", value: "saida"}
];

export default function TransactionCreateScreen({navigation}) {

	const [transaction, setTransaction] = React.useState({});
	const dispatch = React.useContext(Transaction.Dispatch);

	return (
		<Container style={styles.container}>
			<View style={styles.body}>
				<H1>Nova Transação</H1>

				<H3>Transação</H3>
				<InputText
					testID='transaction-label'
					value={transaction.label}
					autoFocus
					onChange={value => setTransaction({...transaction, label: value})}
				/>

				<H3>Valor</H3>
				<InputText
					testID='transaction-value'
					value={transaction.value}
					keyboardType="numeric"
					maxLength={10}
					onChange={value => setTransaction({...transaction, value})}
				/>

				<InputPicker
					testID='transaction-type'
					value={transaction.type}
					values={transactionTypes}
					onChange={itemValue => setTransaction({...transaction, type: itemValue})}
				/>
			</View>
			<View>
				<View>
					{validateTransaction(transaction) ? (
						<Button title="Salvar" onPress={() => {
							dispatch({type: actions.ADD_TRANSACTION, payload: transaction});
							navigation.navigate('Transactions');
						}}/>
					) : <Button title="Salvar" disabled/>}
				</View>
				<View style={styles.cancel}>
					<Button title="Cancelar" cancel onPress={() => navigation.navigate('Transactions')}/>
				</View>
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		justifyContent: "space-between"
	},
	body: {
		paddingTop: SCALE_36
	},
	cancel: {
		marginTop: 20
	}
});
