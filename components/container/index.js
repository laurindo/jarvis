import React from "react";
import {StyleSheet, View} from "react-native";
import {SCALE_18} from "../../styles/spacing";
import {PRIMARY} from "../../styles/colors";

const Container = ({style, children}) => {
	return (
		<View style={[styles.container, style]}>{children}</View>
	)
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: SCALE_18,
		backgroundColor: PRIMARY
	}
});

export default Container;