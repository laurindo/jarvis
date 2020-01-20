import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import {P2} from "../typography";
import {SUCCESS, WHITE} from "../../styles/colors";

const Button = ({title, buttonStyle, textStyle, onPress}) => {
	return (
		<TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
			<P2 style={[styles.text, textStyle]}>{title}</P2>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		display: 'flex',
		height: 50,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: SUCCESS,
		shadowColor: SUCCESS,
		shadowOpacity: 0.9,
		shadowOffset: {height: 10, width: 0},
		shadowRadius: 20,
	},
	text: {
		textTransform: 'uppercase',
		color: WHITE,
	},
});

export default Button;