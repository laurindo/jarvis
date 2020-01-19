import React from 'react';
import {StyleSheet, View} from "react-native";
// Components
import {H3} from "../../components/typography";
// Constants
import currency from "../../constants/currency"
import {SCALE_8} from "../../styles/spacing";

const Total = ({value}) => {
	return (
		<View style={styles.container}>
			<H3>Total</H3>
			<H3>{currency.current} {value}</H3>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingLeft: SCALE_8,
		paddingRight: SCALE_8
	}
});

export default Total;
