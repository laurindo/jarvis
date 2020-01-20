import React from 'react';
import {StyleSheet, View} from "react-native";
// Components
import {H3} from "../../components/typography";
// Constants
import {SCALE_8} from "../../styles/spacing";
import {validateNumber} from "../../utils/number";
import SimpleTotal from "./simple-total";

const HeaderTotal = ({title, value = 0}) => {
	return (
		<View style={styles.container}>
			{title && <H3>{title}</H3>}
			<H3><SimpleTotal value={validateNumber(value) ? value : 0} /></H3>
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

export default HeaderTotal;
