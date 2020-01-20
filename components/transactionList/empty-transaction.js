import React from 'react';
import {StyleSheet, View} from "react-native";
// Components
import {P2} from "../../components/typography";
import {Feather} from "@expo/vector-icons";
import {GRAY_LIGHT} from "../../styles/colors";
import {SCALE_36} from "../../styles/spacing";

export default function EmptyTransaction({id, message, iconName, iconColor, iconSize}) {
	return (
		<View style={styles.container} testID={id}>
			<Feather
				name={iconName || "bar-chart-2"}
				size={iconSize || 20}
				color={iconColor || GRAY_LIGHT}
			/>
			<P2>{message}</P2>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: SCALE_36
	}
});
