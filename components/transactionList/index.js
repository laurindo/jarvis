import React from "react";
import {StyleSheet, View} from "react-native";
import moment from "moment";
import {H3, S2} from "../typography";
import SimpleTotal from "../total/simple-total";
import {DATETIME_FORMAT} from "../../constants/datetime";
import {DANGER, DARK_PRIMARY, SUCCESS} from "../../styles/colors";
import {SCALE_8} from "../../styles/spacing";
import {Feather} from "@expo/vector-icons";

const TransactionList = ({value}) => {
	return (
		<View style={styles.container}>
			<View style={styles.item}>
				<H3>{value.label}</H3>
				<H3>{value.type === "entrada" ? (
					<Feather
						name={"trending-up"}
						size={20}
						color={SUCCESS}
					/>
				) : <Feather
					name={"trending-down"}
					size={20}
					color={DANGER}
				/>}</H3>
			</View>
			<View style={styles.item}>
				<S2>{moment(value.createdAt).format(DATETIME_FORMAT.datetime)}</S2>
				<S2><SimpleTotal value={value.value}/></S2>
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