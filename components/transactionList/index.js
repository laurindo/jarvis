import React from "react";
import {StyleSheet, View} from "react-native";
import {H3, S2} from "../typography";
import {SCALE_8} from "../../styles/spacing";
import {DARK_PRIMARY} from "../../styles/colors";

const TransactionList = ({value}) => {
	return (
		<View style={styles.container}>
			<View style={styles.item}>
				<H3>{value.label}</H3>
			</View>
			<View style={styles.item}>
				<S2>{value.createdAt}</S2>
				<S2>R$ {value.value}</S2>
			</View>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		padding: SCALE_8,
		backgroundColor: DARK_PRIMARY,
		marginBottom: SCALE_8,
		borderRadius: 5
	},
	item: {
		flexDirection: "row",
		justifyContent: "space-between"
	}
});

export default TransactionList;