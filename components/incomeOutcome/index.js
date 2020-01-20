import React from "react";
import {StyleSheet, View} from "react-native";
import {Feather} from "@expo/vector-icons";
import {H1, H3} from "../typography";
import SimpleTotal from "../total/simple-total";
import {DANGER, DARK_PRIMARY, SUCCESS} from "../../styles/colors";
import {SCALE_16, SCALE_8} from "../../styles/spacing";

const IncomeOutcome = ({title, value, size = 50, type = 'entrada'}) => {
	const isIncome = type === "entrada";
	return (
		<View style={styles.container}>
			<View>
				<H3 style={isIncome ? styles.income : styles.outcome}>{title}</H3>
				<H1><SimpleTotal value={value}/></H1>
			</View>
			<View style={styles.chart}>
				<Feather
					name={isIncome ? "trending-up" : "trending-down"}
					size={size}
					color={isIncome ? SUCCESS : DANGER}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: DARK_PRIMARY,
		borderRadius: 20,
		padding: SCALE_16,
		marginBottom: SCALE_8
	},
	chart: {
		flexDirection: "row",
		alignItems: "center"
	},
	income: {
		color: SUCCESS
	},
	outcome: {
		color: DANGER
	}
});

export default IncomeOutcome;